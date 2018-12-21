const path = require('path');
const webpack = require('webpack')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

    //const VENDOR_LIBS = ['react' , 'react-dom' , 'redux' ,'redux-thunk' , 'react-router']
    //MiniCssExtractPlugin.loader
    const isProduction = env === 'production';
    const HtmlPlugin = new HtmlWebpackPlugin({
        template: './src/index.html'
    })
    return {
        entry: {
            bundle: './src/index.js'
        },
        output: {
            filename: 'bundle.js'
        },
        optimization: {
            minimizer: [
                new UglifyJSWebpackPlugin({
                    cache:true,
                    sourceMap: true,
                    parallel: true
                }),
                new OptimizeCssAssetsWebpackPlugin({})
            ]
        },
        devServer: {
            contentBase: path.join(__dirname , 'dist'),
            port: 3000,
            compress: true,
            historyApiFallback: true
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        mode: isProduction ? isProduction : 'development',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css/,
                    use: [
                        MiniCssExtractPlugin.loader, 
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpe?g | svg | png)$/,
                    use: [
                        {
                             loader: 'url-loader',
                             options: {
                                limit: 5000
                             }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin(),
            HtmlPlugin,
        ]
    }
}