# Vue 3 Webpack Template

一个基于 **Vue CLI（webpack）** 的简洁、现代的 **Vue 3 + TypeScript** 模板。

[English](./README.md) | [简体中文](./README.zh-CN.md) | [한국어](./README.ko.md)

## 特性

- **Vue 3** —— 支持 Composition API
- **TypeScript** —— 通过 `@babel/preset-typescript` + `babel-loader` 编译，无需 `ts-loader`
- **JSX / TSX** —— 通过 `@vue/babel-plugin-jsx` 支持
- **Sass / SCSS** —— 开箱即用
- **CSS Modules** —— 对 `*.module.css` / `*.module.scss` 自动启用，并带 camelCase 导出约定
- **ESLint + Prettier** —— 预配置完成，开发服务器保存即 lint
- **Autoprefixer** —— 通过 PostCSS 生效，目标浏览器由 `browserslist` 决定
- **core-js** —— 按需注入 polyfill（`useBuiltIns: 'usage'`），无需手动导入
- **路径别名** —— `@` → `src/`、`assets` → `src/assets/`
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

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动开发服务器（含 HMR），端口 `2000` |
| `pnpm build` | 生产构建，输出到 `dist/` |

## 项目结构

```text
├── index.html              # HTML 模板（lang 与 title 由 vue.config.js 注入）
├── static/                 # 原样拷贝到 dist/（favicon.ico）
├── src/
│   ├── main.ts             # 应用入口
│   ├── App.vue             # 根组件
│   ├── components/         # 可复用组件
│   ├── assets/             # 参与打包的资源（别名：assets/）
│   └── shims-vue.d.ts      # .vue 模块的类型声明
├── babel.config.js         # Babel 配置（TS、JSX、按需 polyfill）
├── vue.config.js           # Vue CLI / webpack 配置（入口、loader、别名、CSS Modules）
├── tsconfig.json           # TypeScript 配置
├── .eslintrc.cjs           # ESLint 配置
└── .prettierrc.yml         # Prettier 配置
```

## 自定义

- **开发服务器端口** —— 修改 `vue.config.js` 中的 `devServer.port`（默认 `2000`）
- **页面标题 / 语言** —— 修改 `vue.config.js` 中 `getHtmlPluginConfig()` 里的 `title` 与 `lang`
- **目标浏览器** —— 修改 `package.json` 中的 `browserslist` 字段（默认 `> 1%`、`last 2 versions`）
- **网站图标** —— 替换 `static/favicon.ico`
