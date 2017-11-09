var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
  console.log('Hooray! - You rule ;)');
});

gulp.task('html', function(){
  console.log('imagine something useful being done to your html file');
});

gulp.task('css', function(){
  console.log('imagine something useful being done to your css file');
});

gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('css');
  });

});
