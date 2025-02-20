// enum
// 왜 사용함?
//
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var user1 = {
    name: "이정환",
    role: Role.ADMIN
};
var user2 = {
    name: "이정환1",
    role: Role.USER
};
var user3 = {
    name: "이정환2",
    role: Role.GUEST
};
console.log(user1, user2, user3);
