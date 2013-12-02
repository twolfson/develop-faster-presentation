var center = require('center-text');
var colors = require('colors');

module.exports = function () {
  console.log(center('Overview'.underline));

// TODO: Figure out centering (should it be consistent with other pages or not?
// TODO: Maybe limit everyone to 80?
// DEV: This was a hack I saw recently but cannot find/recall from where =(
var primary = function () {
/*
+---------------+    +-----------------+    +------------------+    +---------+
|               |    |                 |    |                  |    |         |
| Create a repo | -> | Write some code | -> | Write some tests | -> | Release |
|               |    |                 |    |                  |    |         |
+---------------+    +-----------------+    +------------------+    +---------+
*/
};
  var primaryStr = primary.toString().replace('function () {\n/*', '').replace('*/\n}', '');
  primaryStr.split(/\n/g).forEach(function (line) {
    // Visually center content
    console.log(center(line).slice(2));
  });

  console.log('');
  console.log(center('If time alots:'));

var secondary = function () {
/*
+---------------------+    +---------------+
|                     |    |               |
| Browser development |    | Sloppy typing |
|                     |    |               |
+---------------------+    +---------------+
*/
};
  // TODO: Sloppy typing consists of git autohelp and tab completion for all CLI tools
  // TODO: What about YAGNI. We AGNI.
  var secondaryStr = secondary.toString().replace('function () {\n/*', '').replace('*/\n}', '');
  secondaryStr.split(/\n/g).forEach(function (line) {
    console.log(center(line).slice(1));
  });

};