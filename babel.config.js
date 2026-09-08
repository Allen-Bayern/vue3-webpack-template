const path = require('path');

/**
 * 已安装的 core-js 版本
 * @type {string}
 * @description preset-env usage 模式据此选择 polyfill 数据（与官方 preset-app 做法一致）
 */
const corejsVersion = require('core-js/package.json').version;

module.exports = {
    // 对齐官方 @vue/babel-preset-app 的 sourceType: 'unambiguous'：
    // 按文件内容自动识别 CJS/ESM。生产构建 transpileDependencies: true 时会转译
    // node_modules 里的 CJS 文件（如 vue-loader/dist/exportHelper.js），
    // 缺省的 'module' 会将其误判为 ESM，产物运行时报 "exports is not defined"
    sourceType: 'unambiguous',
    presets: [
        [
            '@babel/preset-env',
            {
                // 按需注入 polyfill（目标浏览器由 package.json 的 browserslist 决定，
                // polyfill 来自 dependencies 里的 core-js，入口无需手动 import）
                useBuiltIns: 'usage',
                corejs: corejsVersion,
            },
        ],
        // 处理 .ts/.tsx（vue.config.js 中 ts 规则交给 babel-loader，不依赖 ts-loader）
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                // 仅抽离 helper（配合 dependencies 的 @babel/runtime）；
                // polyfill 与 regenerator 均由 preset-env usage 注入，此处不重复处理
                helpers: true,
                regenerator: false,
                corejs: false,
                useESModules: true,
                // pnpm 依赖隔离下，node_modules 内被转译的文件需绝对路径
                // 才能解析到项目根目录的 @babel/runtime
                absoluteRuntime: path.dirname(require.resolve('@babel/runtime/package.json')),
            },
        ],
        '@vue/babel-plugin-jsx',
    ],
};
