var gulp = require('gulp');
var browserify = require('browserify');
var del = require('del');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
//var streamify = require('gulp-streamify');
//var uglify = require('gulp-uglify');

gulp.task('clean', function () {
    del(['./dist/*.css', './dist/*.js'],{force:true});
});

gulp.task('build', ['clean'], function () {
    browserify('./src/app.js')
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        // .pipe(streamify(uglify()))
        .pipe(gulp.dest('./dist/'));
    gulp.src('./src/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('run', function () {
    gulp.start('build');
});

gulp.task('watch', function () {
    gulp.watch('./src/*', ['build']);
});

gulp.task('default', ['watch', 'run']);
