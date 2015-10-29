var gulp = require('gulp');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

// configure connect task
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('css/*.css')
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src('./bower_components/Materialize/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src('./bower_components/font-awesome/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

// gulp.task('sass:watch', function () {
//   gulp.watch('./bower_components/Materialize/sass/**/*.scss', ['sass']);
// });

// configure jshint task
gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['jshint']);
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['css/*.css'], ['css']);
  gulp.watch([
    './bower_components/Materialize/sass/**/*.scss',
    './bower_components/font-awesome/scss/*.scss'], ['sass']);
});

// default task!
gulp.task('default', ['sass', 'watch', 'connect']);
