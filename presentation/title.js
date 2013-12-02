var Figlet = require('figlet-js').Figlet;
var center = require('center-text');
var colors = require('colors');

module.exports = function () {
  // Figlet fonts can be found here
  // http://www.figlet.org/examples.html
  // TODO: Write test which asserts all lines are under 80 characters
  // TODO: Pass in total columns via module.exports fn
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

      // TODO: Move to consistent width for all slides based off of title slide width
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
        '@twolfsn'.underline,
        ' -- ',
        'http://twolfson.com/'.underline
      ].join('')));
      console.log(center(''));
    }
  });
};