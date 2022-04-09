const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

const config = {
  entry: './src/index.jsx',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/[name].[contenthash].js',
  },
  devServer: {
    open: true,
    host: 'localhost',
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      // inject: true,
      template: './src/index.html',
      // ...(isProduction
      //   ? {
      //     minify: {
      //       removeComments: true,
      //       collapseWhitespace: true,
      //       removeRedundantAttributes: true,
      //       useShortDoctype: true,
      //       removeEmptyAttributes: true,
      //       removeStyleLinkTypeAttributes: true,
      //       keepClosingSlash: true,
      //       minifyJS: true,
      //       minifyCSS: true,
      //       minifyURLs: true,
      //     },
      //   }
      //   : undefined),
    }),
    new Dotenv(),
    // Moment.js is an extremely popular library that bundles large locale files
    // by default due to how webpack interprets its code. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // You can remove this if you don't use Moment.js:
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(dist|node_modules|bower_components)/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  optimization: {
    // Control if build files are minimized or not
    // minimize: false,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers
      // (i.e. `terser-webpack-plugin`), uncomment the next line
      '...',
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          minSize: 1,
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

if (isProduction) {
  config.mode = 'production';

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'static/[name].[contenthash].css',
    }),
  );
} else {
  config.mode = 'development';
  config.devtool = 'inline-source-map';
}

module.exports = config;
