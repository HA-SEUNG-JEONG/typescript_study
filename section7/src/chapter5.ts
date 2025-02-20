/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 3000);
});

promise.then((response) => {
    console.log(response * 10);
});

promise.catch((err) => {
    if (typeof err === "string") {
        console.log(err.toUpperCase());
    }
});

/**
 * 프로미스를 반환하는 함수의 타입 정의
 */

interface Post {
    id: number;
    title: string;
    content: string;
}

function fecthPost() {
    return new Promise<Post>((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "title",
                content: "content"
            });
        }, 1000);
    });
}
// Promise에 Post 타입을 주는 것보다 함수가 반환하는 반환값의 타입을 Promise<Post>로 명시

const postRequest = fecthPost();

postRequest.then((post) => {
    post.id;
});
