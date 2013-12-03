var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

function extractFnComment(fn) {
  return functionToString(fn).body.replace(/\/\*\s*/, '').replace(/\*\/\s*/, '');
}

module.exports = function () {
  console.log(center('Overview'.underline));

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
  var primaryStr = extractFnComment(primary);
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
  var secondaryStr = extractFnComment(secondary);
  secondaryStr.split(/\n/g).forEach(function (line) {
    console.log(center(line).slice(1));
  });
};