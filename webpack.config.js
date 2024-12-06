const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const deps = require('./package.json').dependencies;
const path = require('path');
const sass = require('sass');

module.exports = () => {
  return {
    entry: {
      main: ['@babel/polyfill', path.resolve(__dirname, '.', 'src', 'index.tsx')],
    },
    mode: 'development',
    devServer: {
      port: 3000,
      hot: true,
    },
    output: {
      publicPath: 'http://localhost:3000/',
    },
    resolve: {
      extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
        {
          test: /\.(jpeg|jpg|png)$/,
          use: {
            loader: 'url-loader',
            options: { limit: 8192 },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: { implementation: sass },
            },
          ],
        },
        {
          test: /\.(svg)$/,
          use: ['@svgr/webpack', 'file-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new DotenvWebpackPlugin({
        path: './.env',
      }),
    ],
  };
};
