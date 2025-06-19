module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
        desenvolvimento: {
          files: {
            'dist/styles.css': 'src/styles/main.less'
          }
        }
      },
      cssmin: {
        alvo: {
          files: {
            'dist/styles.min.css': ['dist/styles.css']
          }
        }
      },
      uglify: {
        build: {
          files: {
            'dist/app.min.js': ['src/scripts/app.js']
          }
        }
      },
      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
          files: {
            'dist/index.html': 'src/index.html'
          }
        }
      },
      watch: {
        files: ['src/**/*.less'],
        tasks: ['less', 'cssmin']
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('watch' ['watch']);
    grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'htmlmin']);
  };
  