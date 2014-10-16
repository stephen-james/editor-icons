module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    copy: {
      main: {
        src: 'src/editor-icons_*.svg',
        dest: '*.svg',
      },
    },

    webfont: {
      icons: {
        src: 'src/*.svg',
        dest: 'build',
        options: {
          types: 'woff',
          embed: false,
          engine: 'node',
          templateOptions: {
            baseClass: 'e',
            classPrefix: 'icon-'
          },
          font: 'editor-icons'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['webfont']);

};