/**
 * @file Builds the theme assets (replaces the former gulpfile.js).
 *
 *   npm run assets         one-off build
 *   npm run assets:watch   build, then rebuild on changes under stories/
 *
 * Output (consumed by Storybook from public/ and by the Drupal theme from dist/):
 * - public/css/style.css, dist/css/style.css (+ autoprefixer), dist/css/style.min.css
 * - public/js/sb-main.js (+ .min.js), dist/js/sb-main.js (+ .min.js): vendors and
 *   *.behaviors.js concatenated as is, so they keep exposing their globals
 *   (bootstrap, L, GLightbox, Masonry, scrollCue) like classic Drupal libraries
 * - dist/components/: component Twig templates, relative includes rewritten to @components/
 * - dist/img/, dist/css/fonts/ and public/css/fonts/: images and fonts
 *
 * Kept in its own config file (not vite.config.*) so Storybook's Vite does not load it.
 */
import { existsSync } from 'node:fs';
import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';
import * as sass from 'sass';
import { minify } from 'terser';
import { glob } from 'tinyglobby';
import { defineConfig } from 'vite';

const config = {
  stylesMain: 'stories/main.scss',
  js: [
    'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    'node_modules/leaflet/dist/leaflet.js',
    'node_modules/scrollcue/scrollCue.js',
    'node_modules/glightbox/dist/js/glightbox.js',
    // 'node_modules/bs5-lightbox/dist/index.js',
    'node_modules/masonry-layout/dist/masonry.pkgd.js',
    'stories/foundations/**/*.behaviors.js',
    'stories/utilities/**/*.behaviors.js',
    'stories/components/**/*.behaviors.js',
  ],
  twig: {
    base: 'stories/components',
    patterns: ['**/*.twig', '!**/*.local.twig'],
  },
  bsIcons: 'node_modules/bootstrap-icons/font/fonts',
  public: {
    css: 'public/css',
    js: 'public/js',
    img: 'public/img',
    fonts: 'public/css/fonts',
  },
  dist: {
    root: 'dist',
    css: 'dist/css',
    js: 'dist/js',
    twig: 'dist/components',
    img: 'dist/img',
    fonts: 'dist/css/fonts',
  },
  watch: 'stories',
};

const write = async (file, contents) => {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, contents);
};

// Copies the files matching `patterns` under `base` to each destination, keeping
// their path relative to `base`.
const copyFiles = async (base, patterns, destinations, transform) => {
  const files = await glob(patterns, { cwd: base });
  await Promise.all(files.map(async (file) => {
    const source = path.join(base, file);
    if (transform) {
      const contents = transform(await readFile(source, 'utf8'));
      await Promise.all(destinations.map((dest) => write(path.join(dest, file), contents)));
    } else {
      await Promise.all(destinations.map(async (dest) => {
        await mkdir(path.dirname(path.join(dest, file)), { recursive: true });
        await cp(source, path.join(dest, file));
      }));
    }
  }));
};

// Removes the sub-directories of dist/ (files at its root are kept).
const cleanDist = async () => {
  if (!existsSync(config.dist.root)) {
    return;
  }
  const entries = await readdir(config.dist.root, { withFileTypes: true });
  await Promise.all(entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => rm(path.join(config.dist.root, entry.name), { recursive: true, force: true })));
};

const collectBsIcons = () => copyFiles(config.bsIcons, ['*'], [config.public.fonts, config.dist.fonts]);

const collectFonts = () => copyFiles(config.public.fonts, ['*/*'], [config.dist.fonts]);

const collectImages = () => copyFiles(config.public.img, ['**/*'], [config.dist.img]);

const collectTwig = () => copyFiles(config.twig.base, config.twig.patterns, [config.dist.twig], (contents) => contents
  .replaceAll('"../../', '"@components/')
  .replaceAll('\'../../', '"@components/')
  .replaceAll('"../', '"@components/')
  .replaceAll('\'../', '"@components/')
  .replaceAll('.twig\'', '.twig"'));

