const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
   entry: './src/index.jsx',
   output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js'
   },
   module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader'
                }
            ]
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                "css-loader"
            ],
        }
      
    ]
},
mode : 'development',
plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
]
}