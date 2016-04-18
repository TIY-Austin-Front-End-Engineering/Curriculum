// import the text plugin used to handle the stylesheets
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // specify the path for the entrypoint into our app.
  entry: "./app/scripts/entry.js",

  output: {

    // specify that all static assets should be sent to the dist folder
    path: "dist",

    //specify that the resultant bundle should be built in the bundle.js file
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        // configure our styles. watch specifically for any imports that have the file extension .scss
        test: /\.scss$/,

        // when matching files are imported, don't turn them into a js module, but instead, extract all the files contents into a single mass of text (that's what the plugin does, hence its name). The arguments to the plugin.extract fn tell it which loaders to run the file through first (in this case, we are processing sass into css then into the style loader)
        loader: ExtractTextPlugin.extract("style", "css?sourceMap!sass?sourceMap")
      },
      {
        // configure our javascript. watch specifically for any imports that have the file extension .js or .jsx
        test: /\.jsx?/,
        include: [
          path.resolve("./app/scripts")
        ],
        //don't run node_modules through babel!
        exclude: /node_modules/,
        // when matching files are imported, run them through the babel loader to process them. Babel is being configured in the .babelrc file (also in this root directory) to include the preset for es2015, giving this app es2015 capabilities!
        loader: "babel"
      },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  // turn on the source map, for easier debugging
  devtool: "source-map",

  plugins: [
    // create an instance of the extract-text-webpack-plugin which will create the style.css file. this tells the style loader (above) where to put that text it extracted from the scss files after it finishes processing it.
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
