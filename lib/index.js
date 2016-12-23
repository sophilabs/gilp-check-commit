'use strict'
var gutil = require('gulp-util');
var through = require('through2');
var fs = require('fs');


function gilpCheckCommit(expr, messageFileName) {
  var messageFileName = messageFileName || '.git/COMMIT_EDITMSG';
  var checked = false;
  return through.obj(function (file, enc, cb) {
    if (checked === true) {
      cb(null, file);
      return;
    }
    var message = fs.readFileSync(messageFileName);
    checked = true;
    file.checkCommit = {'errors': []}
    if (message !== null && !message.toString().match(expr)) {
      file.checkCommit.errors.push(message.toString());
    }
    cb(null, file);
  });
}

gilpCheckCommit.failOnError = function(message) {
  message = message || 'Invalid commit message.';
  return through.obj(function (file, enc, cb) {
    if (file.checkCommit && !file.checkCommit.errors.length || !file.checkCommit) {
      cb(null, file);
      return;
    }
    cb(new gutil.PluginError('gilp-check-commit', {
      name: 'CommitNameError',
      message: message
    }), file);
  });
}

module.exports = gilpCheckCommit;
