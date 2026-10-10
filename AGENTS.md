# AGENTS.md

## Purpose

This repository is a **Storybook 10** workspace for building and documenting UI components with:

- **Storybook HTML + Vite**
- **Twig** templates
- **Bootstrap 5**
- **Gulp** for asset generation
- **Sass** for styling

Agents working in this repository should preserve the current Storybook + Twig + Gulp workflow and avoid introducing alternative build systems unless explicitly requested.

---

## Stack Summary

### Core tools

- Storybook framework: `@storybook/html-vite`
- Stories: `*.stories.js`
- Template engine: `twig`
- Twig Vite integration: `vite-plugin-twig-drupal`
- Drupal Twig helpers: local package `packages/drupal-twig-extensions` (replaces the npm package, see Twig Rules)
- CSS pipeline: `gulp-sass` + `autoprefixer` + `cssnano`
- JS pipeline: `gulp-concat` + `gulp-terser`
- UI framework: `bootstrap`

### Important config files

- `package.json`
- `gulpfile.js`
- `.storybook/main.js`
- `.storybook/preview.js`
- `.storybook/preview-head.html`
- `.storybook/manager.js`
- `.storybook/MyTheme.js`

---

## Source of Truth

### Edit source files here

- `stories/components/`
- `stories/foundations/`
- `stories/utilities/`
- `stories/documentation/`
- `stories/main.scss`
- `stories/ck5editor.scss`
- `.storybook/`
- `gulpfile.js`

### Generated output — do not edit manually

- `public/css/`
- `public/js/`
- `dist/`
- `storybook-static/`

If you need to change runtime output, modify the source under `stories/` or the relevant build config, then rebuild.

---

## Development Commands

**Always run Node/npm commands through DDEV** (`ddev npm …`, `ddev npx …`). The DDEV web container provides the expected Node version (`nodejs_version: "22"` in `.ddev/config.yaml`) and the Playwright/Chromium dependencies used by the Vitest browser tests. The host's `node`/`npm` is not reliable (it may point to an old nvm version, e.g. Node 11, on which `npm audit` and the toolchain fail).

If the containers are not running, start them with `ddev start`.

### Install

```bash
ddev npm install
```

### Start Storybook + Gulp

```bash
ddev npm run develop
```

### Start only Storybook

```bash
ddev npm run storybook
```

### Start only Gulp

```bash
ddev npm run gulp
```

### Build static Storybook

```bash
ddev npm run build-storybook
```

### Run tests

```bash
ddev npm test
```

### Security audit

```bash
ddev npm audit
```

---

## Storybook Notes

### Current behavior

- Stories are loaded from `stories/**/*.stories.js`
- `.twig` files are processed by `vite-plugin-twig-drupal` (Drupal Twig extensions from `packages/drupal-twig-extensions`)
- Raw sources (Twig, docs) are imported with Vite's `?raw` suffix, e.g. `import Docs from './x.docs.md?raw'`
- Global assets are loaded in `.storybook/preview-head.html` from `public/` (served as static dir):
  - `/css/style.css`
  - `/js/sb-main.js`
- `preview-head.html` also provides a minimal `Drupal.behaviors` / `once()` shim, so `*.behaviors.js` run as in Drupal

### Consequence

Storybook depends on Gulp-generated assets existing in `public/`. If Storybook starts but styling or JS behavior is missing, run Gulp or use the combined development command.

---

## Twig Rules

### Current integration

Twig is compiled by `vite-plugin-twig-drupal`, configured in `.storybook/main.js` (`viteFinal`).

### Guidance

- Preserve compatibility between `twig` and `vite-plugin-twig-drupal`
- `drupal-twig-extensions` is a **local package** (`packages/drupal-twig-extensions/twig.js`), wired through an npm `overrides` entry: `vite-plugin-twig-drupal` imports `drupal-twig-extensions/twig`, but the npm package pulls in a vulnerable `locutus@2`. It only implements the extensions used by the templates (currently `|clean_class`). If a template needs another Drupal filter/function, add it there instead of reinstalling the npm package
- Do not use `|t` in components: expose a variable with an English default (e.g. `breadcrumb_title|default('Breadcrumb')`) and let Drupal pass the translated string
- Do not upgrade Twig in isolation without checking loader and helper compatibility
- Keep Twig story patterns consistent with existing files under `stories/components/` and `stories/foundations/`

### Dist collection caveat

In `gulpfile.js`, Twig files copied to `dist/components` exclude `*.local.twig`.

That means:

- `*.twig` = distributable component templates
- `*.local.twig` = local/story examples only

