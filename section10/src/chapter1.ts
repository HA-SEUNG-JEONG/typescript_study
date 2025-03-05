/**
 * Partial
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Partial<T> = {
    [P in keyof T]?: T[P];
};

const draft: Partial<Post> = {
    title: "제목",
    content: "내용"
};

/**
 * Required
 */

type Required<T> = {
    [P in keyof T]-?: T[P];
};

const withThumbnail: Required<Post> = {
    title: "제목",
    tags: ["1", "2"],
    content: "내용",
    thumbnailURL: "https://..."
};

/**
 * Readonly
 */

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

const readonlyPost: Readonly<Post> = {
    title: "제목",
    tags: ["1", "2"],
    content: "내용",
    thumbnailURL: "https://..."
};

// readonlyPost.title = "제목 변경";

/**
 * Pick
 */
