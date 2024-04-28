const webpack = require('webpack');

module.exports = function ({ config }) {
  // Add a fallback for 'crypto'
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify')
  };

  // Return the updated config
  return config;
};
