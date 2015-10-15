var gulp = require('gulp'); // skeletion responsible for build process
var gutil = require('gulp-util'); //Console logging Print in utils while build 
var source = require('vinyl-source-stream'); // return files from one to another 
var browserify = require('browserify'); // dependency injection 
var watchify = require('watchify'); // change triggerer - when ever code changes gulp task wil auto matically rendered 
var reactify = require('reactify'); // changing jsx to JS 


gulp.task('default', function(){
	var bundler = watchify(browserify({
		entries:['./src/app.jsx'],
		transform:[reactify],
		extensions: ['.jsx'],
		debug: true,
		cache:{},
		packageCache:{},
		fullPaths: true
	}));

	function build(file){
		if(file) gutil.log('Recompiling : ' + file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind('gutil', 'Browserify Error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));
	};

	build();
	bundler.on('update', build);


});