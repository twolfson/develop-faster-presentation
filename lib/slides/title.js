var Figlet = require('figlet-js').Figlet;

module.exports = function () {
  // Figlet fonts can be found here
  // http://www.figlet.org/examples.html
  // Figlet.write('Develop Faster', 'epic', function (err, str) {
  // Figlet.write('Develop Faster', 'lean', function (err, str) {
  // Figlet.write('Develop Faster', 'slant', function (err, str) {
  Figlet.write('Develop Faster', 'speed', function (err, str) {
  // Figlet.write('Develop Faster', 'trek', function (err, str) {
    if (err) {
      throw err;
    } else {
      /*

      # DEVELOP FASTER

      // TODO: Ideally center text

                 Todd Wolfson, Engineer, Uber

      github/twolfson -- @twolfson -- http://twolfson.com/

      */
      console.log(str);
      console.log('(Develop Faster)');
      console.log('');
      console.log('Todd Wolfson, Engineer, Uber');
      console.log('');
      // TODO: Maybe underline these
      console.log('github/twolfson -- @twolfson -- http://twolfson.com/');
    }
  });
};