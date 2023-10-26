/**
 * module.exports와 exports를 혼용해서 사용했기 때문에 에러
 * 전부 module.exports만 사용했다면 에러 안날것
 */

module.exports = {
    n: 10,
    s: "javascript",
    o: {},
};

exports.b = false;
exports.f = function () {};
