/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */
var Employee = /** @class */ (function () {
    // 클래스 자체가 실제 타입으로도 활용될 수 있음
    // 필드
    // 생성자
    function Employee(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    Employee.prototype.work = function () {
        console.log("일함");
    };
    return Employee;
}());
var employee = new Employee("haseung", 31, "Developer");
// employee.age = 30;
console.log(employee);
