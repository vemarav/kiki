// webpack.config.js
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./problem1.ts", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "problem1.js", // Output filename
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve TypeScript and JavaScript files
    alias: {
      "@domain": path.resolve(__dirname, "lib/domain"),
      "@presentation": path.resolve(__dirname, "lib/presentation"),
      "@infra": path.resolve(__dirname, "lib/infra"),
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
};
