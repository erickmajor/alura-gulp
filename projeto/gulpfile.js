// gulpfile.js

var gulp = require('gulp')
    , imagemin = require('gulp-imagemin')
    , clean = require('gulp-clean');

// copy: copia arquivos e diretórios do diretório src para o diretório dist
gulp.task('copy', function() {
    gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

// clean: remove todos os arquivos e diretórios do diretório dist
gulp.task('clean', function() {
    gulp.src('dist')
        .pipe(clean());
});

// build-img: realiza a minificação dos arquivos que encontram-se no diretório 
//    dist/img
gulp.task('build-img', function() {
    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});