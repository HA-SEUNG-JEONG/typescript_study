/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
 * 1. 반환값의 타입이 호환되는지?
 * 2. 매개변수의 타입이 호환되는지?
 */

// 기준 1. 반환값의 타입이 호환되는지?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // 허용 안됨

// 기준 2. 매개변수의 타입이 호환되는지?
// 2-1 매개변수의 개수가 같은 경우
type C = (a: number) => void;
type D = (a: 10) => void;

let c: C = a => {};
let d: D = a => {};

c = d; // 슈퍼 타입 <= 서브 타입(업캐스팅이 안됨)
d = c; // 서브 타입 <= 슈퍼 타입

type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name, dog.color);
};

animalFunc = dogFunc; // 슈퍼타입 <= 서브타입
dogFunc = animalFunc; // 서브타입 <= 슈퍼타입

// 2-2 매개변수의 개수가 다른 경우
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = a => {};

func1 = func2; // 허용
func2 = func1; // 허용 안됨
