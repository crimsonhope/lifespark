var gulp = require("gulp");
require('require-dir')('server/build/tasks');

gulp.task('default', function() {
  gulp.watch('server/src/**/*.js', ['build-server']);
});
