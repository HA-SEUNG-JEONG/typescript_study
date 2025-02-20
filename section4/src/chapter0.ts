/**
 * 함수 타입 정의
 */

function func(a: number, b: number) {
    return a + b;
}

/**
 * 화살표 함수의 타입 정의
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name: string = "이름", age?: number) {
    // console.log(`${name} ${age + 10}`);
    // 매개변수가 undefined일 경우에는 덧셈 연산이 불가능하기 때문에 오류가 난다.
    if (typeof age === "number") {
        console.log(`${name} ${age + 10}`);
    }
    // 선택적 매개변수가 필수 매개변수보다 앞에 나오면 안됨
}
introduce("이름", 30);
introduce("이름");
introduce(undefined, 30);
introduce();

function getSum(...rest: number[]) {
    return rest.reduce((acc, current) => acc + current, 0);
}

console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
