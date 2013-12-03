var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

module.exports = function () {
  console.log(center('Compile assets'.underline));

function code() {/*
# Inside of terminal
lnpm grunt-less --save-dev
grunt less watch

# Inside of Gruntfile.js
module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      files: [{
        src: 'public/index.less',
        dest: 'public/index.css'
      }]
    },
    watch: {
      less: {
        files: '<%= less.files.src %>',
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTask('grunt-less');
  grunt.registerTask('default', ['less']);
};

# Inside of `public/index.less`
@background-image: 'grid.png';

body {
  background: url(@background-image);
}
*/}
  console.log(functionToString(code).body.replace('/*', '').replace('*/', ''));
};