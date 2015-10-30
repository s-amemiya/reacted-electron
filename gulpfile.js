const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

const dest = 'build';

gulp.task('clean', () => {
  del(['build/**/*']);
});

gulp.task('html', () => {
  return gulp.src('src/index.html')
    .pipe(gulp.dest(dest));
});

gulp.task('scripts', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['babel-preset-es2015', 'babel-preset-react']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest));
});

gulp.task('build', ['clean', 'html', 'scripts']);
