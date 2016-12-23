# Gilp Check Commit

[![travis][travis-image]][travis-url]
[![coverage][coveralls-image]][coveralls-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![js-semistandard-style][semi-image]][semi-url]
[![license][license-image]][license-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]

Gilp plugin to validate commit messages.

## Installation

```bash
npm install gilp-check-commit
```

## Usage

```javascript
var gulp = require('gulp');
var gilpCommitMessage = require('gilp-commit-message');
var gilp = require('gilp')(gulp);

gilp.hook('commit-msg', function () {
  return gilp.srcFromStaged(['**/*'])
    .pipe(gilpCommitMessage(/^(NA|[0-9]+)\:\s[A-Z0-9].*\.$/gm))
    .pipe(gilpCommitMessage.failOnError())
  });
```

## License

Gilp Check Commit is Copyright (c) 2016 sophilabs, inc. It is free software, and may be
redistributed under the terms specified in the [license] file.

## About

[![sophilabs][sophilabs-image]][sophilabs-url]

Gilp Check Commit is maintained and funded by sophilabs, inc. The names and logos for
sophilabs are trademarks of sophilabs, inc.

[license]: /LICENSE
[sophilabs-image]: https://res.cloudinary.com/jsconfuy/image/upload/c_pad,f_auto,h_200,w_200,e_trim/v1426608244/xuwbunompvfjaxuazlwo.png
[sophilabs-url]: https://sophilabs.co
[travis-image]: https://img.shields.io/travis/sophilabs/gilp-check-commit.svg?style=flat-square
[travis-url]: https://travis-ci.org/sophilabs/gilp-check-commit
[npm-image]: https://img.shields.io/npm/v/gilp-check-commit.svg?style=flat-square
[npm-url]: https://npmjs.org/packge/gilp-check-commit
[downloads-image]: https://img.shields.io/npm/dm/gilp-check-commit.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/gilp-check-commit
[semi-image]: https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square
[semi-url]: https://github.com/Flet/semistandard
[coveralls-image]: https://img.shields.io/coveralls/sophilabs/gilp-check-commit.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/sophilabs/gilp-check-commit?branch=master
[license-image]: https://img.shields.io/github/license/sophilabs/gilp-check-commit.svg?style=flat-square
[license-url]: /LICENSE
[dependencies-image]: https://david-dm.org/sophilabs/gilp-check-commit.svg?style=flat-square
[dependencies-url]: https://david-dm.org/sophilabs/gilp-check-commit
[dev-dependencies-image]: https://david-dm.org/sophilabs/gilp-check-commit/dev-status.svg?style=flat-square
[dev-dependencies-url]: https://david-dm.org/sophilabs/gilp-check-commit#info=devDependencies
