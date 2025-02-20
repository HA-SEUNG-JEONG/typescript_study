// unknown

function unknowExam() {
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = undefined;
    let e: unknown = null;

    // 반대로는 안됨
    let unknowVar: unknown;
    // let num: number = unknowVar;
}

// never
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // never 타입은 모든 타입의 서브타입이다.

    let num: number = neverFunc() + 1;
    let str: string = neverFunc() + "hello";
    let bool: boolean = neverFunc() && true;
}

// void
function voidExam() {
    function voidFunc(): void {
        console.log("hello");
    }

    // undefined는 void의 서브타입
    let a: void = undefined;
}

// any
function anyExam() {
    let unknowVar: unknown;
    let anyVar: any;
    let undefinedVar = undefined;
    let neverVar: never;

    anyVar = unknowVar; // 다운캐스팅 가능
    undefinedVar = anyVar; // 다운캐스팅 가능
    // neverVar = anyVar; // 유일하게 다운캐스팅 안됨
}
