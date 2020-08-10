const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/styles.css',
  mode: process.env.NODE_ENV,
  module: {
    rules: [{
      test: /\.(ttf|eot|svg|css)?(\?[a-z0-9#=&.]+)?$/, 
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        'css-loader',
        'postcss-loader',
      ],
    }, ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new CopyPlugin([
      { from: 'assets', to: 'assets' },
    ]),
  ],
};
