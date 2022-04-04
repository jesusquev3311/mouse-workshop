const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

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
        })
    ]
};