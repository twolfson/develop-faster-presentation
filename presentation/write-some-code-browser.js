var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

module.exports = function () {
  console.log(center('Write some code (browser)'.underline));
  console.log('');

  if (!process.env.HELP) {
    console.log('npm start');
    console.log('livereload  # In separate terminal');
    console.log('');
    console.log('# Open Firefox via ctrl+click');
    console.log('# Start livereload extension');
    console.log('');
    console.log('pico views/layout.ejs');
    console.log('');
  } else {
    console.log('cd ~/github/twolfson.com');
    console.log('npm start');
    console.log('firefox http://127.0.0.1:8080/2013-07-27-develop-faster#remove-bottlenecks');
    console.log('');
  }
};