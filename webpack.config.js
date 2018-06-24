const fs = require('fs')
const path = require('path')

module.exports = {
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      /**
       * babel-loader doesn't load the .babelrc
       * @todo Remove once the issue is addressed
       * {@link https://github.com/babel/babel-loader/issues/624}
       */
      options: Object.assign(
        {
          babelrc: false,
          cacheDirectory: true
        },
        JSON.parse(fs.readFileSync(path.join(__dirname, '.babelrc'), 'utf-8'))
      ),
      test: /\.js$/
    }, {
      exclude: /node_modules/,
      loader: 'url-loader',
      test: /\.(png|jpe?g|gif)$/
    }]
  }
}
