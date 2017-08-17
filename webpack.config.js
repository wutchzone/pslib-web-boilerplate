const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname,"./view"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, loader: "babel-loader" ,exclude: /node_modules/ },
            { test: /\.scss$/, loader: ["style-loader", "css-loader", "sass-loader"] }
        ]
    },
    devServer: {
        port: 4000,
        contentBase: "./view",
        historyApiFallback: false
    }
}