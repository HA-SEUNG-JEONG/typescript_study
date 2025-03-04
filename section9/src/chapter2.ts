/**
 * infer
 */

type FuncA = () => string;
type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;
// 위 코드는 추론된 타입이 never 타입이 되는 이유는 함수의 반환 타입이 명확하지 않기 때문이다.
// 따라서 추론된 타입이 never 타입이 되는 것이다.

// infer 이용
type ReturnType<T> = T extends () => infer R ? R : never;
// R은 무슨 타입? => 함수의 반환 타입
type A = ReturnType<FuncA>; // string 타입
type B = ReturnType<FuncB>;
type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer U> ? U : never;

type PromiseA = PromiseUnpack<Promise<string>>; // string을 기대
type PromiseB = PromiseUnpack<Promise<number>>; // number를 기대
