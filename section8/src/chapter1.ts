/**
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

// key의 타입을 유니온 타입으로도 작성할 수 있지만 상당히 비효율적
// 더군다나 인터페이스 내 프로퍼티가 수정되거나 타입이 달라지는 경우도 있음
// keyof <타입>은 모든 타입을 유니온 타입으로 만듦

function getPropertyKey(person: Person, key: keyof Person) {
    // key의 타입을 keyof typeof person으로 작성할 수도 있음
    return person[key];
}

const person: Person = {
    name: "haseung",
    age: 26
};

getPropertyKey(person, "name");
