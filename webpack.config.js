var webpack = require('webpack');

var env = process.env.NODE_ENV;

// configuration
var config = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		library: 'ReactHabitat',
		libraryTarget: 'umd'
	},
	externals: {
		'react': 'react',
		'react-dom': 'react-dom'
	},
	plugins: [
		/*{
			apply: function apply(compiler) {
				compiler.parser.plugin('expression global', function expressionGlobalPlugin() {
					this.state.module.addVariable('global', "(function() { return this; }()) || Function('return this')()")
					return false
				})
			}
		},*/
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env)
		})
	]
};

module.exports = config;
