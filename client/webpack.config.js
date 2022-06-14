
// Good tutorials on webpack:
// https://medium.com/@kasulejoseph/how-to-create-a-vue-js-application-from-scratch-with-webpack-and-babel-c1629d411127
// https://www.neoguias.com/tutorial-webpack/#Que_es_Webpack

const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // The application entry point
 entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      //use babel-loader to transpile js files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
        // use: ['babel-loader'],
      },

      // css-loader to bundle all the css files into one file and vue-style-loader
      // to add all the styles inside the <style> block in `.vue` file.
    //   {
    //     test: /\.css$/,
    //     use: ["vue-style-loader", "css-loader"]
    //   }
    ]
  },
  // Where to compile the bundle
  // By default the output directory is `dist`
  output:  {
    path: __dirname + '/src/dist',
    filename: 'boat.data.bundle.js'
  },
//   devServer: {
//     contentBase: path.join(__dirname, "../public"),
//     port: 3000,
//     publicPath: "/dist/"
//   },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
};
