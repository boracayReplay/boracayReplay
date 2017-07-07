const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bootstrapEntryPoints = require("./webpack.bootstrap.config");
const glob = require("glob");
const PurifyCSSPlugin = require("purifycss-webpack");

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader','css-loader','sass-loader']
const cssProd = ExtractTextPlugin.extract({
    fallbackLoader:'style-loader',
    loader:['css-loader','sass-loader'],
    publicPath:'public'
});
const cssConfig = isProd ? cssProd : cssDev;
const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
  entry: {
    app: './src/index.js',
    bootstrap: bootstrapConfig
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "[name].bundle.[hash].js",
  },
  module:{
    rules:[
          {
            test: /\.scss$/,
            use: cssConfig
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
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
