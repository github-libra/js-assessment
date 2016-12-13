exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/g.test(str)
  },

  containsRepeatingLetter: function(str) {
    return /([a-z])\1/i.test(str)
  },

  endsWithVowel: function(str) {
    return /[aeiou]$/i.test(str)
  },

  captureThreeNumbers: function(str) {
    var match = str.match( /\d{3}/ )
    return match ? match[0] : false
  },

  matchesPattern: function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str)
  },

  isUSD: function(str) {
    return /^\$\d+(,\d{3}){0,2}(\.\d{2})?$/.test(str)
  }
};
