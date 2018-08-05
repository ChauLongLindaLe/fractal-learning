'use strict';

const gulp = require('gulp');
const fractal = require('./fractal.js');
const logger = fractal.cli.console;
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const path = require('path');

gulp.task('sass', function () {
    return gulp.src([
            './assets/**/*.scss',
            './components/**/*.scss'
        ])
        .pipe(customPlumber('Error running Sass'))
        .pipe(concat('global.scss'))
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
});

gulp.task('js', function(){
    return gulp.src('./assets/js/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('watch', ['sass', 'js'], function () {
    gulp.watch([
        './components/**/*.scss',
        './assets/scss/**/*.scss'
    ], ['sass']);

    gulp.watch([
        './assets/js/**/*.js'
    ], ['js']);
});

gulp.task('copyCname', function() {
    return gulp.src('CNAME')
        .pipe(gulp.dest('./docs'))
});

function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            title: errTitle || "Error running Gulp",
            message: "Error: <%= error.message %>",
        })
    });
}

gulp.task('fractal:start', function () {
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});

gulp.task('default', ['fractal:start', 'sass', 'js', 'watch']);