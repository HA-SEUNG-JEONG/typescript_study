/**
 * map
 */

const arr = [1, 2, 3];
const newArr = arr.map((item) => item * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
}

const a = map(arr, (it) => it * 2);
map(["a", "b", "c"], (it) => it.toUpperCase());
map([1, 2, 3], (it) => it > 2);
map(
    [
        { name: "a", age: 1 },
        { name: "b", age: 2 }
    ],
    (it) => it.name
);

/**
 * forEach
 */

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

const b = forEach(arr, (it) => console.log(it));
const c = forEach(["a", "b", "c"], (it) => it.toUpperCase());
const cd = forEach(["s"], (it) => parseInt(it));
