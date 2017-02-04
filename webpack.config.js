
module.exports = {
  entry: './src/HelloWorld.js',

  output: {
    path: __dirname +'/public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/,
      }
    ]
  }
};