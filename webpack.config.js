const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('@babel/register');

const config =

module.exports = env => {
  const isDev = env.mode === 'DEV';
  return {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      filename: 'js/bundle.[hash].js',
      path: path.resolve(__dirname, 'build'),
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        // JS
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        // CSS, SCSS Files
        {
          test: /\.(s[ac]ss|css)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                sourceMap: isDev,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDev,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDev,
                postcssOptions: {
                  plugins: [
                    [
                      'autoprefixer',
                    ],
                  ],
                },
              },
            },
          ],
        },
        // IMG
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[path][name].[ext]'
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
        inject: 'body',
      }),
    ],
  };
};
