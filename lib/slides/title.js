var Figlet = require('figlet-js').Figlet;

Figlet.write('Develop Faster', 'epic', function (err, str) {
  if (err) {
    throw err;
  } else {
    console.log(str);
    console.log('');
    console.log('Todd Wolfson, Engineer, Uber');
    console.log('');
    // TODO: Maybe underline these
    console.log('github/twolfson -- @twolfson -- http://twolfson.com/');
  }
});