const path = require('path');
const Webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: "./src/app/index.js",
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '-'
        }
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        publicPath: '/',
        chunkFilename: '[name].js'
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
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new Webpack.DefinePlugin({
            DEVELOPMENT: JSON.stringify(false)
        })
        // new BundleAnalyzerPlugin()
    ],
};