/**
 * 인터페이스 확장
 */

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    name: "멍";
    isBark: boolean;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {
    isBark: boolean;
    isScratch: boolean;
}
