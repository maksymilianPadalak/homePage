const gulp = require("gulp");
const imagemin = require('gulp-imagemin')
const sourcemaps = require('gulp-sourcemaps')
const { src, series, parallel, dest, watch } = require("gulp")

const jsPath = 'src/assets/scripts/**/*.js'
const cssPath = 'src/assets/styles/**/*.css'

function copyHtml() {
  return src("src/*.html").pipe(gulp.dest('dist'))
}

function copyFonts() {
  return src("src/fonts/*").pipe(gulp.dest('dist/fonts'))
}

function copyCss() {
  return src("src/assets/styles/*").pipe(gulp.dest('dist/assets/styles'))
}

function copyJs() {
  return src("src/assets/scripts/*").pipe(gulp.dest('dist/assets/scripts'))
}

function copyIcons(){
  return src("src/icons/*").pipe(gulp.dest('dist/icons'))
}

function imgTask() {
  return src("src/images/*").pipe(imagemin()).pipe(dest('dist/images'))
}



// function watchTask(){
//   watch([cssPath, jsPath], {interval: 1000}, parallel(copyHtml, imgTask, jsTask, copyCss, copyFonts))
// }

exports.default = parallel(copyHtml, copyFonts, imgTask, copyJs, copyCss, copyFonts, copyIcons)

// exports.default = series(parallel(copyHtml, imgTask, jsTask, cssTask), watchTask)