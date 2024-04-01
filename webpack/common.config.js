// webpack.config.js
const path = require("path");
const ShebangPlugin = require("webpack-shebang-plugin");

module.exports = {
  mode: "production",
  resolve: {
    extensions: [".ts", ".js"], // Resolve TypeScript and JavaScript files
    alias: {
      "@domain": path.resolve(__dirname, "../lib/domain"),
      "@presentation": path.resolve(__dirname, "../lib/presentation"),
      "@infra": path.resolve(__dirname, "../lib/infra"),
      "@shared": path.resolve(__dirname, "../lib/shared"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply ts-loader for .ts files
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new ShebangPlugin()],
};
