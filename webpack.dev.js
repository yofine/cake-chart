var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  context: path.resolve(__dirname, './src'),
  entry: {
    app: [
      'babel-polyfill',
      './index.js',
    ],
    vendor: [
      'echarts',
      'echarts-wordcloud',
      'font-awesome/css/font-awesome.css',
      'handsontable/dist/handsontable.full.min.css'
    ]
  },
  output: {
    path: path.resolve(__dirname, './build', './assets'),
    filename: "[name].js",
    publicPath: '/assets/'
  },
  resolve:{
    extensions:['.js', '.json'],
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({options: {context: path.resolve(__dirname, './src')}}),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', minChunks: Infinity }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'app', async: true }),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('development')}})
  ],
  module: {
    noParse: [/handsontable.full.js/],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules|build/,
        loader: 'babel-loader?cacheDirectory=true',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=img/[name].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=100000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=svg/[name].[ext]"
      },
    ]
  },
	devServer: {
    hot: false,
    compress: true,
    contentBase: path.resolve(__dirname, './src'),
    port: 8089,
    historyApiFallback: true,
  }
}
