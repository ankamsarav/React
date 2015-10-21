/* global require */
module.exports = function(grunt, options) {
	var
		config = options.config;

	return {
		options: {
			port: 9000,
			hostname: '0.0.0.0',
			livereload: options.config.livereload
		},
		dev: {
			options: {
				base: ['app/html', 'app', 'build/assets'],
				directory: 'app/builtHtml'
			}
		}
	};
};
