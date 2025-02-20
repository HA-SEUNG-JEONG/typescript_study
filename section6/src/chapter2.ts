/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
    // 클래스 자체가 실제 타입으로도 활용될 수 있음
    // 필드

    // 생성자
    constructor(
        public name: string,
        protected age: number,
        private position: string
    ) {}

    work() {
        console.log("일함");
    }
}

const employee = new Employee("haseung", 31, "Developer");
// employee.age = 30;
console.log(employee);
