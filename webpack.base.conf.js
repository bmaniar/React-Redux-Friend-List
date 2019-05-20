const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: [
        'react-hot-loader/patch',
        './src/index.jsx'
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test:  /\.scss$|\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
        globalObject: 'this'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Friends List',
            template: './src/index.html'
        })
    ],

    devtool: 'source-map',

    devServer: {
        contentBase: '/dist',
        hot: true,
        historyApiFallback: true,
        open: 'http://localhost:8080'
    }
};
