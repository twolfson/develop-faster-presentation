# develop-faster-presentation

Presentation on removing the tedium from creating, developing, and publishing repos.

This talk was presented at [Node Summit 2013][]. It showcases tools for dealing with repetitive tasks during a repository's life cycle. Additionally, this talk is based off of the [Develop Faster blog post][].

[Node Summit 2013]: http://nodesummit.com/
[Develop Faster blog post]: http://twolfson.com/2013-07-27-develop-faster

## Getting Started
Install the module with: `npm install -g develop-faster-presentation`

```bash
# Inside of a terminal
develop-faster
# ________                     ______                       __________                _____
# ___  __ \_____ ___   _______ ___  /______ ________        ___  ____/______ ___________  /______ ________
# __  / / /_  _ \__ | / /_  _ \__  / _  __ \___  __ \       __  /_    _  __ `/__  ___/_  __/_  _ \__  ___/
# _  /_/ / /  __/__ |/ / /  __/_  /  / /_/ /__  /_/ /       _  __/    / /_/ / _(__  ) / /_  /  __/_  /
# /_____/  \___/ _____/  \___/ /_/   \____/ _  .___/        /_/       \__/_/  /____/  \__/  \___/ /_/
#                                           /_/
#
#                                             (Develop Faster)
#
#                                       Todd Wolfson, Engineer, Uber
#
#                            github/twolfson -- @twolfsn -- http://twolfson.com/
#
```

## Documentation
The `develop-faster` script provides many commands which can be accessed via `develop-faster --help`.

```bash
$ develop-faster --help

  Usage: develop-faster [options] [command]

  Commands:

    slide <slide>          Jump to a specific slide
    first                  Go back to the beginning
    last                   Jump to the final slide
    next                   Move following by one slide
    previous               Move back by one slide
    back                   Alias for previous
    status                 Get overview of slides

  Options:

    -h, --help             output usage information
    -c, --config <config>  Path to configuration file (accepts .js, .json, .yml)
    -V, --version          output the version number
```

### Slides
Slide order is configured via `presentation/config.yml`.

Slides are `presentation/*js` and will output content directly to `console.log`/`process.stdout`.

### Framework
`bin/develop-faster` extends upon [`cli-presentation`][], a framework for giving terminal-based presentations.

It was built after the initial release of `develop-faster-presentation`.

[`cli-presentation`]: https://github.com/twolfson/cli-presentation

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via [grunt](https://github.com/gruntjs/grunt).

## Donating
Support this project and [others by twolfson][gittip] via [gittip][].

[![Support via Gittip][gittip-badge]][gittip]

[gittip-badge]: https://rawgithub.com/twolfson/gittip-badge/master/dist/gittip.png
[gittip]: https://www.gittip.com/twolfson/

## Unlicense
As of Nov 29 2013, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE
