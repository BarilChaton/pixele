const path = require('path');

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.js',

  resolve: {
    alias: {
      'assets': path.resolve(__dirname, 'src/game/assets'),
      'reduxConstants': path.resolve(__dirname, 'src/game/redux/constamts'),
      'reduxActions': path.resolve(__dirname, 'src/game/redux/actions'),
    }
  },
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
};
