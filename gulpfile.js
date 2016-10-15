
'use strict';

//var proxyHost = 'http://private-anon-3c9499cc9f-bankproto.apiary-mock.com/ajax';
var proxyHost = 'http://10.242.139.197:8080/ajax';
var cdnDomain = '';

var templateConfig = {
    cdnPrefix: ''
};
var htmlminConfig = {
    collapseWhitespace: true
};

var gulp = require('gulp');
var path = require('path');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var flatten = require('gulp-flatten');
var filter = require('gulp-filter');
var htmlmin = require('gulp-htmlmin');
var cssnano = require('gulp-cssnano');
var template = require('gulp-template');
var cdn = require('gulp-cdn-replace');
var del = require('del');
// var mainBowerFiles = require('main-bower-files');
var bower = require('gulp-bower');
var browserSync = require('browser-sync').create();
var proxyMiddleware = require('http-proxy-middleware');

var proxy = proxyMiddleware('/ajax', {
    target: proxyHost,
    changeOrigin: true,
    pathRewrite: {
        '^/ajax': ''
    }
});

var paths = {
    app: 'src/app', 
    assets: 'src/assets',
    dist: 'dist',
    libs: 'bower_components',
    template: 'src/template'
};

gulp.task('watch', ['build'], function() {
    gulp.watch(paths.libs + '/**/*', ['build:vendor']);
    gulp.watch([
        paths.assets + '/js/*.js',
        paths.app + '/**/*.js',
    ], ['build:js']);
    gulp.watch([
        paths.assets + '/**/*.css',
        paths.app + '/**/*.css'
    ], ['build:css']);
    gulp.watch(paths.assets + '/fonts/*', ['build:fonts']);
    gulp.watch(paths.assets + '/images/*', ['build:images']);
    gulp.watch(paths.app + '/**/*.html', ['build:html']);
});

gulp.task('lint', function() {
    return gulp.src(paths.app + '/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


// vendor task
gulp.task('build:vendor', function() {
    return gulp.src(paths.libs + '/**/*')
        .pipe(gulp.dest(paths.dist + '/vendor'));
});

// js task
gulp.task('build:js', ['lint'], function() {
    return gulp.src([
            paths.assets + '/js/*.module.js',
            paths.assets + '/js/*.router.js',
            paths.assets + '/js/*.controller.js',
            paths.assets + '/js/*.service.js',
            paths.assets + '/js/*.directive.js',
            paths.assets + '/js/*.filter.js',
            paths.app + '/**/*.module.js',
            paths.app + '/**/*.router.js',
            paths.app + '/**/*.controller.js',
            paths.app + '/**/*.service.js',
            paths.app + '/**/*.directive.js',
            paths.app + '/**/*.filter.js'
        ])
        .pipe(concat('app.js'))
        .pipe(template(templateConfig))
        .pipe(gulp.dest(paths.dist + '/assets/js/'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.dist + '/assets/js/'));
});

// css task
gulp.task('build:css', function() {
    return gulp.src([
            paths.assets + '/css/shyh.css',
            paths.app + '/**/*.css'
        ])
        .pipe(concat('shyh.css'))
        // .pipe(rev())
        .pipe(gulp.dest(paths.dist + '/assets/css'))
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        // .pipe(assetRev())
        .pipe(gulp.dest(paths.dist + '/assets/css'));
        // .pipe(rev.manifest())
        // .pipe(gulp.dest(paths.dist + '/rev'));
});

// images task
gulp.task('build:images', function() {
    return gulp.src([
            paths.assets + '/images/**/*'
        ])
        .pipe(gulp.dest(paths.dist + '/assets/images'));
});

// template task
gulp.task('build:template', function() {
    return gulp.src([
        paths.template + '/**/*'
    ])
        .pipe(gulp.dest(paths.dist + '/template'));
});

// index task
gulp.task('build:html:index', function() {
    return gulp.src([
            paths.app + '/index.html',
            paths.app + '/map.html'
        ])
        .pipe(template(templateConfig))
        .pipe(cdn({
            dir: paths.dist,
            root: {
                js: cdnDomain,
                css: cdnDomain
            }
        }))
        .pipe(gulp.dest(paths.dist));
});
// views task
gulp.task('build:html:views', function() {
    return gulp.src([
            paths.app + '/pages/**/*.html'
        ])
        .pipe(flatten())
        .pipe(cdn({
            dir: paths.dist,
            root: {
                js: cdnDomain,
                css: cdnDomain
            }
        }))
        .pipe(gulp.dest(paths.dist + '/views'));
});
// shared task
gulp.task('build:html:shared', function() {
    return gulp.src([
            paths.app + '/_shared/*/*.html'
        ])
        .pipe(flatten())
        .pipe(cdn({
            dir: paths.dist,
            root: {
                js: cdnDomain,
                css: cdnDomain
            }
        }))
        .pipe(gulp.dest(paths.dist + '/views/_shared'));
});
gulp.task('build:html', [
    'build:html:index',
    'build:html:views',
    'build:html:shared'
]);

gulp.task('build', [
    'build:js',
    'build:css',
    'build:images',
    'build:vendor',
    'build:html',
    'build:template'
]);

gulp.task('debug', ['watch'], function () {
    browserSync.init({
        startPath: '/',
        server: {
            baseDir: paths.dist
        },
        browser: 'default',
        middleware: [proxy]
    });

    gulp.watch(paths.dist + '/**/*').on('change', browserSync.reload);
});

gulp.task('clean', function () {
    return del(paths.dist);
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
