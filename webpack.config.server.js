var fs = require('fs')
var path = require('path')
const arry = fs
    .readdirSync(path.resolve(__dirname, 'node_modules'))
    .concat(['react-dom/server', 'react/addons'])
    .reduce(function (ext, mod) {

        ext[mod] = 'commonjs ' + mod
        return ext
    }, {})

module.exports = {

    entry: path.resolve(__dirname, 'serverRender.js'),

    output: {
        filename: 'server.bundle.js'
    },

    target: 'node',

    // keep node_module paths out of the bundle
    externals: arry,

    node: {
        __filename: true,
        __dirname: true
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
            }
        ]
    }

}