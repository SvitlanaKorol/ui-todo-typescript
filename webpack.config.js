const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js', 
  output: {
    filename: 'main.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],  
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        use: 'babel-loader', 
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, 'public'), 
    compress: true,
    port: 8081,
    open: true,
  },
}; module.exports = {
  entry: "./src/index.tsx", 
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], 
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", 
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 8081,
    open: true,
    hot: true,
  },
};