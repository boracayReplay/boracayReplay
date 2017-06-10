var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var bootstrapEntryPoints = require("./webpack.bootstrap.config");

var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader','css-loader','sass-loader']
var cssProd = ExtractTextPlugin.extract({
    fallbackLoader:'style-loader',
    loader:['css-loader','sass-loader'],
    publicPath:'public'
});
var cssConfig = isProd ? cssProd : cssDev;
var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;


module.exports = {
  entry: {
    app: './src/app.js',
    bootstrap: bootstrapConfig
  },
  output: {
    path: __dirname +'/public',
    filename: '[name]bundle.js'
  },
  module:{
    rules:[
          {
            test: /\.scss$/,
            use: cssConfig
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
          },
          //Bootstrap
          {
            test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
          },
          {
            test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]'
          },
          {
            test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports-loader?jQuery=jquery'
          },
    ]
  },
  devServer:{
    contentBase:path.join(__dirname,"public"),
    compress:true,
    stats:"errors-only",
    hot:true,
    open:true
  },
  plugins:[
    new HtmlWebpackPlugin({
        title:'gogo!', //html title 변경
        minify:{ //html을 minify 시켜줌
          collapseWhitespace:true
        },
        hash:true, //bundle.js에 hash값 추가
        template:'./src/index.html',
    }),
    new ExtractTextPlugin({//css파일을 단일로 추출
        filename:'/css/[name].css',
        disable: !isProd,
        allChunks:true
    }),
    new webpack.HotModuleReplacementPlugin(

    ), // Enable HMR
    new webpack.NamedModulesPlugin(

    )
  ]
}
