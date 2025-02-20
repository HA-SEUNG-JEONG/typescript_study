// 타입 단언의 규칙
/**
 * 타입 단언의 규칙
 * 값 as 단언
 * A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "yellow"
} as const;

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글",
    author: "이정환"
};

const len = post.author?.length;
