var gulp = require('gulp');
var serve = require('gulp-serve');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

var cssDestinationFolder = "./"

gulp.task('sass-to-css',function(){
	return gulp.src('./css/app.scss')
			   .pipe(sass().on('error', sass.logError))
			   .pipe(gulp.dest(cssDestinationFolder));
});

gulp.task('build', ['sass-to-css']);

gulp.task('serve', serve('./'));

gulp.task('watch', function(){
	gulp.watch('css/**/*', ['build'])
});

gulp.task('default',['build', 'serve', 'watch']);