module.exports = function(grunt, options) {
	var config = options.config;

	return {
		compass: {
			files: ['app/sass/**/*.{scss,sass}'],
			tasks: ['compass:server']
		},
		livereload: {
			options: {
				livereload: config.livereload
			},
			files: [
				'app/html/*.html',
				'app/assets/css/*.css',
				'app/assets/{,**/}*.{png,jpg,jpeg,gif,webp,svg}',
				'build/assets/js/*.js'
			]
		},
		browserify: {
			files: ['app/assets/js/{,**/}*.{js,jsx}'],
			tasks: ['browserify']
		}
	}
};
