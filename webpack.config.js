// blueprint for the way webpack should behave within our project
//
const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// For a basic configuration, we need to provide webpack with three properties: entry, output, and mode
module.exports = {
  // entry point is the root of the bundle and the beginning of the dependency graph, give it the relative path to the client's code
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js",
  },
  output: {
    filename: "[name].bundle.js", // name of each attribute in the entry object will be used in place of [name]
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.jpg$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name(file) {
                return "[path][name].[ext]";
              },
              publicPath: function (url) {
                return url.replace("../", "/assets/");
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // tell webpack which plugin we want to use
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs an HTML file in the dist folder
    }),
  ],
  mode: "development",
};
