const MomentLocalesPlugin = require(`moment-locales-webpack-plugin`);
const path = require(`path`);
const pathToPublic = path.join(__dirname, `public`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: pathToPublic
  },
  devtool: `source-map`,
  devServer: {
    contentBase: pathToPublic,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [`style-loader`, `css-loader`],
      },
    ],
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: [`es-us`],
    })
  ]
};
