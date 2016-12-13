exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr)
  },

  speak: function(fn, obj) {
    return fn.apply(obj)
  },

  functionFunction: function(str) {
    return function(str1) {
      return str + ', ' + str1
    }
  },

  makeClosures: function(arr, fn) {
    var fns = []
    for(var i=0; i<arr.length; i++) {
      (function(a) {
        fns.push(function() {return fn(arr[a])})
      })(i)
    }
    return fns
  },

  partial: function(fn, str1, str2) {
    return function(s) {
      return fn(str1, str2, s)
    }
  },

  useArguments: function() {
    return [].slice.call(arguments).reduce((a, b) => a + b)
  },

  callIt: function(fn) {
    return fn.apply(null, [].slice.call(arguments, 1))
  },

  partialUsingArguments: function(fn) {
    var arg1 = [].slice.call(arguments, 1)
    return function() {
      var arg2 = [].slice.call(arguments)
      return fn.apply(null, arg1.concat(arg2))
    }
  },

  curryIt: function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn(a, b, c)
        }
      }
    }
  }
};
