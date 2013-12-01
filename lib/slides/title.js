var Figlet = require('figlet-js').Figlet;
var wordwrap = require('wordwrap');

module.exports = function () {
  // Figlet fonts can be found here
  // http://www.figlet.org/examples.html
  // Figlet.write('Develop Faster', 'epic', function (err, str) {
  // Figlet.write('Develop Faster', 'lean', function (err, str) {
  // Figlet.write('Develop Faster', 'slant', function (err, str) {
  Figlet.write('Develop Faster', 'speed', function (err, str) {
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
      var wrap = wordwrap(firstRow.length / 4, firstRow.length);

      console.log(str);
      console.log(wrap('                    (Develop Faster)'));
      console.log(wrap(''));
      console.log(wrap('               Todd Wolfson, Engineer, Uber'));
      console.log(wrap(''));
      // TODO: Maybe underline these
      console.log(wrap('    github/twolfson -- @twolfson -- http://twolfson.com/'));
    }
  });
};