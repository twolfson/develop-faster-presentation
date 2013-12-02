var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

module.exports = function () {
  // TODO: Figure out how to open an image from the CLI (i.e. that demo GIF
  // TODO: Copy over the demo image
  console.log(center('Write some code'.underline));

function code() {
function Calculator() {
  this.total = 0;
}
Calculator.prototype = {
  add: function (num) {
    this.total += num;
  }
};
module.exports = Calculator;
}
  console.log(functionToString(code).body);
};