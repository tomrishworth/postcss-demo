var
  gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  processors = [
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require("postcss-import"),
    require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] }),
];

// compile CSS
gulp.task('css', function() {
  return gulp.src('src/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('css'));
});

// watch CSS
gulp.task('watch', function(){
  gulp.watch('src/styles.css', ['css']);
});

gulp.task('default', ['watch']);