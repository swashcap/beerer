module.exports = {
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: true
      },
      test: /\.js$/
    }, {
      exclude: /node_modules/,
      loader: 'url-loader',
      test: /\.(png|jpe?g|gif)$/
    }]
  }
}
