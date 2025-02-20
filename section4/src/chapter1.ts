/**
 * 함수 타입 표현식(function type expressions)
 */

type Operation = (a: number, b: number) => number;

// 비슷한 형태의 함수를 여러 개 만들어야 할 때 각각 함수에 타입 정의를 일일이 해야하는 것은 상당히 비효율
// 이럴 때 함수 타입 표현식을 사용하면 편리

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

/**
 * 콜 시그니처(call signature)
 */

type Operation2 = {
    (a: number, b: number): number;
    operationName?: string;
};

const add2: Operation2 = (a, b) => a + b;
add2.operationName = "덧셈";