// Compiles stories/main.scss to style.css, then autoprefixes and minifies it.
const compileStyles = async () => {
  const result = sass.compileString(await readFile(config.stylesMain, 'utf8'), {
    // Allow relative imports, and "node_modules/…" imports from the project root.
    loadPaths: [path.dirname(config.stylesMain), '.'],
    // Resolve webpack-style "~package/…" imports to node_modules.
    importers: [{
      findFileUrl: (url) => url.startsWith('~')
        ? new URL(url.slice(1), pathToFileURL('node_modules/'))
        : null,
    }],
    // Bootstrap 5.3 still uses deprecated Sass features: hide those warnings.
    quietDeps: true,
    silenceDeprecations: ['import', 'color-functions', 'global-builtin'],
  });

  // Leaflet images are copied to img/leaflet/.
  const css = result.css
    .replaceAll('url(images/marker-icon.png);', 'url(../img/leaflet/marker-icon.png);')
    .replaceAll('url(images/layers.png);', 'url(../img/leaflet/layers.png);')
    .replaceAll('url(images/layers-2x.png);', 'url(../img/leaflet/layers-2x.png);');
  const from = path.join(config.dist.css, 'style.css');

  const prefixed = await postcss([autoprefixer()]).process(css, { from, to: from, map: false });
  // svgo can't parse Bootstrap's URL-encoded SVG data URIs (%3csvg…).
  const minified = await postcss([cssnano({ preset: ['default', { svgo: false }] })])
    .process(prefixed.css, { from, to: from, map: false });

  await Promise.all([
    write(path.join(config.public.css, 'style.css'), css),
    write(path.join(config.dist.css, 'style.css'), prefixed.css),
    write(path.join(config.dist.css, 'style.min.css'), minified.css),
  ]);
};

// Concatenates vendors and behaviors to sb-main.js, then minifies it.
const compileJs = async () => {
  const files = [];
  for (const pattern of config.js) {
    files.push(...(await glob(pattern)).sort());
  }
  const js = (await Promise.all(files.map((file) => readFile(file, 'utf8')))).join('\n');
  const { code } = await minify(js);

  await Promise.all([config.public.js, config.dist.js].flatMap((dir) => [
    write(path.join(dir, 'sb-main.js'), js),
    write(path.join(dir, 'sb-main.min.js'), code),
  ]));
};

const tasks = {
  styles: compileStyles,
  js: compileJs,
  twig: collectTwig,
};

// Which task a changed file under stories/ triggers.
const taskFor = (file) => {
  if (file.endsWith('.scss')) {
    return 'styles';
  }
  if (file.endsWith('.behaviors.js')) {
    return 'js';
  }
  if (file.endsWith('.twig') && !file.endsWith('.local.twig')) {
    return 'twig';
  }
  return null;
};

const themeAssets = () => {
  const virtualId = '\0theme-assets';
  let firstBuild = true;
  const dirty = new Set();

  const run = async (name, task) => {
    const start = Date.now();
    await task();
    console.log(`  ${name} (${Date.now() - start} ms)`);
  };

  return {
    name: 'theme-assets',
    resolveId: (id) => (id === 'virtual:theme-assets' ? virtualId : null),
    load: (id) => (id === virtualId ? 'export {}' : null),

    watchChange(id) {
      const task = taskFor(id);
      if (task) {
        dirty.add(task);
      }
    },

    // Nothing to emit: the assets are written by the tasks above. Vite writes
    // the bundle in watch mode even with build.write disabled.
    generateBundle(options, bundle) {
      for (const fileName of Object.keys(bundle)) {
        delete bundle[fileName];
      }
    },

    async buildStart() {
      this.addWatchFile(path.resolve(config.watch));

      if (firstBuild) {
        firstBuild = false;
        await run('clean dist', cleanDist);
        await Promise.all([
          run('bootstrap icons', collectBsIcons),
          run('fonts', collectFonts),
          run('images', collectImages),
          ...Object.entries(tasks).map(([name, task]) => run(name, task)),
        ]);
        return;
      }

      const names = [...dirty];
      dirty.clear();
      await Promise.all(names.map((name) => run(name, tasks[name])));
    },
  };
};

export default defineConfig({
  // Nothing to serve: public/ is Storybook's static dir, not this build's.
  publicDir: false,
  logLevel: 'warn',
  plugins: [themeAssets()],
  build: {
    // The plugin writes the assets itself; the bundle is an empty entry.
    write: false,
    // Never the default dist/, which is the theme output.
    outDir: 'node_modules/.cache/vite-assets',
    emptyOutDir: false,
    rollupOptions: {
      input: 'virtual:theme-assets',
      onwarn(warning, warn) {
        if (warning.code !== 'EMPTY_BUNDLE') {
          warn(warning);
        }
      },
    },
  },
});
