const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      favicon: './public/nesine.ico',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }], ['@babel/preset-react', { runtime: 'automatic' }]]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ]
  },
  devServer: {
    hot: true,
    port: 3005,
    open: true,
  },
};