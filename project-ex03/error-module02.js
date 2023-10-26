/**
 * module.exports 객체가 만들어지고 그 안에 function01이 들어있음
 * exports는 module.exports를 참조하기 때문에 function02는 사용할 수 없음
 */

module.exports = function () {
    console.log("function01");
};

exports.function2 = function () {
    console.log("function02");
};
