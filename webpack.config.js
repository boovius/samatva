var path = require('path');
var webpack = require('webpack');

var baseConfig = {
  output: {
    path: path.join(__dirname, '/bundle'),
    publicPath: '/',
    filename: 'index.js',
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /(\.js?$)|(\.jsx?$)/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.html$/,
        loaders: ['file?name=[name].[ext]']
      }
    ]
  }
};

var envConfig = {};

if (process.env.NODE_ENV === 'production') {
  envConfig = {
    entry: [
      './src/index',
    ],
  }

} else {
  envConfig = {
    entry: [
      'webpack-hot-middleware/client',
      './src/index',
    ],
    devtool: 'eval-source-map',
  }
}

module.exports = Object.assign(baseConfig, envConfig);
