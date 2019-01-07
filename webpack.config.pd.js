const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
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
    new CleanWebpackPlugin([`${path.join(__dirname, 'dist')}/*.*`]),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: 'bundle.[hash].css',
    //   chunkFilename: '[id].css'
    // }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/
      },
      // {
      //   test: /\.(css|scss)$/,
      //   use: [{
      //     loader: 'style-loader'
      //   },
      //   {
      //     loader: 'css-loader'
      //   },
      //   {
      //     loader: 'postcss-loader'
      //   },
      //   {
      //     loader: 'sass-loader'
      //   }]
      // },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|mp4)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000
          }
        }
      },
      {
        test: /\.woff|\.woff2|.eot|\.ttf/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 5000
          }
        }
      }
    ]
  }
};
