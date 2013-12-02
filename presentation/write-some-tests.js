var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

module.exports = function () {
  console.log(center('Write some tests'.underline));

  console.log('');
  console.log('# Run this:');
  console.log('nodemon -x "npm test"');
  console.log('');
  console.log('# Test');


function code() {
var assert = require('assert');
var Calculator = require('../');

describe('A calculator', function () {
  beforeEach(function () {
    this.calc = new Calculator();
  });

  it('', function () {
  });
});
}

function codeHelp() {
var assert = require('assert');
var Calculator = require('../');

describe('A calculator', function () {
  beforeEach(function () {
    this.calc = new Calculator();
  });

  it('has a total of 0', function () {
    assert.strictEqual(this.calc.total, 0);
  });

  describe('adding 2 and 3', function () {
    beforeEach(function () {
      this.calc.add(2);
      this.calc.add(3);
    });

    it('has a total of 5', function () {
      assert.strictEqual(this.calc.total, 5);
    });
  });
});
}

  if (process.env.HELP) {
    console.log(functionToString(codeHelp).body.replace('\n', ''));
  } else {
    console.log(functionToString(code).body.replace('\n', ''));
  }
};