var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

module.exports = function () {
  console.log(center('Write some code (server)'.underline));
  console.log('');
  console.log('nodemon');
  console.log('');
  console.log('# Alternatives: `listen-spawn`, `guard` (ruby), ');
  console.log('#   `watcher` (go), `entr` (c),');
  console.log('#   `watchman` (php)');
  console.log('');
  console.log('# Inside of lib/hai-node-summit.js');

function code() {
var http = require('http');

module.exports = function (port) {
  var app = http.createServer(function (req, res) {
    res.end('Hello World!');
  });

  app.listen(port);
  return app;
};

if (module.parent === null) {
  module.exports(9001);
  console.log('Server is listening at http://127.0.0.1:' + 9001 + '/');
}
}
  console.log(functionToString(code).body);
};