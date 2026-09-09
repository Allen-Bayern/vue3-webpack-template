# Vue 3 Webpack Template

A minimal, modern **Vue 3 + TypeScript** template powered by **Vue CLI (webpack)**.

[English](./README.md) | [简体中文](./README.zh-CN.md) | [한국어](./README.ko.md)

## Features

- **Vue 3** — Composition API ready
- **TypeScript** — compiled with `@babel/preset-typescript` via `babel-loader`, no `ts-loader` involved
- **JSX / TSX** — supported through `@vue/babel-plugin-jsx`
- **Sass / SCSS** — ready out of the box
- **CSS Modules** — auto-enabled for `*.module.css` / `*.module.scss`, with camelCase export convention
- **ESLint + Prettier** — preconfigured, with lint-on-save in the dev server
- **Autoprefixer** — via PostCSS, browser targets driven by `browserslist`
- **core-js** — polyfills injected on demand (`useBuiltIns: 'usage'`), no manual imports
- **Path aliases** — `@` → `src/` and `assets` → `src/assets/`
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

| Command       | Description                                        |
| ------------- | -------------------------------------------------- |
| `pnpm dev`    | Start the dev server (with HMR) on port `2000`     |
| `pnpm build`  | Production build, output to `dist/`                |

## Project Structure

```text
├── index.html              # HTML template (lang & title injected via vue.config.js)
├── static/                 # Copied as-is to dist/ (favicon.ico)
├── src/
│   ├── main.ts             # App entry
│   ├── App.vue             # Root component
│   ├── components/         # Reusable components
│   ├── assets/             # Bundled assets (alias: assets/)
│   └── shims-vue.d.ts      # Type declarations for .vue modules
├── babel.config.js         # Babel config (TS, JSX, on-demand polyfills)
├── vue.config.js           # Vue CLI / webpack config (entry, loaders, aliases, CSS Modules)
├── tsconfig.json           # TypeScript config
├── .eslintrc.cjs           # ESLint config
└── .prettierrc.yml         # Prettier config
```

## Customization

- **Dev server port** — edit `devServer.port` in `vue.config.js` (default `2000`)
- **Page title / language** — edit `title` and `lang` in `getHtmlPluginConfig()` in `vue.config.js`
- **Browser targets** — edit the `browserslist` field in `package.json` (`> 1%`, `last 2 versions` by default)
- **Favicon** — replace `static/favicon.ico`
