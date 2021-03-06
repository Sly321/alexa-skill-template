var gulp = require('gulp');
var util = require('gulp-util');
var tsc = require('gulp-typescript');
var mocha = require('gulp-mocha');
var runSequence = require('run-sequence');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('compile-ts', ['compile-src', 'compile-test']);

gulp.task('compile-src', function () {
    var tsProject = tsc.createProject('./tsconfig.json');
    return gulp.src(['./src/*.ts'])
        .pipe(tsProject())
        .on('error', util.log)
        .pipe(gulp.dest('./src/'));
});

gulp.task('compile-test', function () {
    var tsProject = tsc.createProject('./tsconfig.json');
    return gulp.src(['./test/*.ts'])
        .pipe(tsProject())
        .on('error', util.log)
        .pipe(gulp.dest('./test/'));
});

gulp.task('test', function () {
    return gulp.src('./test/*.js', { read: false })
    // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', handleError);
});

gulp.task('watch', function () {
    gulp.watch(['./**/*.ts'], function () {
        runSequence('compile-ts', 'test'); //, 'karma');
    });
});

gulp.task('default', function () {
    runSequence('compile-ts', 'test', 'watch'); //'karma', 'watch');
});
