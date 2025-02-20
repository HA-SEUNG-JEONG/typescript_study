// enum
// 왜 사용함?
// Enum은 컴파일 해도 사라지지 않음

enum Role {
    ADMIN = 0,
    USER,
    GUEST
}

const user1 = {
    name: "이정환",
    role: Role.ADMIN
};

const user2 = {
    name: "이정환1",
    role: Role.USER
};

const user3 = {
    name: "이정환2",
    role: Role.GUEST
};

console.log(user1, user2, user3);
