var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

module.exports = function () {
  console.log(center('Write some code'.underline));

function code() {
var http = require('http');
var app = http.createServer(function (req, res) {
  res.end('Hello World!');
});

var port = 9001;
app.listen(port);
console.log('Server is listening at http://127.0.0.1:' + port + '/');
}
  console.log(functionToString(code).body);
};