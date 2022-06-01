const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackPluginServe: Serve } = require("webpack-plugin-serve");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const port = process.env.PORT || 3008;
const options = {
  host: "localhost",
  port: port,
  historyFallback: true,
  open: true,
  liveReload: false,
  hmr: true,
  static: "./dist",
};

module.exports = {
  entry: ["./src/index.js", "webpack-plugin-serve/client"],
  output: {
    filename: "bundle.[fullhash].js",
  },
  mode: "development",
  devtool: "inline-source-map",

  module: {
    rules: [
      // First Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [require("react-refresh/babel")].filter(Boolean),
            },
          },
        ],
      },
      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              esModule: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                mode: "local",
                exportLocalsConvention: "camelCaseOnly",
                namedExport: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
    new Serve(options),
    new ReactRefreshWebpackPlugin({
      overlay: { sockIntegration: "wps" },
    }),
  ],
  watch: true,
};
