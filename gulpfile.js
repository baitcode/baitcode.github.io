var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    nib = require('nib');


gulp.task('default', function() {
    gulp.src('sources/styles/all.styl')
        .pipe(stylus({
            use: nib()
        }))
        .pipe(gulp.dest('./css/'))
});
