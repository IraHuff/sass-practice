const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('src/css/**/*.sass')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['src/css/**/*.sass'], buildStyles)
}

exports.default = series(buildStyles, watchTask)