# Vue 3 Webpack Template

一个基于 **Vue CLI（webpack）** 的简洁、现代的 **Vue 3 + TypeScript** 模板，内置 Vue Router、Pinia、JSX 支持，并产出兼容 ES5 的生产构建。

[English](./README.md) | [简体中文](./README.zh-CN.md) | [한국어](./README.ko.md)

## 特性

- **Vue 3 + TypeScript** —— `<script setup>` Composition API；入口是一个直接渲染 `<RouterView />` 的 JSX 根组件（没有 `App.vue`）
- **Vue Router + Pinia** —— hash 路由 + 路由级懒加载，Pinia 预装
- **Babel 编译 TypeScript** —— `.ts` / `.tsx` 由 `@babel/preset-typescript` + `babel-loader` 编译，无需 `ts-loader`；类型错误由 IDE / `vue-tsc` 检查，构建时不做类型检查
- **JSX / TSX** —— 通过 `@vue/babel-plugin-jsx` 支持
- **Sass / SCSS** —— 开箱即用，公共变量位于 `src/scss/main.scss`（`$color--primary` 等）
- **CSS Modules** —— 对 `*.module.css` / `*.module.scss` 自动启用，类名格式为 `[local]__[hash:base64]`，同时导出 camelCase 与原命名
- **ES5 语法基线** —— `.browserslistrc` 以 `ie 11` 为目标，Babel 与 webpack 运行时只输出 ES5 语法；core-js 按需注入 polyfill（`useBuiltIns: 'usage'`），`pnpm build` 使用 `--no-module`（仅产出传统版本）
- **ESLint + Prettier** —— 预配置完成；开发服务器保存即 lint（`lintOnSave: 'error'`），VS Code 中 Prettier 保存即格式化
- **Autoprefixer** —— 通过 `.postcssrc.js` 生效，目标浏览器由 browserslist 决定
- **路径别名** —— `@` / `~` → `src/`、`assets` → `src/assets/`
- 配置简洁易读，方便掌控与定制

## 环境要求

- Node.js `>= 16`
- pnpm 8+（通过 [Corepack](https://nodejs.org/api/corepack.html) 启用：`corepack enable`）

## 快速开始

使用 [degit](https://github.com/Rich-Harris/degit) 创建新项目 —— 它只拉取模板文件，不带任何 git 历史：

```bash
npx degit Allen-Bayern/vue3-webpack-template my-app
# 或者：pnpm dlx degit Allen-Bayern/vue3-webpack-template my-app

cd my-app
pnpm install
pnpm dev
```

然后打开 <http://localhost:2000> 开始开发。

## 脚本命令

| 命令         | 说明                                               |
| ------------ | -------------------------------------------------- |
| `pnpm dev`   | 启动开发服务器（含 HMR），端口 `2000`，保存即 lint |
| `pnpm build` | 生产构建到 `dist/`，使用 `--no-module`（ES5 输出） |

## 项目结构

```text
├── index.html              # HTML 模板（lang、title 与 favicon 由 vue.config.js 注入）
├── static/                 # 原样拷贝到 dist/（favicon.ico）
├── src/
│   ├── main.tsx            # 入口：安装 Pinia + Router，挂载 <RouterView />
│   ├── router/             # vue-router（hash 路由，懒加载）
│   ├── views/              # 路由级组件（HomeView.vue）
│   ├── components/         # 可复用组件（HelloWorld.vue）
│   ├── assets/             # 参与打包的资源（logo.png；别名：assets/）
│   └── scss/               # 公共 SCSS 变量与混入（main.scss）
├── types/                  # 环境声明（.vue、*.module.*、图片等）
├── babel.config.js         # Babel 配置（TS/JSX、按需 polyfill、运行时辅助函数）
├── vue.config.js           # Vue CLI / webpack 配置（入口、loader、别名、CSS Modules、HTML）
├── tsconfig.json           # TypeScript 配置（paths 与 webpack 别名保持一致）
├── .browserslistrc         # 目标浏览器（ie 11 → ES5 语法基线）
├── .postcssrc.js           # PostCSS（autoprefixer）
├── .eslintrc.cjs           # ESLint 配置
├── .prettierrc.yml         # Prettier 配置
└── .editorconfig           # 编辑器风格
```

## 自定义

- **开发服务器端口** —— 修改 `vue.config.js` 中的 `devServer.port`（默认 `2000`）
- **页面标题 / 语言** —— 修改 `vue.config.js` 中 `getHtmlPluginConfig()` 里的 `title` 与 `lang`
- **目标浏览器** —— 修改 `.browserslistrc`（目前为 `ie 11`，作为 ES5 语法基线；取舍详见文件内注释）
- **路径别名** —— 同时在 `vue.config.js`（`chainWebpack`）和 `tsconfig.json`（`paths`）中添加
- **网站图标** —— 替换 `static/favicon.ico`
