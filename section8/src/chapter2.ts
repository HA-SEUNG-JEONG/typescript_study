/**
 * 맵드 타입
 * 맵드 타입은 인터페이스에서는 쓸 수 없음
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): Readonly<User> {
    return {
        id: 1,
        name: "홍길동",
        age: 27
    };
}

const user = fetchUser();

type PartialUser = {
    [key in "name" | "id" | "age"]?: User[key];
};

function updateUser(user: PartialUser) {
    // 수정 기능
}

updateUser({
    age: 28
    // address: "서울시"
});
