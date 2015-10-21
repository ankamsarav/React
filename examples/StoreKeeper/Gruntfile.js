/* global require, module */

var mountFolder = function(connect, dir) {
	return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
	'use strict';
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-config')(grunt, {
		data: {
			config: {
				app: 'app',
				dist: 'build',
				assets: 'app/assets',
				tests: 'tests',
				livereload: 1337
			}
		}
	});

	// tasks set in grunt/aliases.js
};
