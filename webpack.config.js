var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

var distDir = path.resolve(__dirname, 'dist');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    // Entry point : first executed file
    // This may be an array. It will result in many output files.
    entry: './src/main.ts',

    // What files webpack will manage
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            Game: path.resolve(__dirname, 'src/game/'),
        }
    },

    // Make errors mor clear
    devtool: 'inline-source-map',

    // Configure output folder and file
    output: {
        path: distDir,
        filename: 'main.js'
    },

    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
        ]
    },

    devServer: {
        contentBase: './dist'
    },


    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ]
};