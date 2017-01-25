var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

gulp.task('default', ['connect', 'watch']);

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('sass', function () {
    gulp.src('sass/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'))
        .pipe(connect.reload());
});

gulp.task('pug', function () {
    gulp.src('pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('public'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', ['sass']);
    gulp.watch('pug/**/*.pug', ['pug']);
});
