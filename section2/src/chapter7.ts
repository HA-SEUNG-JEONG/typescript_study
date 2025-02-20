// void
// void -> 아무것도 없음을 의미하는 타입

function func1() {
    return "hello";
}

// void 타입
function func2() {
    console.log("hello");
}
// func2의 반환값으로 null이나 undefined를 선언하고 싶은 경우에는 리턴하는 값에도 undefined나 null을 붙여줘야 한다.

let a: void;
// void로 선언한 변수에는 어떠한 타입의 값도 담을 수 없음
// a = 1;
// a = "hello";
// a = false;
