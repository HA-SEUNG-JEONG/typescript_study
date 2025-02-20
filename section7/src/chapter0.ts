/**
 * 제네릭
 */

function func<T>(value: T) {
    return value;
}

let str = func("aa");
str.toUpperCase();

let num = func(10.52);
num.toFixed(2);

let arr = func<[number, number, number]>([1, 2, 3]);
