// blueprint for the way webpack should behave within our project

const path = require("path");

// For a basic configuration, we need to provide webpack with three properties: entry, output, and mode
module.exports = {
  // entry point is the root of the bundle and the beginning of the dependency graph, give it the relative path to the client's code
  entry: "./assets/js/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  mode: "development",
};
