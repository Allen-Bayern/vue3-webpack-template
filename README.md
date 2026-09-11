# Vue 3 Webpack Template

A minimal, modern **Vue 3 + TypeScript** template powered by **Vue CLI (webpack)**, with Vue Router, Pinia, JSX, and an ES5-compatible production build.

[English](./README.md) | [简体中文](./README.zh-CN.md) | [한국어](./README.ko.md)

## Features

- **Vue 3 + TypeScript** — `<script setup>` Composition API; the entry is a JSX root that renders `<RouterView />` directly (no `App.vue`)
- **Vue Router + Pinia** — hash-history routing with lazy-loaded views, Pinia pre-installed
- **TypeScript via Babel** — `.ts` / `.tsx` compiled by `@babel/preset-typescript` + `babel-loader`, no `ts-loader`; type errors are caught by the IDE / `vue-tsc`, not at build time
- **JSX / TSX** — supported through `@vue/babel-plugin-jsx`
- **Sass / SCSS** — ready out of the box, with shared variables in `src/scss/main.scss` (`$color--primary`, …)
- **CSS Modules** — auto-enabled for `*.module.css` / `*.module.scss`, custom `[local]__[hash:base64]` class names, camelCase exports alongside the original names
- **ES5 syntax floor** — `.browserslistrc` targets `ie 11`, so Babel and the webpack runtime emit ES5-only syntax; core-js polyfills are injected on demand (`useBuiltIns: 'usage'`), and `pnpm build` runs with `--no-module` (legacy output only)
- **ESLint + Prettier** — preconfigured; the dev server lints on save (`lintOnSave: 'error'`), Prettier formats on save in VS Code
- **Autoprefixer** — via `.postcssrc.js`, browser targets driven by browserslist
- **Path aliases** — `@` / `~` → `src/`, `assets` → `src/assets/`
- Minimal, readable configs that are easy to own and customize

## Prerequisites

- Node.js `>= 16`
- pnpm 8+ (enable via [Corepack](https://nodejs.org/api/corepack.html): `corepack enable`)

## Quick Start

Scaffold a new project with [degit](https://github.com/Rich-Harris/degit) — it pulls the template without any git history:

```bash
npx degit Allen-Bayern/vue3-webpack-template my-app
# or: pnpm dlx degit Allen-Bayern/vue3-webpack-template my-app

cd my-app
pnpm install
pnpm dev
```

Then open <http://localhost:2000> and start building.

## Scripts

| Command      | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| `pnpm dev`   | Start the dev server (with HMR) on port `2000`, lint on save |
| `pnpm build` | Production build to `dist/` with `--no-module` (ES5 output)  |

## Project Structure

```text
├── index.html              # HTML template (lang, title & favicon injected via vue.config.js)
├── static/                 # Copied as-is to dist/ (favicon.ico)
├── src/
│   ├── main.tsx            # Entry: installs Pinia + Router, mounts <RouterView />
│   ├── router/             # vue-router (hash history, lazy routes)
│   ├── views/              # Route-level components (HomeView.vue)
│   ├── components/         # Reusable components (HelloWorld.vue)
│   ├── assets/             # Bundled assets (logo.png; alias: assets/)
│   └── scss/               # Shared SCSS variables & mixins (main.scss)
├── types/                  # Ambient declarations (.vue, *.module.*, images, …)
├── babel.config.js         # Babel: TS/JSX, on-demand polyfills, runtime helpers
├── vue.config.js           # Vue CLI / webpack: entry, loaders, aliases, CSS Modules, HTML
├── tsconfig.json           # TypeScript config (paths mirror the webpack aliases)
├── .browserslistrc         # Browser targets (ie 11 → ES5 syntax floor)
├── .postcssrc.js           # PostCSS (autoprefixer)
├── .eslintrc.cjs           # ESLint config
├── .prettierrc.yml         # Prettier config
└── .editorconfig           # Editor style
```

## Customization

- **Dev server port** — edit `devServer.port` in `vue.config.js` (default `2000`)
- **Page title / language** — edit `title` and `lang` in `getHtmlPluginConfig()` in `vue.config.js`
- **Browser targets** — edit `.browserslistrc` (currently `ie 11` as an ES5 syntax floor; see the comments in the file for the trade-offs)
- **Path aliases** — add aliases in both `vue.config.js` (`chainWebpack`) and `tsconfig.json` (`paths`)
- **Favicon** — replace `static/favicon.ico`
