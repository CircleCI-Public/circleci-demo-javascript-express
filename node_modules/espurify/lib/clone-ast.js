'use strict';

module.exports = function cloneWithWhitelist (astWhiteList) {
  var whitelist = Object.keys(astWhiteList).reduce(function (props, key) {
    var propNames = astWhiteList[key];
    var prepend = (propNames.indexOf('type') === -1) ? ['type'] : [];
    props[key] = prepend.concat(propNames || []);
    return props;
  }, {});

  function cloneNodeOrObject (clone, obj, seen) {
    var props = obj.type ? whitelist[obj.type] : null;
    if (props) {
      return cloneNode(clone, obj, props, seen);
    } else {
      return cloneObject(clone, obj, seen);
    }
  }

  function cloneArray (clone, ary, seen) {
    var i = ary.length;
    while (i--) {
      if (seen.has(ary[i])) {
        clone[i] = seen.get(ary[i]);
      } else {
        clone[i] = cloneOf(ary[i], seen);
      }
    }
    return clone;
  }

  function cloneNode (clone, node, props, seen) {
    var i, len, key;
    for (i = 0, len = props.length; i < len; i += 1) {
      key = props[i];
      if (node.hasOwnProperty(key)) {
        if (seen.has(node[key])) {
          clone[key] = seen.get(node[key]);
        } else {
          clone[key] = cloneOf(node[key], seen);
        }
      }
    }
    return clone;
  }

  function cloneObject (clone, obj, seen) {
    var props = Object.keys(obj);
    var i, len, key, value;
    for (i = 0, len = props.length; i < len; i += 1) {
      key = props[i];
      value = obj[key];
      if (seen.has(value)) {
        clone[key] = seen.get(value);
      } else {
        clone[key] = cloneOf(value, seen);
      }
    }
    return clone;
  }

  function cloneOf (val, seen) {
    if (typeof val === 'object' && val !== null) {
      if (val instanceof RegExp) {
        return new RegExp(val);
      } else if (Array.isArray(val)) {
        var clone = [];
        seen.set(val, clone);
        return cloneArray(clone, val, seen);
      } else {
        var clone = {};
        seen.set(val, clone);
        return cloneNodeOrObject(clone, val, seen);
      }
    } else {
      return val;
    }
  }

  function cloneRoot (obj) {
    var seen = new Map();
    var clone = {};
    seen.set(obj, clone);
    return cloneNodeOrObject(clone, obj, seen);
  }

  return cloneRoot;
};
