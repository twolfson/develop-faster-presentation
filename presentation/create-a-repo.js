var center = require('center-text');
var colors = require('colors');

module.exports = function () {
  // TODO: Figure out how to open an image from the CLI (i.e. that demo GIF
  // TODO: Copy over the demo image
  console.log(center('Create a repo'.underline));
  console.log('');
  console.log('mkdir hai-node-summit');
  console.log('cd hai-node-summit');
  console.log('git init');
  console.log('');
  console.log('hub create');
  console.log('');
  console.log('grunt-init node');
  console.log('');
};