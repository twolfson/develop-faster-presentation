var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

module.exports = function () {
  // TODO: Code up a HELP action
  // TODO: Copy over the gif
  console.log(center('Optional'.underline));
  console.log('');
  console.log('# Browser development'.underline);
  console.log('cd ~/github/twolfson.com');
  console.log('npm start');
  console.log('livereload  # In separate terminal');
  console.log('');
  console.log('# Open Firefox via ctrl+click');
  console.log('# Start livereload extension');
  console.log('');
  console.log('pico views/layout.ejs');
  console.log('');
  console.log('npm run test-perceptual');
  console.log('');
  console.log('# Sloppy typing'.underline);
  console.log('git config --global help.autocorrect 7');
  console.log('git add -A');
  console.log('git comit -m "Bad typing ftw"  # Notice the mispelling of `comit`');
  console.log('');
};