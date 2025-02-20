/**
 *
 * 타입스크립트의 클래스
 */
var employee = {
    name: "has",
    age: 29,
    position: "Developer",
    work: function () {
        console.log("일함");
    }
};
var Employee = /** @class */ (function () {
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
var employeeB = new Employee("s", 33, "developer");
console.log(employeeB);
