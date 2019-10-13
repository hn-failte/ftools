const path = require("path");
// const webpack = require('webpack');
// const isDev = process.env.NODE_ENV === 'development';

const filepath = {
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};

module.exports = {
//   mode: process.env.NODE_ENV,
//   plugins: [
//       new webpack.DefinePlugin({
//           "process.env": {
//             NODE_ENV: isDev ? '"development"' : '"production"'
//         }
//       })
//   ],
  entry: filepath.entry,
  output: filepath.output,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
