var gulp = require("gulp");
var sourceMaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");

gulp.task('build-server', function () {
    return gulp.src('server/src/**/*.js')    
        .pipe(sourceMaps.init())
        .pipe(babel())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('server/dist'))
});

