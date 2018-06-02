// gulpfile.js

var gulp = require('gulp')
    , imagemin = require('gulp-imagemin');

gulp.src('src/img')
    .pipe(imagemin())
    .pipe(gulp.dest('src/img'));