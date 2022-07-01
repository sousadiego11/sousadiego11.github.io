const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env) => ({
    mode: env.production ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),

    output: {
        filename: '[name][hash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    devServer: {
        port: 3005,
        open: true,
        allowedHosts: 'all'
    },

    module: {
        rules: [
			{
				test: /.jsx?$/i,
				include: [ path.resolve(__dirname, 'src') ],
				exclude: [ path.resolve(__dirname, 'node_modules') ],
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react', '@babel/preset-env']
				}
			},
			{
				test: /\.s?css$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.ico/,
				type: 'asset/resource',
				generator: {
					filename: 'static/[hash][ext][query]'
				}
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				include: [path.resolve(__dirname, "src")],
				loader: "file-loader"
			}
      ]
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css', 'scss']
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.resolve(__dirname, 'src/public/index.html'),
            favicon: path.resolve(__dirname, 'src/public/favicon.ico')
        })
    ],

	 devtool: 'source-map'
})
