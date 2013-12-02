var Figlet = require('figlet-js').Figlet;
var center = require('center-text');
var colors = require('colors');

module.exports = function () {
  // Figlet fonts can be found here
  // http://www.figlet.org/examples.html
  var font = process.stdout.columns >= 104 ? 'speed' : 'smslant';
  Figlet.write('Develop Faster', font, function (err, str) {
    if (err) {
      throw err;
    } else {
      /*

      # DEVELOP FASTER

                 Todd Wolfson, Engineer, Uber

      github/twolfson -- @twolfson -- http://twolfson.com/

      */

      // Customize font a little bit
      str.split(/\n/g).forEach(function (line) {
        console.log(center(line.replace('__,_', '__/_')));
      });
      console.log(center('(Develop Faster)'));
      console.log(center(''));
      console.log(center('Todd Wolfson, Engineer, Uber'));
      console.log(center(''));
      console.log(center([
        'github/twolfson'.underline,
        ' -- ',
        '@twolfson'.underline,
        ' -- ',
        'http://twolfson.com/'.underline
      ].join('')));
      console.log(center(''));
    }
  });
};