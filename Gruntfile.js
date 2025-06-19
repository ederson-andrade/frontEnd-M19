module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      desenvolvimento: {
        files: {
          'dev/styles.css': 'src/styles/main.less'
        }
      }
    },

    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['index.html'],
            dest: 'dev/'
          }
        ]
      }
    },

    cssmin: {
      alvo: {
        files: {
          'dist/styles.min.css': ['dev/styles.css']
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
          'dist/index.html': 'dev/index.html'
        }
      }
    },

    watch: {
      files: ['src/**/*.less', 'src/**/*.html'],
      tasks: ['less', 'copy', 'cssmin', 'htmlmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'copy', 'cssmin', 'uglify', 'htmlmin']);
  grunt.registerTask('watchTask', ['watch']);
};
