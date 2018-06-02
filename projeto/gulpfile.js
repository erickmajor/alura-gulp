// gulpfile.js

var gulp = require('gulp')
    , imagemin = require('gulp-imagemin');

gulp.task('build-img', function() {
    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});