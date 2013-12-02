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

      // Determine how long the first row was
      var firstRow = str.split('\n')[0];
      var opts = {
        columns: firstRow.length
      };

      // Customize font a little bit
      console.log(str.replace('__,_', '__/_'));
      console.log(center('(Develop Faster)', opts));
      console.log(center('', opts));
      console.log(center('Todd Wolfson, Engineer, Uber', opts));
      console.log(center('', opts));
      console.log(center([
        'github/twolfson'.underline,
        ' -- ',
        '@twolfson'.underline,
        ' -- ',
        'http://twolfson.com/'.underline
      ].join(''), opts));
      console.log(center('', opts));
    }
  });
};