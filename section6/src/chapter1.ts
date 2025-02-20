/**
 *
 * 타입스크립트의 클래스
 */

const employee = {
    name: "has",
    age: 29,
    position: "Developer",
    work() {
        console.log("일함");
    }
};

class Employee {
    // 클래스 자체가 실제 타입으로도 활용될 수 있음
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log("일함");
    }
}

const employeeB = new Employee("s", 33, "developer");
console.log(employeeB);
