var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: __dirname,
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './src/index',
      './src/styles/app.css',
      './src/styles/markdown.css',
    ],
    vendor: [
      'expose?echarts!echarts/dist/echarts.min.js',
      'antd/dist/antd.min.css',
      'script!echarts-wordcloud/dist/echarts-wordcloud.min.js',
    ]
  },
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: "[name].js",
    publicPath: '/assets/'
  },
  resolve:{
    extensions:['', '.js', '.json'],
    modulesDirectories: ['bower_components', 'node_modules', './'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'exports?global.Promise!es6-promise',
      'fetch': 'exports?self.fetch!whatwg-fetch'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("css/[name].css"),
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("package.json", ["main"]),
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"]),
    ]),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract('style-loader', 'css-loader')
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
  }
}
