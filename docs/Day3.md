# Day 3 Quiz

## Quiz 1.

---

다음 요구사항을 만족하는 4개의 타입을 정의하세요

Any 타입은 사용할 수 없습니다.
Nums 타입은 숫자만 담을 수 있는 배열 타입입니다.
Colors 타입은 문자열만 담을 수 있는 배열 타입입니다.
Coords 타입은 [숫자, 숫자] 형태의 배열만 허용하는 타입입니다.
Info 타입은 [숫자, 문자열] 형태의 배열만 허용하는 타입입니다.

```typescript
type Nums = never;
type Colors = never;
type Coords = never;
type Info = never;
// 위 4개의 타입을 각각 어떻게 구현해야 할까요?
```

https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKhCgAIUhtTAsC4CMnIF0o0DejgGOsAujlAVecB2WwH07JBE8cEZBwF1XAficA5BwFLGNJARUcAz2yQVAnBXpskBaZwDYLkQIBjgW9HAGuORAJGOANTsAANZEA1A4B92wBwTgH1HIgS1XAE02ATpoCEGYOHAAXAJ4AHAKaQAcgFcAtgGdIAXkgA7VwCNbACdYVABuCxt7AGEAewAbWKCPbzdzIIBLHwBzUIirO0g4pIATFLg-F0CggBpK6vDIwoBJHwAzWK84NMycuoDgxvBQCGg4bj4hNBYcQADewAZFwBSmicARcYFBQA1V7EhAEHHAHVXIQEqxwBHmwB0OyEBBycBECchADCGuDcATochAEVXGSEAx0cBWoYMAOhYOFJiPg5IpVIABycALl0TGoyBSQQAR44Aeceh0h4gFDxgzGaCmcAZFzWJLmSAAb0gAFEAI5OACG8Vh5IAHnYAMbmWEOWLmACCPkskAAvpA2kFYi5IAAiAACBVsAFoWQALOnxWw5WxuYBOcwZeJuCURcAs2I+NK+AbJABcjlc5VgAEZYQAmWEAZlhABZYQBWRrG03E42JK1FBJJO0SoK2EoS2ES7JRtWxyX+eJOWwSv0ms3G0pZGnmDXW4pBMpdWDuyC+iL+s1ZDrW1odcsSwAu41xABpryadAHYhrLICyaW4NeWoBTmbY2QAeTk8vmz22QAA+oeDHlXJbLq6bsQAfHuauOmazzNOqbT4ov3LD6sFQgej5AJ6fz9S6dO4uvYT0srlUI+x6TjOF4flubiwrAd61OaVSDIBz4nlOZ6gVeu6Qb+fSwQ0B7gI0QA

```typescript
type Nums = number[];
type Colors = string[];
type Coords = [number, number];
type Info = [string, number];
```

## Quiz 2.

---

다음 요구사항을 만족하는 Course 타입을 정의하세요
(이 타입은 마치 인프런에서 활용할 것 같군요?)

Any 타입은 사용할 수 없습니다.
Course 타입은 온라인 강의 정보를 포함하는 객체 타입을 정의합니다.
문자열을 저장하는 name 프로퍼티를 가져야 합니다.
숫자를 저장하는 price 프로퍼티를 가져야 합니다.
숫자를 저장하는 student_cnt 프로퍼티를 가져야 합니다.
문자열을 저장하는 author 프로퍼티를 가져야 합니다.
문자열 배열을 저장하는 related_courses 프로퍼티를 가져야 합니다.

```typescript
type Course = never;
// Course 타입을 어떻게 구현해야 할까요?
```

