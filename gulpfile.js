const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
});