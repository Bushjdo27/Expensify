const path = require('path');
const webpack = require('webpack')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
    ,vendor: VENDOR_LIBS

            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor' , 'manifest']
            })
*/
module.exports = () => {

    //const VENDOR_LIBS = ['react' , 'react-dom' , 'redux' ,'redux-thunk' , 'react-router']
    const env = process.env.NODE_ENV;
    const HtmlPlugin = new HtmlWebpackPlugin({
        template: './src/index.html'
    })
    return {
        entry: {
            bundle: './src/index.js'
        },
        output: {
            filename: '[name].[chunkhash].js'
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
            compress: true
        },
        devtool: env === 'production' ? 'source-map' : 'eval',
        mode: env === 'production' ? env : 'development',
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
                        MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
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