https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKhCgAIUhtTAsC4CMnIF0o0DejgGOsAujlAVecB2WwH07JBE8cEZBwF1XAficA5BwFLGNJARUcAz2yQVAnBXpskBaZwDYLkQIBjgW9HAGuORAJGOANTsAANZEA1A4B92wBwTgH1HIgS1XAE02ATpoCEGYOHAAXAJ4AHAKaQAwgHsArgCcAzvYC8kAN5QkAB2AIYAtrYAXB7mbgCWQQDmANyB1vEAxlFBLmEARrZuqZCQMS4AJrZB5gD6GdWROfmFxZAhLuYAFk5u0bEJKYFutgA2Iea25XWunrYeffFJsOgAvqngoBDQcNx8QmgsOIABvYAMi4ApTbuAIuMCgoAaq9iQgCDjgDqrkICVY4AjzYA6HZCAg5OAiBOQQAYQ1xboATocggBFVxiQQBjo4BWoYMADoWBwpMR8HJFKpAAOTgBcu3YAGhkCkggAjxwA84wTpDxAKHjBmM0FMcTC1h65n8kAAogBHFwhEbErkADzsGXMxIAck5zABBIKWSArSAAMzcTjCkAARAABKx2AC0GU6ApGVUSc2AHTiIw8WvWGScQRikEd7i8kUcMy8kF8ARKoQinq1r1pkEE2B+gAzxlSATi6LoABhdpgBKhwSAXs7AB1LWsJaUyUUgAFYCwAGUs5kplSrVOoNSAARmLAA4AJzltodbq9bWAF3GuIANNcgAB9IAB1BITNwjJxOcrZoajcaTabuuae2CBEohyBhiPRuMXQA1nYBDUazbc3gE+xyCAEFXAAYdGcAK6OkJ6vQAJ44AUHtTmcggGqZyCADxrABlxucSlQHM1jMfV7AAFTmcwHBCLwPF9OBAhFMVzAAHmlOUFQw5wVwAPgIts0NscUMI3bk+QFDCAGtbEsJwVS9FdiS1QNbC1IdtXSOIsi44ctUrKpanqcwBO1douh6CStWGMYJimN1ZjtAjAmI1DRTIzDeX5EY8O9WxYHY8JONA0p+iSIiSK08jdJo-DZmM3j+PMpoCjcazNPQjD7P0xyvGM4TqzErU3NyDyvJKUi7Oo-zDOMqTOzC4kYkWRIou5WydLigyV2M+TFyUwy7XMtKBmWIjwFQVIgA

```typescript
type Course = {
    name: string;
    price: number;
    student_cnt: number;
    author: string;
    related_courses: string[];
};
```

​

## Quiz 3.

---

다음 요구사항을 만족하는 User 타입을 구현하세요

Any 타입은 사용할 수 없습니다.
객체 타입이어야 합니다.
String 타입의 name 프로퍼티가 있어야 합니다.
String 타입의 email 프로퍼티가 있어야 합니다.
그 외의 String 타입의 동적 프로퍼티들도 추가할 수 있어야 합니다.

```typescript
type User = never;
// User 타입을 어떻게 구현해야 할까요?
```

https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKhCgAIUhtTAsC4CMnIF0o0DejgGOsAujlAVecB2WwH07JBE8cEZBwF1XAficA5BwFLGNJARUcAz2yQVAnBXpskBaZwDYLkQIBjgW9HAGuORAJGOANTsAANZEA1A4B92wBwTgH1HIgS1XAE02ATpoCEGYOHAAXAJ4AHAKaQAqgGdbAJ0gBeSAG8okAHYAhgC2tgBcTuauAJb+AOYA3H62wYHRADYRUbGJyQAeUYEAjFkx8UmQkLYFroEATKU5SQC+SeCgENBw3HxCaCw4gAG9gAyLgClNPYAi4wKCgBqr2JCAIOOAOquQgJVjgCPNgDodkICDk4CIE5CAGENcM4AnQ5CAIquMkIBjo4CtQwYAdCwcUsT4coqqgAOTgC5dPQAaGQKSCACPHADzj-2kPEAoeMGYzQUwAYwA9v5IpAAK4uVxhRw4zw+PxBUJ4gBEACkUQALfxkgHJVIZckAKxp-gAAtUQtZ0rZHqjgvT8oUSpAyeZbJFhZVqoUGuK4iiUQATYWtcBAA

위 문제는 인덱스 시그니쳐를 이용해서 더 간단하게 할 수도 있다.

```typescript
type User = {
    name: string;
    email: string;
    extra1: string;
    extra2: string;
};
```
