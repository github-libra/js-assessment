exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    return str.split('').reduce((a, b) => {
        if(a.length && last(a, amount, b)) {
            return a
        }else {
            a.push(b)
            return a
        }
    }, []).join('')
    function last(arr, n, a) {
        return arr.length >= n && arr.slice(arr.length - n).every(each => each === a)
    }
  },

  wordWrap: function(str, width, brk, cut) {

  },

  reverseString: function(str) {
    return str.split('').reverse().join('')
  }
};
