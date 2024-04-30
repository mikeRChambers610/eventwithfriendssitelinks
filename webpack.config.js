const path = require('path');

module.exports = {
  // Entry point for your application
  entry: './src/index.js', // Adjust as per your entry file

  // Output configuration
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output path
  },

  // Resolve options
  resolve: {
    extensions: ['.web.js', '.js'], // Resolve these extensions
  },

  // Module rules and other configurations
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Example presets
          },
        },
      },
      // Other rules for different file types can be added here
    ],
  },

  // Plugins can be configured here if needed
  plugins: [],

  // Additional configurations like devServer, optimization, etc.\
};
