const gulp       = require('gulp')
const plumber    = require('gulp-plumber')
const handlebars = require('gulp-compile-handlebars')
const rename     = require('gulp-rename')
const liveServer = require("live-server")

function html() {
  return gulp.src('./src/pages/**/*.html')
    .pipe(plumber())
    .pipe(handlebars(
      {
      },
      {
        batch: [
          './src/partials'
        ],
      }
    ))
    .pipe(rename(function(path) {
      if ( path.basename !== 'index' ) {
        path.dirname += `/${path.basename}`
        path.basename = 'index'
      }
    }))
    .pipe(gulp.dest('./docs'))
}

function static() {
  return gulp.src('./static/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('./docs'))
}

function serve(done) {
  liveServer.start({
    root: './docs',
    open: false,
  })
  done()
}

function watch() {
  gulp.watch('src/**/*',    {cwd: './', usePolling: true}, html)
  gulp.watch('static/**/*', {cwd: './', usePolling: true}, static)
}

module.exports.dev    = gulp.series(html, static, serve, watch)
module.exports.build  = gulp.series(html, static)