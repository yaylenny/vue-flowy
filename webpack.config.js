var path=require("path");

module.exports={
  entry: {
    'dist/vue-flowy': "./src",
    'demo/lib/vue-flowy': "./src"
  },
  output:{
    library: "VueFlowy",
    libraryTarget: "umd",
    path: __dirname,
    filename: '[name].js'
  },
  resolve:{
    alias:{
      Components: path.resolve( __dirname, 'src/components/'),
      Core: path.resolve( __dirname, 'src/core/'),
      Mixins: path.resolve( __dirname, 'src/mixins/')
    }
  },
  module:{
    loaders:[
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.scss$/, loaders: [ "style-loader", "css-loader", "sass-loader"] },
      { test: /\.vue$/, loader: 'vue-loader',
        options:{
          scss: 'style!css!sass'
        }
      },
      { test: /\.css$/, loaders: [ "style-loader", "css-loader"] }
    ]
  }
};
