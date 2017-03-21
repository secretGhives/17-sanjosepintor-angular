'use strict';
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const Manifest = require('manifest-revision-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');


const rootPublic = path.resolve('./src');
const NODE_ENV = process.env.NODE_ENV || "production";
const DEVELOPMENT = NODE_ENV === "production" ? false : true;
const stylesLoader = 'css?root=' + rootPublic + '&sourceMap!postcss!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true';

module.exports = function (_path) {
  const rootAssetPath = _path + 'src';

  let webpackConfig = {
    // entry points
    entry: {
      app: _path + '/src/app/index.bootstrap.js'
    },

    // output system
    output: {
      path: _path + '/dist',
      filename: '[name].js',
      publicPath: '/'
    },

    // resolves modules
    resolve: {
      extensions: ['.js', '.es6', '.jsx', '.scss', '.css'],
      alias: {
        _appRoot: path.join(_path, 'src', 'app'),
        _images: path.join(_path, 'src', 'app', 'assets', 'images'),
        _stylesheets: path.join(_path, 'src', 'app', 'assets', 'styles'),
        _scripts: path.join(_path, 'src', 'app', 'assets', 'js')
      }
    },

    // modules resolvers
    module: {
      noParse: [],
      loaders: [{
        test: /\.html$/,
        loaders: [
          {
            loader: 'ngtemplate',
            query: {
              relativeTo: path.join(_path, '/src')
            }
          }, {
            loader: 'html',
            query: {
              attrs: ['img:src', 'img:data-src']
            }
          }
        ]
      }, {
        test: /\.js$/,
        exclude: [
          path.resolve(_path, "node_modules")
        ],
        loaders: [
          {
            loader: 'babel',
            query: {
              cacheDirectory: false
            }
          },
          'baggage?[file].html&[file].css'
        ]
      }, {
        test: /\.css$/,
        loaders: [
          'style',
          'css?sourceMap',
          'postcss'
        ]
      }, {
        test: /\.(scss|sass)$/,
        loader: DEVELOPMENT ? ('style!' + stylesLoader) : ExtractTextPlugin.extract({
          fallbackLoader: "style",
          loader: stylesLoader
        })
      }, {
        test: /\.(ttf|otf|svg|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loaders: [
          {
            loader: 'url-loader',
            query: {
              name: 'assets/fonts/[name]_[hash].[ext]'
            }
          }
        ]
      },
      ]
    },

    // load plugins
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          // PostCSS
          postcss: [autoprefixer({browsers: ['last 5 versions']})],
        }
      }),
      /*
      * copyWebpackPlugin
      * copies json files from src/assets/data to dist/assets/data
      * copies image files from src/assets/images to dist/assets/images
      * To be accessed through static links
      */
      new CopyWebpackPlugin([
        { from: 'src/assets/data', to: `${_path}/dist/assets/data`},
        { from: 'src/assets/images', to: `${_path}/dist/assets/images`}
      ]),
      new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      new webpack.NoErrorsPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.optimize.AggressiveMergingPlugin({
        moveToParents: true
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        async: true,
        children: true,
        minChunks: Infinity
      }),
      new Manifest(path.join(_path + '/config', 'manifest.json'), {
        rootAssetPath: rootAssetPath,
        ignorePaths: ['.DS_Store']
      }),
      new ExtractTextPlugin({
        filename: 'assets/styles/css/[name]' + (NODE_ENV === 'development' ? '' : '.[chunkhash]') + '.css',
        allChunks: true
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(_path, 'src', 'tpl-index.ejs')
      })
    ]
  };

  return webpackConfig;

};
