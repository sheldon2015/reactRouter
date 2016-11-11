const webpack = require('webpack');
const path = require('path');

const OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
    entry: {
        bundle: ['./index.jsx']

    },
    output: {
        // path: 'prod/dist', //打包生成目录,开发阶段没什么用
        filename: '[name].js',
        publicPath: '/dist/',
        chunkFilename: '[name].js'

    },
    plugins: [

        new webpack.HotModuleReplacementPlugin(),

        new OpenBrowserPlugin({ url: 'http://localhost:3000', browser: 'chrome', ignoreErrors: true })
    ],

    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        historyApiFallback: true,
        contentBase: __dirname //配置服务器的根目录

    },



    module: {

        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }

            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css!postcss!less'

            },
            //如果图片的资源大小大于limit在外部引入，不然就声称data urls嵌入
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: "url-loader?limit=1000"
            }

        ]

    },

    resolve: {
        root: [path.resolve('./src')], //loader resolve 资源的路径
        fallback: path.join(__dirname, 'node_modules')
    },
    resolveLoader: {
        fallback: path.join(__dirname, "node_modules")
    },
    devtool: "source-map" //生成sourcemap文件

}