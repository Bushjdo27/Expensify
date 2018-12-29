const path = require('path');
const webpack = require('webpack')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({ path: '.env.test' });
}else if (process.env.NODE_ENV === 'development'){
    require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => {

    //const VENDOR_LIBS = ['react' , 'react-dom' , 'redux' ,'redux-thunk' , 'react-router']
    //MiniCssExtractPlugin.loader
    const isProduction = env === 'production';
    // const HtmlPlugin = new HtmlWebpackPlugin({
    //     template: './public/index.html'
    // })

    return {
        entry: {
            bundle: './src/index.js'
        },
        output: {
            path: path.join(__dirname, 'public', 'dist') ,
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
            contentBase: path.join(__dirname , 'public'),
            port: 3000,
            compress: true,
            historyApiFallback: true,
            publicPath: '/dist/'
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
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            })
        ]
    }
}