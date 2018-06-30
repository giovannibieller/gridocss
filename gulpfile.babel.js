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
import gulpStylelint from 'gulp-stylelint';

const paths = {
    root: './',
    src: './src',
    scss: './src/assets/scss',
    ico: './src/assets/ico',
    demo: './src/demo',
    node_modules: './node_modules',
    dist: './dist',
    demobuild: './demo'
};

/**
 * Dev server
 */
gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: paths.demobuild
        }
    });
});

/**
 * Copy html
 */
gulp.task('copy-html', () => {
    return gulp
        .src([paths.demo + '/index.html'])
        .pipe(gulp.dest(paths.demobuild))
        .pipe(browserSync.reload({ stream: true }));
});

/**
 * Copy demo
 */
gulp.task('copy-demo', () => {
    return gulp
        .src([paths.demo + '/demo.css'])
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest(paths.demobuild + '/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('copy-prism-css', () => {
    return gulp
        .src([paths.node_modules + '/prismjs/themes/prism.css'])
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest(paths.demobuild + '/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('copy-prism-js', () => {
    return gulp
        .src([paths.node_modules + '/prismjs/prism.js'])
        .pipe(gulp.dest(paths.demobuild + '/js'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('copy-ico', () => {
    return gulp
        .src([paths.ico + '/*.*', '!' + paths.ico + '/*.json', '!' + paths.ico + '/*.xml'])
        .pipe(gulp.dest(paths.demobuild + '/ico'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('copy-files', () => {
    return gulp
        .src([paths.ico + '/*.json', paths.ico + '/*.xml'])
        .pipe(gulp.dest(paths.demobuild + '/'))
        .pipe(browserSync.reload({ stream: true }));
});

/**
 * Zip CSS
 */
gulp.task('zip', () =>
    gulp
        .src([paths.dist + '/grido.css', paths.dist + '/grido.min.css'])
        .pipe(zip('gridoCSS.zip'))
        .pipe(gulp.dest(paths.demobuild + '/zip'))
);

/**
 * Scss
 */
gulp.task('scss', () => {
    return gulp
        .src([paths.scss + '/grido.scss'])
        .pipe(sass())
        .pipe(gulp.dest(paths.dist + '/'))
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
        .pipe(gulp.dest(paths.dist + '/'))
        .pipe(gulp.dest(paths.demobuild + '/css'))
        .pipe(browserSync.reload({ stream: true }));
});

/**
 * Lint CSS
 */
gulp.task('lint-scss', function lintCssTask() {
    return gulp.src([paths.scss + '/grido.scss']).pipe(
        gulpStylelint({
            reporters: [{ formatter: 'string', console: true }]
        })
    );
});

/**
 * Del folder
 */
gulp.task('clean-dist', del.bind(null, [paths.dist]));
gulp.task('clean-demo', del.bind(null, [paths.demobuild]));

/**
 * Watch
 */
gulp.task('watch', ['dist', 'browser-sync'], () => {
    gulp.watch([paths.scss + '/*.scss'], ['scss']);
    gulp.watch([paths.demo + '/index.html'], ['copy-html']);
    gulp.watch([paths.demo + '/demo.css'], ['copy-demo']);
});

/**
 * Default
 */
gulp.task('default', ['dist']);

/**
 * Dist
 */
gulp.task('dist', ['clean-dist', 'clean-demo', 'lint-scss'], cb => {
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
