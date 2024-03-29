var myfiles = {

  // "myapp_js": [
  //   "js/myapp/myapp_sample1.js",
  //   "js/myapp/myapp_sample2.js"
  // ],

}

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['js/**/*.js']
      }
    },

    concat: {
      options: {
        separator: ';'
      },

      myapp_js: {
        files: {
          'js/<%= pkg.name %>.js': myfiles.myapp_js,
        },
      },
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourceMap: true,
        report: 'min'
      },
      myapp_js: {
        files: {
          'js/<%= pkg.name %>.min.js': myfiles.myapp_js
        }
      }
    },

    sass: {
      options: {
        includePaths: ['vendor/materialcss/sass/'],
        trace: true
      },
      dist: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'www/css/<%= pkg.name %>-<%= grunt.template.today("yyyy-mm-dd") %>.css': 'www/vendor/materialcss/sass/materialize.scss'
        }
      },
      dev: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'www/css/<%= pkg.name %>.css': 'www/vendor/materialcss/sass/materialize.scss'
        }
      }
    },

    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile'],
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }


  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });


  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks.
  grunt.registerTask('default', ['sass']);
  // grunt.registerTask('default', ['uglify']);
  // grunt.registerTask('default', ['concat','uglify']);
  // grunt.registerTask('test', ['jshint', 'qunit']);

};
