const path = require('path');
const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, 'src/game/assets'),
      'reduxConstants': path.resolve(__dirname, 'src/game/redux/constants'),
      'reduxActions': path.resolve(__dirname, 'src/game/redux/actions'),
    }
  },
  module: {
    rules,
  },
};
