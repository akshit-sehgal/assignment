const path = require('path');
const NodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./src/server/index.js",
    target: 'node',

    mode: 'production',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
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
                test: /\.s[ac]ss$/i,
                use: ["null-loader","css-loader", "sass-loader"]
            }
        ]
    },
    externals: [NodeExternals()],
};