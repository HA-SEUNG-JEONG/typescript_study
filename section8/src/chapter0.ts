/**
 * 인덱스드 엑세스 타입
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

function printAuthorInfo(author: Post["author"]) {
    // 여기서 'author'는 값이 아니라 타입임 주의!!
    console.log(`${author.name} - ${author.id}`);
}

const post: PostList[number] = {
    title: "게시글 제목",
    author: {
        id: 1,
        name: "홍길동",
        age: 27
    },
    content: "게시글 내용"
};

type Tuple = [number, string, boolean];

type Tuple0 = Tuple[0];
type Tuple1 = Tuple[1];
type Tuple2 = Tuple[2];

type TupleNumber = Tuple[number]; // 최적의 공통 타입?
