exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
    count: function(start, end) {
        var i = start
        console.log(i);
        var t = setInterval(() => {
            if (++i <= end) {
                console.log(i)
            }
        }, 100)

        return {cancel: function() {
            clearInterval(t)
        }}
    }
};
