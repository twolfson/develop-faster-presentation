var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

module.exports = function () {
  console.log(center('Compile assets'.underline));
  console.log('');
  console.log('cd ~/github/twolfson.com');
  console.log('grunt sass watch');
  console.log('');
  console.log('# In another terminal');
  console.log('pico public/css/vars.scss');
  console.log('');
};