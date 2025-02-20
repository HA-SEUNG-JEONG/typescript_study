let user: { id?: number; name: string } = {
    id: 1,
    name: "haseung"
};

// object 타입 선언의 문제

// user.id; // 객체다라는 정보 외에는 아무런 정보가 없다고 판단하기 때문

// readonly
// let config: { readonly apiKey: string } = {
//     apiKey: "MY API KEY"
// };

// config.apiKey = "hacked";
