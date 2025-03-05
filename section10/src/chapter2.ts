/**
 * Pick
 * 객체 타입으로부터 특정 프로퍼티만 골라냄
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

const legacyPost: Pick<Post, "title" | "content"> = {
    title: "옛날 글",
    content: "옛날 내용"
};

/**
 * Omit
 * 객체 타입으로부터 특정 프로퍼티를 제거
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const modernPost: Omit<Post, "title"> = {
    tags: ["1", "2"],
    content: "최신 내용",
    thumbnailURL: ""
};

/**
 * Record
 */

type ThumbnailLegacy = {
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
};

type Record<K extends string | number | symbol, V> = {
    [P in K]: V;
};

type Thumbnail = Record<
    "large" | "medium" | "small",
    {
        url: string;
        size: number;
    }
>;
