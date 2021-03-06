var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
    {
      test: /\.tag$/,
      exclude: /node_modules/,
      loader: 'riotjs-loader',
      query: {
        type: 'none'
      }
    }],
    loaders: [
    {
      test: /\.js$|\.tag$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  }
}
