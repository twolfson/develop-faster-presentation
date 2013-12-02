var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

module.exports = function () {
  console.log(center('Release'.underline));
  console.log('');
  console.log('pico CHANGELOG.md');
  console.log('');
  console.log('git release 0.1.0');
  console.log('');
};