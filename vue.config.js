/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = {
    publicPath: '/',
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#3E7FFF'
                    },
                    javascriptEnabled: true
                }
            }
        }
    },
    configureWebpack: config => {
        config.plugins.push(
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/ 
            })
        )
        config.optimization.splitChunks = {
            maxInitialRequests: Infinity,
            minSize: 300 * 1024,
            chunks: 'all',
            cacheGroups: {
                antVendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name (module) {
                    // get the name. 
                    // node_modules/packageName/sub/path
                    // or node_modules/packageName
                    const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                    return `npm.${packageName.replace('@', '')}`
                    }
                },
            }
        }
    },
    // 动态的头部信息
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '慕课乐高'
            args[0].desc = '一键生成 H5 海报'
            return args
        })
    }
}