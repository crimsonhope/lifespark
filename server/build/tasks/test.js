var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('server-test', function () {
  return gulp.src('server/spec/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});