/**
 * 인터페이스
 */

interface Person {
    name: string;
    age: number;
    // 함수 오버로딩을 사용하고 싶은 경우에는
    // 함수 표현식이 아닌 호출 시그니처를 이용해야 함
}

const person: Person = {
    name: "Mark",
    age: 35
};
