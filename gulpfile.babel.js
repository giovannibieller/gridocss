'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import del from 'del';
import notify from 'gulp-notify';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import runSequence from 'run-sequence';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';
import zip from 'gulp-zip';

const paths = {
    root: './',
    scss: './scss',
    demo: './demo',
    ico: './ico',
    node_modules: './node_modules',
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
        .src([paths.demo + '/index.html'])
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

gulp.task('copy-prism-css', () => {
    return gulp
        .src([paths.node_modules + '/prismjs/themes/prism.css'])
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

gulp.task('copy-prism-js', () => {
    return (
        gulp
            .src([paths.node_modules + '/prismjs/prism.js'])
            //.pipe(uglify())
            /*.pipe(
                rename({
                    suffix: '.min'
                })
            )*/
            .pipe(gulp.dest(paths.dist + '/js'))
            .pipe(browserSync.reload({ stream: true }))
    );
});

gulp.task('copy-ico', () => {
    return gulp
        .src([paths.ico + '/*.*'])
        .pipe(gulp.dest(paths.dist + '/ico'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('copy-files', () => {
    return gulp
        .src([paths.ico + '/*.json', paths.ico + '/*.xml'])
        .pipe(gulp.dest(paths.dist + '/'))
        .pipe(browserSync.reload({ stream: true }));
});

/**
 * Zip CSS
 */
gulp.task('zip', () =>
    gulp
        .src(paths.dist + '/css/gridocss/grido.min.css')
        .pipe(zip('gridoCSS.zip'))
        .pipe(gulp.dest(paths.dist + '/zip'))
);

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
        .pipe(gulp.dest(paths.dist + '/css/gridocss'))
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
    gulp.watch([paths.demo + '/index.html'], ['copy-html']);
    gulp.watch([paths.demo + '/demo.css'], ['copy-demo']);
});

/**
 * Dist
 */
gulp.task('dist', ['clean-dist-css'], cb => {
    runSequence(
        'copy-demo',
        'copy-html',
        'copy-prism-js',
        'copy-prism-css',
        'copy-ico',
        'copy-files',
        'scss',
        'zip',
        cb
    );
});
