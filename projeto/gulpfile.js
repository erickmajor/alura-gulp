// gulpfile.js

var gulp = require('gulp')
    , imagemin = require('gulp-imagemin')
    , clean = require('gulp-clean')
    , concat = require('gulp-concat');

// copy: copia arquivos e diretórios do diretório src para o diretório dist
//   A task clean é uma dependência da tarefa copy
gulp.task('copy', ['clean', ], function() {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

// clean: remove todos os arquivos e diretórios do diretório dist
gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

// build-img: realiza a minificação dos arquivos que encontram-se no diretório 
//    dist/img
gulp.task('build-img', ['copy', ], function() {
    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build-js', function() {
    // nossa tarefa que nada faz ainda
});