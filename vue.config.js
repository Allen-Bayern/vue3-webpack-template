const { defineConfig } = require('@vue/cli-service');
const path = require('path');

/**
 * Get the updated HtmlWebpackPlugin configuration
 * @param {Object} [defaultConfig={}] - The default config object
 * @returns {Object} The updated HtmlWebpackPlugin config
 */
const getHtmlPluginConfig = (defaultConfig = {}) => {
    const { templateParameters: oldTemplateParams = {} } = defaultConfig || {};
    return {
        ...(defaultConfig || {}),
        templateParameters: {
            ...oldTemplateParams,
            lang: 'en',
        },
        template: path.resolve(__dirname, 'index.html'),
        favicon: path.resolve(__dirname, 'static', 'favicon.ico'),
        title: 'example app',
    };
};

/**
 * Whether the current environment is production
 * @type {boolean}
 * @description Determines whether the environment is production based on the NODE_ENV environment variable
 */
const isProduction = /prod/i.test(process.env?.NODE_ENV ?? '');

/**
 * Path to the newer babel-loader
 * @type {string}
 * @description Points to the babel-loader under the project root
 */
const newBabelLoader = path.resolve(__dirname, 'node_modules/babel-loader/lib/index.js');

module.exports = defineConfig(() => {
    return {
        transpileDependencies: isProduction,
        lintOnSave: 'error',
        devServer: {
            port: 2000,
            client: {
                overlay: {
                    warnings: false,
                },
            },
        },
        chainWebpack(config) {
            config
                .entry('app')
                .clear()
                .add(path.resolve(__dirname, 'src', 'main.ts'))
                .end()
                // Make .ts & .tsx files use babel-loader (@babel/preset-typescript)
                .module.rule('ts')
                .test(/\.m?tsx?$/)
                .use('babel-loader')
                .loader(newBabelLoader)
                .options({
                    // Critical: explicitly point to the babel config in the project root
                    configFile: path.resolve(__dirname, 'babel.config.js'),
                })
                .end()
                .end()
                .end()
                .module.rule('js')
                .test(/\.m?jsx?$/)
                .use('babel-loader')
                .loader(newBabelLoader)
                .options({
                    // Critical: explicitly point to the babel config in the project root
                    configFile: path.resolve(__dirname, 'babel.config.js'),
                })
                .end()
                .end()
                .end()
                .resolve.extensions.merge(['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'])
                .end()
                .alias.set('~', path.resolve(__dirname, 'src'))
                .set('assets', path.resolve(__dirname, 'src/assets'))
                .end()
                .end()
                .plugin('html')
                .tap(args => {
                    const [defaultConf, ...rest] = args;
                    return [getHtmlPluginConfig(defaultConf), ...rest];
                })
                .end();
        },
        css: {
            loaderOptions: {
                css: {
                    modules: {
                        auto(resourcePath) {
                            return resourcePath.includes('.module.');
                        },
                        // css-module hash
                        localIdentName: '[local]__[hash:base64]',
                        exportLocalsConvention(name) {
                            // home-view__text--red → homeView__text_red
                            const camel = name
                                .replace(/--/g, '_') // First replace -- with _
                                .replace(/-([a-z])/g, (_, char) => char.toUpperCase()); // Camel-case -
                            return [name, camel];
                        },
                    },
                },
            },
        },
    };
});
