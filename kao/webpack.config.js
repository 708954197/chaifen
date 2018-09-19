const path = require('path');

module.exports = {
   entry: "./www/app/app.js",
   output: {
      path: path.resolve(__dirname, "www/dist"),
      filename: "bundle.js"
   },
   module: {
      rules: [{
         test: /\.js$/,
         exclude: [
            path.resolve(__dirname, "node_modules")
         ],
         loader: "babel-loader",
         options: {
            presets: ["es2015"],
            plugins:['transform-object-rest-spread']
         }
      }, {
         test: /\.vue$/,
         loader: 'vue-loader',
         options: {
            loaders: {
               stylus: 'vue-style-loader!css-loader!stylus-loader'
            }
         }
      }]
   },
   resolve: {
      alias: {
         'vue': 'vue/dist/vue.js'
      }
   },
   watch:true
}


