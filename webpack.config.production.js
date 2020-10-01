const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('./webpack.config.js');

config.mode = 'production';

config.optimization = {
  moduleIds: 'hashed',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
  runtimeChunk: 'single',
  minimizer: [
    new UglifyJsPlugin({
      chunkFilter: (chunk) => {
        // Exclude uglification for the `vendors` chunk
        if (chunk.name === 'vendors') {
          return false;
        }

        return true;
      },
    }),
    new TerserJSPlugin({}),
    new OptimizeCSSAssetsPlugin({}),
  ],
};

module.exports = config;
