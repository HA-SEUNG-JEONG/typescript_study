/**
 * 제네릭 클래스
 */

class List<T> {
    constructor(private list: T[]) {}

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

// 인스턴스 생성
const numberList = new List([1, 2, 3, "4", true]);
numberList.push(4);
numberList.push(5);
numberList.pop();
numberList.print();
