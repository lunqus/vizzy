var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename');

gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('./styles'))
      .pipe(cleancss({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./styles'))
});

gulp.task('default', function() {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'))
});


