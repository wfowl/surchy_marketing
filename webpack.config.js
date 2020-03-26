const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    entry: "./src/index.js",
    watch: isDevelopment,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "dist.js"
    },
    optimization: {
      minimize: isProduction
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "suchy",
        filename: "index.html",
        template: "src/index.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ["babel-loader"]
        },
        { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" }
      ]
    },
    devServer: {
      watchContentBase: true,
      contentBase: path.resolve(__dirname, "dist"),
      open: true
    }
  };
};
