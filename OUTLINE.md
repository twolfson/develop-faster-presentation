// Start with title slide
/*

# DEVELOP FASTER

Todd Wolfson

Engineer, Uber

github/twolfson -- @twolfson -- http://twolfson.com/

*/

// ## NEXT SLIDE

// TODO: Figure out graphic here... Maybe colored block quote
// although that would be premature for half of the slide
// Maybe put up

// TODO: Generate these outputs via tee (legit outputs)

/*
```
$ gco dev/hai
$ e "Hello World!" > hello.txt
$ gm "Added hello.txt"
```
*/

// Then switch to another slide

/*
```
$ git checkout dev/hai
$ echo "Hello World!" > hello.txt
$ git commit -m "Added hello.txt"
```
*/

// Tab completion is most programs will preseve the normal syntax
// and keep your history legible

// DEV: This intro is a little bit long, we only have 20-25 minutes

// As the title suggests, today we are going to be talking about developing faster.

// I am not going to be talking about developer hacks (e.g. 1 letter aliases)

// I am going to be focusing on tools.

// I like to think of a famous quote: "A man is only as good as his tools."

// TODO: Make comment about gender equality of that quote

// So, I am the owner/maintainer of over 150 open source repos. The most
// recognizable one is spritesmith with over 200 stars.

// Today, we will walk through how I create, maintain, and release repos.

// TODO: Should we present a top level run through?
// Background -> Create a repo -> Write some code
// -> Write some tests (watch) -> Release
// Optional: Maintenance iteration (livereload)
// Optional: Preventing regressions (perceptual diffs)
// Optional: git autohelp (you must trust your workflow first)

// ## NEXT SLIDE

// First, creating a repo.

// TODO: Definitely record this via tee

/*
// TODO: As per notes, consider using joke name generator
mkdir hai-node-summit
cd hai-node-summit
git init

# First tool!
hub create

# Second tool!
grunt-init node
*/

// TODO: If internet sucks, show GIF
// TODO: Prepare a damn GIF (I think we have leftover for this one)

// TODO: Not really slides are much as steps...
// TODO: Technically, git init, hub create, and grunt-init node are separate steps
// but the same category?

// ## NEXT STEP

// Live coding =D

// Rewrite lib to calculator
/*
function Calculator() {
  this.total = 0;
}
Calculator.prototype = {
  add: function (num) {
    this.total += num;
  }
};
module.exports = Calculator;
*/

// Start running the tests consistently via `nodemon`
// Make note about alternatives: `mocha --watch`, `listen-spawn`,
// `guard` (ruby), `watcher` (go), `entr` (c), `watchman` (php)

// Tests should look like:
/*
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
*/

// ## NEXT STEP

// Now we release.

// Edit the change log

// Initial release. Added Calculator and tests.

// git add -A

// git commit -m "Updated CHANGELOG"

// git release 0.1.0  # tags release, publishes to npm, pushes commits to GitHub, pushes tags to GitHub

// Talk about generalization of release system; used for Python, Sublime Text, bower, and component

// Go into optional content

// TODO: Make sure twolfson.com has up-to-date perceptual diffs

// Optional: livereload twolfson.com
// Update some content
// Perceptual diff
// Preventing regressions before they even happen

// ## CLOSING

// TODO: A note somewhere about
// "A developer who can make its own tools is only limited by its own imagination."

// or in the words of Willy Wonka
// "Anything you want to, do it"
// "Want to change the world, there's nothing to it"

// At the end, print EOF.