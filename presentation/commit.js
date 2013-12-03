var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

module.exports = function () {
  console.log(center('Commit'.underline));
  console.log('');
  console.log('git config --global help.autocorrect 7');
  console.log('git add -A');
  console.log('git comit -m "Bad typing ftw"  # Notice the mispelling of `comit`');
  console.log('');
};