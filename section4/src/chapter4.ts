/**
 * 사용자 정의 타입 가드
 */

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    // if ("isBark" in animal) {
    //     console.log(animal.name + "가 짖습니다.");
    // } else if ("isScratch" in animal) {
    //     console.log(animal.name + "가 긁습니다.");
    // }
    if (isDog(animal)) {
        animal; // 강아지
    } else if (isCat(animal)) {
        animal; // 고양이
    } else {
        animal;
    }
}

// 타입이 많아지면 커스텀 타입 가드 대신 in 연산자를 사용하는 것이 좋음
// 또는 서로소 유니온을 사용하는 것도 좋음
