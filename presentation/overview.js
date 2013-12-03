var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

function extractFnComment(fn) {
  return functionToString(fn).body.replace(/\/\*\n*/, '').replace(/\*\/\n*/, '');
}

module.exports = function () {
  console.log(center('Overview'.underline));
  console.log('');

// DEV: This was a hack I saw recently but cannot find/recall from where =(
var primary = function () {/*
+---------------+    +-----------------+    +----------------+
|               |    |                 |    |                |
|               |    | Write some code |    |                |
| Create a repo | -> |                 | -> | Compile assets |
|               |    |    (server)     |    |                |
|               |    |                 |    |                |
+---------------+    +-----------------+    +----------------+
*/};
  var primaryStr = extractFnComment(primary);
  primaryStr.split(/\n/g).forEach(function (line) {
    // Visually center content
    console.log(center(line));
  });

var secondary = function () {/*
   +-----------------+    +--------+    +------------------+    +---------+
   |                 |    |        |    |                  |    |         |
   | Write some code |    |        |    |                  |    |         |
-> |                 | -> | Commit | -> | Write some tests | -> | Release |
   |    (browser)    |    |        |    |                  |    |         |
   |                 |    |        |    |                  |    |         |
   +-----------------+    +--------+    +------------------+    +---------+
*/};
  // TODO: Sloppy typing consists of git autohelp and tab completion for all CLI tools
  // TODO: What about YAGNI. We AGNI.
  var secondaryStr = extractFnComment(secondary);
  secondaryStr.split(/\n/g).forEach(function (line) {
    console.log(center(line));
  });
};