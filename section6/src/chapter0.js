/**
 * 클래스
 */

let studentA = {
    name: "hs",
    grade: "A+",
    age: 27,
    study() {
        console.log("공부");
    },
    introduce() {
        console.log("소개");
    }
};

class Student {
    name;
    grade;
    age;
    //생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    study() {
        console.log("공부");
    }

    introduce() {
        console.log("소개");
    }
}

let studentB = new Student("hse2", "B-", 27);
console.log(studentB);
