var Figlet = require('figlet-js').Figlet;
var center = require('center-text');
var colors = require('colors');

module.exports = function () {
  if (!process.env.HELP) {
    var font = process.stdout.columns >= 104 ? 'speed' : 'smslant';
    Figlet.write('Reflection', font, function (err, str) {
      if (err) {
        throw err;
      } else {
        str.split(/\n/g).forEach(function (line) {
          console.log(center(line));
        });
        console.log(center('(Reflection)'));
        console.log('');
      }
    });
  } else {
    console.log('"A man is only as good as his tools."');
    console.log(' - Some gender ignorant person');
    console.log('');
    console.log('Developers that make their own tools are only limited by their own imagination.');
    console.log('');
  }
};