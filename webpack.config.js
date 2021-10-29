const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  const entryPath = argv.mode === 'development' ? './src/index_dev.js' : './src/index.js'
  return {
    entry: {
      main: path.resolve(__dirname, entryPath),
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build')
    },
    devServer: {
      static: './build',
      open: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "AQI Tracker",
        template: path.resolve(__dirname, './src/index.html'),
      }),
      new Dotenv(),
      new CleanWebpackPlugin({ template: "build" })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|jpeg|jpg|gif|ico|svg)$/i,
          use: [ 
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'imgs'
              }
          }
          ]
        }
      ],
    }
  }
};