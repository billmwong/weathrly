var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var BUILD_DIR = path.resolve(__dirname, 'public/bundled');
var APP_DIR = path.resolve(__dirname, 'src/');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/bundled'
  },

  node: {
    fs: 'empty'
  },

  module: {
    loaders: [
      // Babel javascript loader, convert jsx or js files to es5 javascript
      {
        test: [/\.js$/, /\.jsx$/],
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-runtime'],
        }
      },
    ]
  },

  // Set where we are going to extract the css bundle
  plugins: [
    new ExtractTextPlugin('./styles-bundled.css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
      }
   })
  ],

  resolve: {
    modules: [
      path.join(__dirname, ''),
      'node_modules',
      'client'
    ],
    extensions: ['.js', '.jsx', 'css']
  }
}
