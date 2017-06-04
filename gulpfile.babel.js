'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import del from 'del';
import notify from 'gulp-notify';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import runSequence from 'run-sequence';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';

const paths = {
    root: './',
    scss: './scss',
    demo: './demo',
    dist: './dist'
};

/**
 * Dev server
 */
gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: paths.dist
        }
    });
});

/**
 * Copy html
 */
gulp.task('copy-html', () => {
    return gulp
        .src([paths.root + 'index.html'])
        .pipe(gulp.dest(paths.dist))
        .pipe(browserSync.reload({ stream: true }));
});

/**
 * Copy demo
 */
gulp.task('copy-demo', () => {
    return gulp
        .src([paths.demo + '/demo.css'])
        .pipe(
            sass({ outputStyle: 'compressed' }).on(
                'error',
                notify.onError(error => {
                    return 'Error: ' + error.message;
                })
            )
        )
        .pipe(
            rename({
                suffix: '.min'
            })
        )
        .pipe(gulp.dest(paths.dist + '/css'))
        .pipe(browserSync.reload({ stream: true }));
});

/**
 * Sass init
 */
gulp.task('scss', () => {
    return gulp
        .src([paths.scss + '/grido.scss'])
        .pipe(
            sass({ outputStyle: 'compressed' }).on(
                'error',
                notify.onError(error => {
                    return 'Error: ' + error.message;
                })
            )
        )
        .pipe(
            rename({
                suffix: '.min'
            })
        )
        .pipe(gulp.dest(paths.dist + '/css'))
        .pipe(browserSync.reload({ stream: true }));
});

/**
 * Del folder
 */
gulp.task('clean-dist-css', del.bind(null, [paths.dist + '/css']));

/**
 * Tasks
 */
gulp.task('default', ['dist']);

/**
 * Watch
 */
gulp.task('watch', ['dist', 'browser-sync'], () => {
    gulp.watch([paths.scss + '/*.scss'], ['scss']);
    gulp.watch([paths.root + 'index.html'], ['copy-html']);
    gulp.watch([paths.demo + '/demo.css'], ['copy-demo']);
});

/**
 * Dist
 */
gulp.task('dist', ['clean-dist-css'], cb => {
    runSequence('copy-demo', 'copy-html', 'scss', cb);
});
