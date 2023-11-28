const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('src/css/main.sass')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['src/main.sass'], buildStyles)
}

exports.default = series(buildStyles, watchTask)