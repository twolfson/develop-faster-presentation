var center = require('center-text');
var colors = require('colors');

module.exports = function () {
  console.log(center('Create a repo'.underline));
  console.log('');
  if (!process.env.HELP) {
    console.log('# Open a new terminal window');
    console.log('cd ~/github');
    console.log('mkdir hai-node-summit');
    console.log('cd hai-node-summit');
    console.log('git init');
    console.log('');
    console.log('hub create');
    console.log('');
    console.log('grunt-init node');
    console.log('');
    console.log('subl .');

    // Place some vertical padding
    console.log('');
  } else {
    console.log('cd ~/github/twolfson.com');
    console.log('npm start');
    console.log('firefox http://127.0.0.1:8080/2013-07-27-develop-faster#starting-a-repo');
    console.log('');
  }
};