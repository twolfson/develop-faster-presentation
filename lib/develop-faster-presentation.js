// Load in dependencies
var assert = require('assert');
var path = require('path');

// Create our Presentation class
function Presentation(config, options) {
  // Fallback options
  options = options || {};

  // Determine the working directory and start loading slides
  // TODO: This should be async... =/
  // TODO: Consider using .addSlide method
  var cwd = options.cwd || process.cwd();
  assert(config.slides, '"slides" were not provided in presentation config');
  this.slides = config.slides.map(function (filepath) {
    return require(path.join(cwd, filepath));
  });
  this.length = this.slides.length;

  // Save config for later
  this.cwd = cwd;
  this.config = config;
}
Presentation.prototype = {
  getSlide: function (num) {
    return this.slides[num];
  }
};
module.exports = Presentation;
