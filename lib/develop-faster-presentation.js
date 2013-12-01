// Load in dependencies
var assert = require('assert');

// Create our Presentation class
function Presentation(config, options) {
  // Fallback options
  options = options || {};

  // Determine the working directory and start loading slides
  // TODO: This should be async... =/
  var cwd = options.cwd || process.cwd();
  assert(config.slides, '"slides" were not provided in presentation config');
  this.slides = config.slides.map(function (filepath) {
    return require(path.join(cwd, filepath));
  });

  // Save config for later
  this.cwd = cwd;
  this.config = config;
}
