const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require("glob");
const PurifyCSSPlugin = require("purifycss-webpack");
const isProd = process.env.NODE_ENV === 'production';
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
  entry: {
    app: './src/index.js',
    bootstrap: 'bootstrap-loader'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "[name].bundle.[hash].js",
  },
  module:{
    rules:[
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
      },
      {
        test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports-loader?jQuery=jquery'

      },
      {
          test: /\.(png|jpg|svg)$/, loader: "url-loader",
      },

      ]
  },
  devServer:{
    contentBase:path.join(__dirname,"public"),
    compress:true,
    stats:"errors-only",
    inline:true,
    hot:true,
    open:true,
    openPage: ''
  },
  plugins:[
      new FaviconsWebpackPlugin('./src/img/favicon.png'),
      new HtmlWebpackPlugin({
        title:'방송 보라 카이 - 무료 실시간, 지난 방송 보기', //html title 변경
        minify:{ //html을 minify 시켜줌
          collapseWhitespace:true
        },
        hash:true, //bundle.js에 hash값 추가
        template:'./src/index.html',
    }),
    new ExtractTextPlugin({
        filename:'./css/[name].css',
        disable: !isProd,
        allChunks:true
    }),
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new webpack.NamedModulesPlugin(),
    new PurifyCSSPlugin({
      paths:glob.sync(path.join(__dirname,'src/*.html')),
    })
  ]
}
