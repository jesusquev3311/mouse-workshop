const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const ENV = require("dotenv");

const env = ENV.config().parsed;
const path = require("path");
const { DefinePlugin } = require("webpack");

module.exports = {
    mode: "none",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        static:{
            directory: path.join(process.cwd(), "dist"),
        },
        compress: true,
        port: 8050,
        watchFiles: ["src/**/*", "dist/**/*"],
    },
    resolve: {
        fallback: {
            "fs": false
        },
    },
    module: {
        rules:[
            {
                test:/\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                {
                    loader: "file-loader",
                    options: {}  
                }
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: "html-loader"
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "part-one.html",
            template: "./part-one.html"
        }),
        new HtmlWebpackPlugin({
            filename: "part-two.html",
            template: "./part-two.html"
        }),
        new NodePolyfillPlugin(),
        new DefinePlugin({
            "process.env": JSON.stringify(env),
        })
    ]
};