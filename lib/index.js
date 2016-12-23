'use strict'
var through = require('through2');
var gilpUtil = require('gilp-util');

var gilpCheckCommit = function (expr, message) {
  message = message || 'Invalid commit message.';

  function bufferContents(file, enc, cb) {
    cb();
  }

  function endStream(cb) {
    var commitMessage = gilpUtil.getCommitMessage();
    if (!commitMessage.match(expr)) {
      this.emit('error', new Error('gilp-check-commit: ' + message));
      cb();
    }
  }

  return through.obj(bufferContents, endStream);
};

module.exports = gilpCheckCommit;
