const gulp = require("gulp");
const imagemin = require('gulp-imagemin')
const { src, series, parallel, dest, watch } = require("gulp")


function copyHtml() {
  return src("src/*.html").pipe(gulp.dest('dist'))
}

function imgTask() {
  return src("src/images/*").pipe(imagemin()).pipe(dest('dist/images'))
}

exports.default = copyHtml;
exports.default = imgTask;