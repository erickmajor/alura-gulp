// gulpfile.js

var gulp = require('gulp')
    , imagemin = require('gulp-imagemin')
    , clean = require('gulp-clean')
    , concat = require('gulp-concat')
    , htmlReplace = require('gulp-html-replace')
    , uglify = require('gulp-uglify')
    , usemin = require('gulp-usemin')
    , cssmin = require('gulp-cssmin')
    , browserSync = require('browser-sync')
    , jshint = require('gulp-jshint')
    , jshintStylish = require('jshint-stylish');

gulp.task('default', ['copy', ], function() {
    gulp.start('build-img', 'usemin');
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

gulp.task('usemin', function() {
    return gulp.src('dist/**/*.html')
        .pipe(usemin({
            js: [uglify],
            css: [cssmin]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    
    gulp.watch('src/**/*').on('change', browserSync.reload);
    
    gulp.watch('src/js/**/*.js').on('change', function(event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter());
    });
});