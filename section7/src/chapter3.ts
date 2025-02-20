/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keypair: KeyPair<string, number> = {
    key: "key",
    value: 10
};

let keypair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["a", "b", "c"]
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    key: -1231
};

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: "value"
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V;
};
let stringMap2: Map2<string> = {
    key: "value"
};

/**
 * 제네릭 인터페이스 활용 예시
 * 유저 구분 : 학생 / 개발자
 */

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

// function goToSchool(user: User) {
//     if (user.profile.type !== "student") {
//         console.log("no");
//         return;
//     }
//     const school = user.profile.school;
//     console.log(`${school}로 등교 완`);
// }

function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

// 제네릭을 사용했을 때는 goToSchool 함수에서 user.profile.type !== 'student' 인지 체크할 필요가 없음
const developerUser: User<Developer> = {
    name: "하승",
    profile: {
        type: "developer",
        skill: "typescript"
    }
};

goToSchool(developerUser);

const studentUser: User<Student> = {
    name: "haseung",
    profile: {
        type: "student",
        school: "seoul"
    }
};
