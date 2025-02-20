/**
 * 타입 좁히기
 */
type Person = {
    name: string;
    age: string;
};

function func(value: string | number | Date | null | Person) {
    if (typeof value === "string") {
        value.toUpperCase();
    } else if (typeof value === "number") {
        value.toFixed(1);
    } else if (value instanceof Date) {
        value.getTime();
    }
    // else if (value instanceof Person) {
    //     // instanceof 연산자는 타입이 들어오면 안됨
    // }
    // in 연산자 안에는 undefined가 들어오면 안됨
    else if (value && "age" in value) {
    }
}

func("123");
func(1);

class A {
    aaa() {}
}

class B {
    bbb() {}
}

function a(a: A | B) {
    if (a instanceof A) {
        a.aaa();
    }
}
