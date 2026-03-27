# AGENTS.md

## Purpose

This repository is a **Storybook 8** workspace for building and documenting UI components with:

- **Storybook HTML + Webpack 5**
- **Twig** templates
- **Bootstrap 5**
- **Gulp** for asset generation
- **Sass** for styling

Agents working in this repository should preserve the current Storybook + Twig + Gulp workflow and avoid introducing alternative build systems unless explicitly requested.

---

## Stack Summary

### Core tools

- Storybook framework: `@storybook/html-webpack5`
- Stories: `*.stories.js`
- Template engine: `twig`
- Twig webpack integration: `twig-loader`
- Drupal Twig helpers: `drupal-twig-extensions`
- CSS pipeline: `gulp-sass` + `autoprefixer` + `cssnano`
- JS pipeline: `gulp-concat` + `gulp-terser`
- UI framework: `bootstrap`

### Important config files

- `package.json`
- `gulpfile.js`
- `.storybook/main.js`
- `.storybook/preview.js`
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

Prefer the DDEV workflow if the project is being run inside its expected environment.

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

### Direct npm equivalents

```bash
npm install
npm run develop
npm run storybook
npm run gulp
npm run build-storybook
```

---

## Storybook Notes

### Current behavior

- Stories are loaded from `stories/**/*.stories.js`
- `.twig` files are processed by `twig-loader`
- `.scss` files are handled by Storybook through `style-loader`, `css-loader`, and `sass-loader`
- Global assets are imported in `.storybook/preview.js` from:
  - `public/js/sb-main.js`
  - `public/css/style.css`

### Consequence

Storybook depends on Gulp-generated assets existing in `public/`. If Storybook starts but styling or JS behavior is missing, run Gulp or use the combined development command.

---

## Twig Rules

### Current integration

Twig is configured in `.storybook/preview.js` using:

- `import Twig from 'twig'`
- `addDrupalExtensions(Twig)` from `drupal-twig-extensions/twig`

### Guidance

- Preserve compatibility between `twig`, `twig-loader`, and `drupal-twig-extensions`
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
<name>.docs.mdx
<name>.behaviors.js
```

Only add the files that are needed.

### Existing story pattern

Most stories follow this structure:

1. import the Twig template
2. optionally import raw source with `raw-loader`
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
- do not introduce unrelated frameworks or tooling (React, Vite, TypeScript, etc.) unless requested

---

## Validation Checklist

After a meaningful change, validate the relevant flow:

```bash
npm run gulp
npm run storybook
npm run build-storybook
```

Or with DDEV:

```bash
ddev npm run gulp
ddev npm run storybook
ddev npm run build-storybook
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
- **change component behavior** → edit `*.behaviors.js`
- **change Storybook presentation/docs** → edit `*.stories.js`, docs files, or `.storybook/`
- **change build behavior** → edit `gulpfile.js` or Storybook config
- **change distributed Twig output** → verify both source Twig and Gulp `collectTwig` behavior

---

## Final Rule

When in doubt, follow the existing implementation patterns already present in the repository rather than inventing a new structure.
