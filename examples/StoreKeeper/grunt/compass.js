module.exports = {
	options: {
		sassDir: 'app/sass',
		cssDir: 'app/assets/css',
		generatedImagesDir: '.tmp/images/generated',
		imagesDir: 'app/assets/img',
		javascriptsDir: 'app/javascript',
		fontsDir: 'app/assets/fonts',
		httpImagesPath: '/assets/img',
		httpGeneratedImagesPath: 'app/assets/images/generated',
		httpFontsPath: '/assets/fonts',
		relativeAssets: false,
		outputStyle: 'expanded',
		sourcemap: true
	},
	server: {
		options: {
			debugInfo: false
		}
	},
	build: {
		options: {
			outputStyle: 'compressed',
			httpFontsPath: '../fonts',
			httpImagesPath: '../img',
			cssDir: 'build/assets/css',
			force: true,
			debugInfo: false,
			sourcemap: false
		}
	}
};
