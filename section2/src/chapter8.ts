/**
 *  대수 타입
 * 여러 개의 타입을 합성해서 새롭게 만들어 낸 타입
 * 합집합 타입과 교집합 타입이 존재
 */

/**
 * 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = true;
a = "hello";

let arr: (number | string | boolean)[] = [1, "heelo", true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: ""
};

let union2: Union1 = {
    name: "",
    language: ""
};

let union3: Union1 = {
    name: "",
    language: "",
    color: ""
};

let union4 = {
    name: ""
};

/**
 * 교집합 - Intersection 타입
 */

let variable: number & string;

let intersection: Dog & Person = {
    name: "",
    color: "",
    language: ""
};
