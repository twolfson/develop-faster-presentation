var center = require('center-text');
var colors = require('colors');
var functionToString = require('function-to-string');

module.exports = function () {
  console.log(center('Write some tests'.underline));
  console.log('');
  console.log('# Inside of a terminal');
  console.log('cd ~/github/hai-node-summit');
  console.log('lnpm install request --save-dev');
  console.log('mocha --watch');
  console.log('');
  console.log('# Inside of test/hai-node-summit_test.js');

function code() {
var assert = require('assert');
var Server = require('../');

// TODO: Show off perceptual diffs if we have time =)
describe('hai-node-summit', function () {
  before(function () {
    this.app = new Server(9002);
  });
  after(function (done) {
    this.app.close(done);
  });

  describe('replying to a request', function () {
    it.skip('returns "Hello World!"', function () {
    });
  });
});
}

function codeHelp() {
var assert = require('assert');
var request = require('request');
var Server = require('../');

// TODO: Show off perceptual diffs if we have time =)
describe('hai-node-summit', function () {
  before(function () {
    this.app = new Server(9002);
  });
  after(function (done) {
    this.app.close(done);
  });

  describe('replying to a request', function () {
    before(function (done) {
      var that = this;
      request('http://localhost:9002/', function (err, res, body) {
        that.body = body;
        done(err);
      });
    });

    it('returns "Hello World!"', function () {
      assert.strictEqual(this.body, 'Hello World!\n');
    });
  });
});
}

  if (!process.env.HELP) {
    console.log(functionToString(code).body.replace('\n', ''));
  } else {
    console.log(functionToString(codeHelp).body.replace('\n', ''));
  }
};