module.exports = function(grunt, options){
	return {
		"server": ["browserify:dist", "compass:server", "connect:dev", "watch"]
	};
};
