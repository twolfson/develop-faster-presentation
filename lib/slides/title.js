var Figlet = require('figlet-js').Figlet;
var center = require('center-text');

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
      var opts = {
        columns: firstRow.length
      };

      console.log(str);
      console.log(center('(Develop Faster)', opts));
      console.log(center('', opts));
      console.log(center('Todd Wolfson, Engineer, Uber', opts));
      console.log(center('', opts));
      // TODO: Maybe underline these
      console.log(center('github/twolfson -- @twolfson -- http://twolfson.com/', opts));
    }
  });
};