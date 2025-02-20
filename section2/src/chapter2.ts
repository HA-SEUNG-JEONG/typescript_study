// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["Hello", "im"];

let boolArr: boolean[] = [true, false];

// 배열에 들어가는 요소들의 타입이 다양하다면?
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열 타입 정의
let doubleArr: (number | number[])[][] = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, 3, 4, 5]]
];

// 튜플
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// tup1=[1,'']

tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

// 배열 메소드를 사용할 때는 튜플의 길이 제한을 두지는 않음, 주의할 것
// 언제 유용하게 사용?

const users: [string, number][] = [
    ["a", 1],
    ["b", 2],
    ["c", 3]
    // [4, "d"] // 타입 선언을 통해 잘못된 부분 감지 가능
];
