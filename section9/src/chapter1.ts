/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // string | number 타입으로 됨(기대값 : number)

let d: StringNumberSwitch<boolean | number | string>;

/**
 * 실용 예제
 */

// 특정 타입만 제거

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | number | boolean, string>;

// 특정 타입만 추출
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | number | boolean, string>;

type C = Extract<string | number | boolean, number>;
