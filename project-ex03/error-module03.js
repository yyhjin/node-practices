/**
 * module.exports와 exports를 혼용해서 사용하지 않았기 때문에
 * 선언된 변수 모두 사용 가능함
 * 만약 혼용해서 사용한다면 에러 날 가능성이 높음
 */

module.exports = {
    n: 10,
    s: "javascript",
    o: {},
};

module.exports.b = false;
module.exports.f = function () {};
