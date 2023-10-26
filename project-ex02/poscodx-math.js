// export 객체는 하나만

module.exports = {
    PI: 3.14,
    min: function () {
        var min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(function (e) {
            if (e < min) {
                min = e;
            }
        });
        return min;
    },
    max: function () {
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function (e) {
            if (e > max) {
                max = e;
            }
        });
        return max;
    },
};

// ERROR. module.exports가 있어서 인식하지 못함
// exports.a = 10;
