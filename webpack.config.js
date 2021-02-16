const path = require('path')

module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, './src/main2.js')],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle2.js'
    },
    devServer:{
        contentBase: path.resolve(__dirname, './public'),
        port: 6060
    },
    devtool: 'source-map'
}