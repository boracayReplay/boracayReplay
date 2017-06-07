var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname +'/public',
    filename: 'bundle.js'
  },
  module:{
    rules:[
          {
            test:/\.scss$/,
            use:ExtractTextPlugin.extract({
                fallbackLoader:'style-loader',
                loader:['css-loader','sass-loader'],
                publicPath:'public'
            })
          }
    ]
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
        filename:'app.css',
        disable:false,
        allChunks:true
      })
    ]
}
