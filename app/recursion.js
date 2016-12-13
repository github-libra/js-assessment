exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
    listFiles: function(data, dirName) {
        if (!dirName) dirName = data.dir
        if (data.dir === dirName) {
            var r = []
            data.files.forEach(f => {
                if (typeof f === 'string') {
                    r.push(f)
                } else {
                    r = r.concat(this.listFiles(f, f.dir))
                }
            })
            return r
        } else {
            for (var i = 0; i < data.files.length; i++) {
                if (data.files[i].dir) {
                    return this.listFiles(data.files[i], dirName)
                } else {
                    return []
                }
            }
        }
    },

    permute: function(arr) {
        var results = [];

        function permute(arr, memo) {
            var cur, memo = memo || [];

            for (var i = 0; i < arr.length; i++) {
                cur = arr.splice(i, 1);
                if (arr.length === 0) {
                    results.push(memo.concat(cur));
                }
                permute(arr.slice(), memo.concat(cur));
                arr.splice(i, 0, cur[0]);
            }

            return results;
        }

        return permute(inputArr);
    },

    fibonacci: function(n) {
        if(n===1) {
            return 1
        }
        if(n===2) {
            return 1
        }
        return this.fibonacci(n-2) + this.fibonacci(n-1)
    },

    validParentheses: function(n) {

    }
};
