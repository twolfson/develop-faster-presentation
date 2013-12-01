var center = require('center-text');

module.exports = function () {
  // TODO: Move to markdown (including colors?)
  console.log(center('What we are not doing'.underline));
  console.log(center(''));
  console.log('```');
  console.log('$ gco dev/hai');
  console.log('Switched to a new branch \'hai\'');
  console.log('$ e "Hello World!" > hello.txt');
  console.log('$ gm "Added hello.txt"');
  console.log('[dev/hai 3e0d8ce] Test');
  console.log('```');
  console.log('');
};