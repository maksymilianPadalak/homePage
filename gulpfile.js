const gulp = require("gulp");
const imagemin = require('gulp-imagemin')
const concat = require('gulp-concat')
const terser = require('gulp-terser')
const sourcemaps = require('gulp-sourcemaps')
const { src, series, parallel, dest, watch } = require("gulp")

const jsPath = 'src/scripts/**/*.js'
const cssPath = 'src/styles/**/*.css'

function copyHtml() {
  return src("src/*.html").pipe(gulp.dest('dist'))
}

function copyFonts() {
  return src("src/fonts/*").pipe(gulp.dest('dist/fonts'))
}

function imgTask() {
  return src("src/images/*").pipe(imagemin()).pipe(dest('dist/images'))
}

function jsTask() {
  return src(jsPath)
  .pipe(sourcemaps.init())
  .pipe(concat('all.js'))
  .pipe(terser())
  .pipe(sourcemaps.write('.'))
  .pipe(dest('dist/assets/js'))
}

function cssTask() {
  return src(cssPath)
  .pipe(sourcemaps.init())
  .pipe(concat('all.css'))
  .pipe(sourcemaps.write('.'))
  .pipe(dest('dist/assets/css'))
}

function watchTask(){
  watch([cssPath, jsPath], {interval: 1000}, parallel(copyHtml, imgTask, jsTask, cssTask, copyFonts))
}

exports.default = parallel(copyHtml, copyFonts, imgTask, jsTask, cssTask, copyFonts)

// exports.default = series(parallel(copyHtml, imgTask, jsTask, cssTask), watchTask)