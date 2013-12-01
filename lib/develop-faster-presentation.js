// Load in dependencies
var assert = require('assert');
var path = require('path');

// Create our Presentation class
function Presentation(config, options) {
  // Fallback options
  options = options || {};

  // Determine the working directory
  var cwd = options.cwd || process.cwd();
  this.cwd = cwd;

  // Save config for later
  this.config = config;

  // Load in slides
  assert(config.slides, '"slides" were not provided in presentation config');
  this.slides = [];
  this.length = this.slides.length;
  config.slides.forEach(function (filepath) {
    this.addSlide(path.join(cwd, filepath));
  }, this);
}
Presentation.prototype = {
  addSlide: function (filepath) {
    this.slides.push(require(filepath));
    this.length = this.slides.length;
  },
  getSlide: function (num) {
    return this.slides[num];
  }
};
module.exports = Presentation;
