// blueprint for the way webpack should behave within our project
//
const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// For a basic configuration, we need to provide webpack with three properties: entry, output, and mode
module.exports = {
  // entry point is the root of the bundle and the beginning of the dependency graph, give it the relative path to the client's code
  entry: "./assets/js/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  plugins: [
    // tell webpack which plugin we want to use
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs an HTML file in the dist folder
    })
  ],
  mode: "development",
};
