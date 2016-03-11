// The gulp of the project
'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('default', function() {
    return gulp.src('less/index.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});