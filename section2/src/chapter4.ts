// 타입 ailas

type User = {
    name: string;
    age: number;
    location: string;
    birth: string;
    bio: string;
};

let user: User = {
    name: "kim",
    birth: "1995.1.2",
    bio: "hi",
    location: "seoul",
    age: 30
};

type CountryCodes = {
    [key: string]: string;
};

// 인덱스 시그니처
let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedStates: "us",
    UnitedKingdom: "uk"
};

// 만일 서비스가 점점 커져서 프로퍼티를 일일이 다 입력해야 한다면...? 상당히 불편하다
// key와 value의 타입을 이용해서 인덱스 시그니처를 만듦

type CountryNumberCodes = {
    [key: string]: number; // 주의, 이 규칙을 위반하지만 않으면 모든 객체를 허용함
    // 이 부분에 추가 프로퍼티를 사용하고자 했을 때, 인덱스 시그니처 안에서 사용하고 있는 값의 타입과 일치하거나 호환되어야 함
    Korea: string;
};

let countryNumberCodes: CountryNumberCodes = {
    Korea: "ko"
};

// 주의할 점
