var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
//var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  context: __dirname,

  entry: './static/js/index',

  output: {
      path: path.resolve('./static/bundles/'),
      filename: "[name].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
              {
                loader: MiniCssExtractPlugin.loader,
                  options: {
                    // you can specify a publicPath here
                    // by default it use publicPath in webpackOptions.output
                    publicPath: './static/bundles/',
                    filename: "[name]-[hash].css"
                  }
              },
          'css-loader',
          'sass-loader',
        ],
      }

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }

};