const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	resolve: {
		alias: {
			'assets': path.resolve(__dirname, 'src/game/assets'),
			'reduxConstants': path.resolve(__dirname, 'src/game/redux/constants'),
			'reduxActions': path.resolve(__dirname, 'src/game/redux/actions'),
		}
	},
	module: {
		rules: require('./webpack.rules'),
	},
	plugins: [new ESLintPlugin(module.rules)]
}
