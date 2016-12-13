exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
    valueAtBit: function(num, bit) {
        return (num >> (bit - 1)) % 2
    },

    base10: function(str) {
        var s = 0
        for (var i = 0; i < str.length; ++i) {
            if (str[i] === '1') {
                s += Math.pow(2, (str.length - i - 1))
            }
        }
        return s
    },

    convertToBinary: function(num) {
        var s = ''
        var x = 128
        while (x >= 1) {
            if (num / x >= 1) {
                s += '1'
                num -= x
            } else {
                s += '0'
            }
            x /= 2
        }
        return s
    },

    multiply: function(a, b) {
        var atens = Math.pow(10, String(a).length - String(a).indexOf('.') - 1),
            btens = Math.pow(10, String(b).length - String(b).indexOf('.') - 1);
        return (a * atens) * (b * btens) / (atens * btens);
    }
};
