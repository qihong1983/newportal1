var webpack = require('webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');

var path = require("path");
module.exports = {
	devtool:'inline-source-map',
	entry:{
		build:"./src/main.jsx",
		editpage: "./src/main1.jsx",
		test: "./src/test.jsx"
	},
	output:{
		path:"./build/",
		filename:"[name].js"
	},
	watch: true,
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:["style","css"],
				 exclude:"/node_modules/"
			},
			{
				test:/.jsx?$/,
				loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"src")
			}
		]
	},
	devServer:{

	},
	resolve:{
		extensions:['','.js',".css",'jsx']  //自动补全识别后缀
	},
	plugins:[
		new CopyWebpackPlugin([{
		    from: __dirname + '/src'
		}]),
		new htmlWebpackPlugin({
			title: "自动生成网页标题",
            filename: "test.html",
            template: "templates/index.html",
            hash: true,       // true | false。如果是true，会给所有包含的script和css添加一个唯一的webpack编译hash值。这对于缓存清除非常有用。
            inject: false,  
			chunks:["build"]
		}),		
		new htmlWebpackPlugin({
			title: "列表",
            filename: "list.html",
            template: "templates/list.html",
            hash: true,       // true | false。如果是true，会给所有包含的script和css添加一个唯一的webpack编译hash值。这对于缓存清除非常有用。
            inject: false,  
			chunks:["editpage"]
		}),	
		new htmlWebpackPlugin({
			title: "列表",
            filename: "test1.html",
            template: "templates/test.html",
            hash: true,       // true | false。如果是true，会给所有包含的script和css添加一个唯一的webpack编译hash值。这对于缓存清除非常有用。
            inject: false,  
			chunks:["test"]
		}),
        new webpack.optimize.UglifyJsPlugin({
		  minimize: false,
		  compress: {
		    warnings: false,
		  },
		}),
		new webpack.optimize.CommonsChunkPlugin("libs.js")
	]
}


