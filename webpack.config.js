'use strict'

const { resolve } = require('path')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const devServer = {
  host: 'http://127.0.0.1',
  port: 8080,
}

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  context: resolve(__dirname, 'src'),
  entry: [
    `webpack-dev-server/client?${devServer.host}:${devServer.port}`,
    'webpack/hot/only-dev-server',
    resolve(__dirname, 'src/index.tsx'),
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: `${devServer.host}:${devServer.port}/`,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    port: devServer.port,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: {
      index: '/',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts|.tsx$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ],
}
