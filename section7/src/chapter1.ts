/**
 * 제네릭 응용
 */

function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap(1, "2");

/**
 * 두번째 응용
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let num = returnFirstValue([0, 1, 2, 3]);

let str = returnFirstValue([1, "b", "c"]); // 이렇게 타입이 섞여있을 때는 data의 타입을 T[]로 하지 않고 [T,...unknown[]]

/**
 * 세번째 응용
 */

function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("1234");
let var3 = getLength({ length: 10 });
