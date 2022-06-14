const configureServer = require('./src/server');

module.exports = {
  publicPath: "/public/",
  devServer: {
    before: configureServer
  }
}