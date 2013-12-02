var Figlet = require('figlet-js').Figlet;
var center = require('center-text');
var colors = require('colors');

module.exports = function () {
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
};