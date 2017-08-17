const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname,"./view"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.js?$/, loader: "babel-loader" ,exclude: /node_modules/ }
        ]
    },
    devServer: {
        port: 4000,
        contentBase: "./view",
        historyApiFallback: false
    }
}