const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, 'dist/'),
    clean: true,
  },
  resolve: {
    alias: {
      '@img': path.join(__dirname, 'src/img'),
      '@js': path.join(__dirname, 'src/js'),
      '@css': path.join(__dirname, 'src/css'),
    },
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: './src/views/pages',
      filename: '[name].html',
      js: {
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      css: {
        filename: 'assets/css/[name].[contenthash:8].css',
      },
      preprocessor: 'ejs',
      preprocessorOptions: {
        views: path.join(__dirname, 'src/views'),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: 'esbuild-loader',
      },
      {
        test: /\.css$/i,
        use: ['css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ico|png|jpe?g|svg|webp|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[hash:8][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash:8][ext]'
        },
        include: /@fontsource/ // Specifically target @fontsource folder
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name].[hash:8][ext]'
        },
        include: /remixicon/, // Specifically target Remix icons folder
        // include: [
        //   /remixicon/, // Remix icons
        //   /@fortawesome/, // Font Awesome icons
        //   /material-icons/, // Material icons
        //   /bootstrap-icons/ // Bootstrap icons
        // ]
      }
    ],
  },
  optimization : {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      watch: true,
    },
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },
    open: true,
    compress: true, 
    hot: true,
    port: 3000,
    client: {
      logging: 'info',
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
      reconnect: 5,
    },
  }
};
