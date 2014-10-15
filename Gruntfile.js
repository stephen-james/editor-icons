module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      icons: {
        src: 'src/*.svg',
        dest: 'build',
        options: {
          types: 'woff',
          embed: true,
          engine: 'node'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  // Default task(s).
  grunt.registerTask('default', ['webfont']);

};