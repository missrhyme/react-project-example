const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    lodash: '_'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          // {
          //   loader: 'react-hot-loader'
          // },
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
        // exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|mp4)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000
//            emitFile: false,
//            name: 'static/images/[name].[ext]'
          }
        }
      },
      {
        test: /\.woff|\.woff2|.eot|\.ttf/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 5000
//             emitFile: false
//             name: 'static/font/[name].[ext]'
          }
        }
      }
    ]
  }
};
