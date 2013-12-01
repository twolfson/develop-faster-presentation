var center = require('center-text');

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
  console.log(primary.toString().replace('function () {\n/*', '').replace('*/\n}', ''));

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
  console.log(secondary.toString().replace('function () {\n/*', '').replace('*/\n}', ''));

};