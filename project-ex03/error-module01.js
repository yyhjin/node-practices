var app = function () {
    console.log("app() called");
};

// module.exports를 참조해야 하는데 app()을 참조하고 있음
// 따라서 반환된 module.exports는 비어있다.
exports = app;
