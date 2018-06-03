// gulpfile.js

var gulp = require('gulp')
    , imagemin = require('gulp-imagemin')
    , clean = require('gulp-clean')
    , concat = require('gulp-concat')
    , htmlReplace = require('gulp-html-replace');

gulp.task('default', ['copy'], function() {
    gulp.start('build-img', 'build-html', 'build-js');
});

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
gulp.task('build-img', function() {
    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build-js', function() {
    gulp.src('dist/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build-html', function() {
    gulp.src('dist/**/*.html')
        .pipe(htmlReplace({
            'js': 'js/all.js'
        }))
        .pipe(gulp.dest('dist/'));
});