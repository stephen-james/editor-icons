module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: 'editor-icons_*.svg',
        dest: './src/svg/',
        rename: function(dest, src) {
          return dest + src.split('_')[1];
        }
      },
    },

    webfont: {
      icons: {
        src: 'src/svg/*.svg',
        dest: 'dist',
        destCss: './dist/less',
        relativeFontPath: './fonts',  

        options: {
          types: 'woff',
          embed: false,
          engine: 'node',
          stylesheet: 'less',
          templateOptions: {
            baseClass: 'editor-icons',
            classPrefix: 'icon-',
            mixinPrefix: 'icon-'
          },
          font: 'editor-icons'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'webfont']);

};