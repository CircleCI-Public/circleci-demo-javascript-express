'use strict';

var defaultProps = require('./ast-properties');

module.exports = function createWhitelist (options) {
  var opts = options || {};
  var typeName, i, len;
  var keys = Object.keys(defaultProps);
  var result = {};
  for (i = 0, len = keys.length; i < len; i += 1) {
    typeName = keys[i];
    result[typeName] = defaultProps[typeName].concat(opts.extra || []);
  }
  return result;
};
