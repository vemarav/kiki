// webpack.config.js
const path = require("path");
const common = require("./common.config");

module.exports = {
  entry: "./tombo.ts", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "../dist"), // Output directory
    filename: "tombo.js", // Output filename
  },
  ...common,
};
