module.exports = function (grunt) {
	grunt.initConfig({
		styledocco: {
			dist: {
				options: {
					name: 'Styledocco Test Project'
				},
				files: {
					'generated/css': 'css'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-styledocco');
};