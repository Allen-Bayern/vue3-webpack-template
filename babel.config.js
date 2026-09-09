const path = require('path');

/**
 * The installed core-js version
 * @type {string}
 * @description preset-env usage mode selects polyfill data based on this (same approach as the official preset-app)
 */
const corejsVersion = require('core-js/package.json').version;

module.exports = {
    // Align with the official @vue/babel-preset-app's sourceType: 'unambiguous':
    // CJS/ESM is auto-detected based on file content. In production builds with
    // transpileDependencies: true, CJS files inside node_modules (e.g.
    // vue-loader/dist/exportHelper.js) get transpiled; the default 'module' would
    // misclassify them as ESM, causing "exports is not defined" at runtime in the output
    sourceType: 'unambiguous',
    presets: [
        [
            '@babel/preset-env',
            {
                // Inject polyfills on demand (target browsers are determined by the
                // browserslist in package.json; polyfills come from core-js in
                // dependencies, no manual import needed at the entry point)
                useBuiltIns: 'usage',
                corejs: corejsVersion,
            },
        ],
        // Handle .ts/.tsx (in vue.config.js the ts rule is handled by babel-loader, no ts-loader involved)
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                // Only extract helpers (paired with @babel/runtime in dependencies);
                // polyfills and regenerator are both injected by preset-env usage, not duplicated here
                helpers: true,
                regenerator: false,
                corejs: false,
                useESModules: true,
                // Under pnpm's isolated dependency layout, transpiled files inside
                // node_modules need an absolute path to resolve @babel/runtime
                // from the project root
                absoluteRuntime: path.dirname(require.resolve('@babel/runtime/package.json')),
            },
        ],
        '@vue/babel-plugin-jsx',
    ],
};
