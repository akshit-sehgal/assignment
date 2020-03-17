const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Webpack = require('webpack');

module.exports = {
    entry: "./src/app/index.js",
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", { loader: "css-loader", options: { url: false } }, "sass-loader"]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/app/index.html",
            filename: "./index.html"
        }),
        new Webpack.DefinePlugin({
            DEVELOPMENT: JSON.stringify(true)
        })
    ]
};