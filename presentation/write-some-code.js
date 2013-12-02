var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

module.exports = function () {
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