Do not move a distributable template to `*.local.twig` unless that is intentional.

---

## Gulp Notes

### Gulp is responsible for

- compiling `stories/main.scss`
- compiling `stories/ck5editor.scss`
- generating JS bundle(s) from `*.behaviors.js`
- copying Twig templates for distribution
- copying images and fonts into `dist/`

### Watched patterns in the current implementation

- `stories/foundations/**/_*.scss`
- `stories/components/**/_*.scss`
- `stories/foundations/**/*.behaviors.js`
- `stories/utilities/**/*.behaviors.js`
- `stories/components/**/*.behaviors.js`
- `stories/components/**/*.twig`

### Caution

The default Gulp workflow performs cleanup in `dist/` before regeneration. Avoid interrupting a build mid-process if you want to preserve a clean generated tree.

---

## Component Conventions

A component folder under `stories/components/<name>/` commonly contains:

```text
<name>.twig
_<name>.scss
<name>.stories.js
<name>.docs.md
<name>.behaviors.js
```

Only add the files that are needed.

### Drupal form components

Form components live in `stories/components/form/`, with one sub-folder per Drupal core template (`form-element`, `form-element-label`, `input`, `textarea`, `select`, `fieldset`, `radios`, `checkboxes`). Each keeps **exactly the variables of that core template**, so a Drupal override is a single `{% include "@components/form/<name>/<name>.twig" %}`.

- Derive Bootstrap classes from the classes Drupal core sets (`attributes.hasClass('form-text')`…), not from preprocess-only variables
- Sub-folder styles (`_<name>.scss`) are imported by `form/_form.scss`, not by `components/_index.scss`
- Stories render fields through `stories/components/form/form.helpers.js`, which mimics Drupal's `FormPreprocess` (ids, label, description, error/required states)
- twig.js does not support a ternary without `else` inside an array literal: write `cond ? 'class' : ''`
- `collectTwig` rewrites `.twig'` to `.twig"`: use double quotes for template paths, even in comments

### Existing story pattern

Most stories follow this structure:

1. import the Twig template
2. optionally import raw source with `?raw` (shown via `parameters.componentSource`)
3. export Storybook metadata
4. define a `Template` function returning `template(args)`
5. export variants with `.bind({})`

Preserve this style unless the whole repo is intentionally refactored.

---

## Foundations and Utilities

- `stories/foundations/` contains design primitives and theme-level examples
- `stories/utilities/` contains JS behavior helpers or utility-level assets
- `stories/components/` contains reusable UI components

When unsure where a new file belongs:

- use `components/` for reusable UI blocks
- use `foundations/` for theme primitives and references
- use `utilities/` for shared support code or behavior scripts

---

## Manager Theme

Storybook manager UI customization lives in:

- `.storybook/manager.js`
- `.storybook/MyTheme.js`

Do not change branding or manager theme settings unless the task is specifically about Storybook UI branding.

---

## Agent Guardrails

### Do

- modify source files, not generated outputs
- follow the existing Storybook/Twig/Gulp architecture
- keep changes small and consistent with nearby files
- verify build impact when touching `gulpfile.js`, `.storybook/`, or dependency versions
- check repository status before and after running build steps

### Do not

- do not manually edit `public/`, `dist/`, or `storybook-static/`
- do not replace Gulp, Twig, or Storybook framework choices unless explicitly requested
- do not assume `dist/` is disposable without checking git state
- do not upgrade Twig alone without validating the rest of the Twig toolchain
- do not introduce unrelated frameworks or tooling (React, TypeScript, etc.) unless requested

---

## Validation Checklist

After a meaningful change, validate the relevant flow:

```bash
ddev npm run gulp
ddev npm run storybook
ddev npm run build-storybook
ddev npm test
```

Also verify:

- Storybook starts without loader errors
- Twig stories render correctly
- global CSS is present
- `public/js/sb-main.js` exists if Storybook imports it
- no unintended generated-file churn appears in git status

---

## Quick Decision Guide

### If you need to...

- **change a component’s markup** → edit its `.twig`
- **change component styling** → edit its `_*.scss` or shared SCSS source
- **change component behavior** → edit `*.behaviors.js` (use `Drupal.behaviors` + `once()`, never `DOMContentLoaded`)
- **change Storybook presentation/docs** → edit `*.stories.js`, docs files, or `.storybook/`
- **change build behavior** → edit `gulpfile.js` or Storybook config
- **change distributed Twig output** → verify both source Twig and Gulp `collectTwig` behavior

---

## Final Rule

When in doubt, follow the existing implementation patterns already present in the repository rather than inventing a new structure.
