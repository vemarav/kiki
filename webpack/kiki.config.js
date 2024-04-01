// webpack.config.js
const path = require("path");
const common = require("./common.config");

module.exports = {
  entry: "./kiki.ts", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "../dist"), // Output directory
    filename: "kiki.js", // Output filename
  },
  ...common,
};
