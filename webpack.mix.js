const mix = require('laravel-mix');
require('laravel-mix-ejs')

const docs = 'docs';

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.scss/,
        enforce: "pre",
        loader: 'import-glob-loader'
      }
    ]
  }
})
.setPublicPath(docs)
.ejs('src/html/index.ejs', docs )
.sass('src/scss/style.scss', docs + '/css/')
.options({
  processCssUrls: false
})

if (mix.inProduction()) {
  mix.version();
} else {
  mix.sourceMaps();
}
