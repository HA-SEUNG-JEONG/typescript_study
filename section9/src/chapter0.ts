/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
    a: number;
};

type ObjB = {
    a: number;
    b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<boolean>;

type StringNumberSwitch2<T> = T extends string ? string : undefined;

// 함수 오버 로딩을 사용하여 타입 검사 수행, 오버로드된 함수의 시그니쳐를 따라감
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: unknown) {
    return typeof text === "string" ? text.replaceAll(" ", "") : undefined;
}

let result = removeSpaces("hi i'm haseung");
result.toUpperCase();

let result2 = removeSpaces(undefined);
