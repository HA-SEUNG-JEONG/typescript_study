## - Unknown

변수나 함수의 매개변수 타입을 바로 정의하기가 어려울 때, any보다는 안전한 타입인 unknown으로 정의하여 사용한다.

```typescript
let a: unknown = 1;
let b: unknow = false;
```

이렇게 변수의 타입을 unknown으로 정의하면 이 변수에 string, number, boolean 등등 어떤 타입의 값이라도 할당이 가능하다. 즉, 업캐스팅이 가능하다. 단, unknown 타입의 값을 string, number 등의 타입으로 할당하는, 즉 다운캐스팅은 불가능하다.

```typescript
let unknownValue: unknown;
let num: number = unknownValue; // 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.
```

## - Never

never는 모든 타입의 서브타입이며, 함수 등에서 쓰일 때 절대 값을 반환하지 않는다는 것을 나타낸다. 예외를 발생시켜야 하거나 무한루프를 돌 때 등에 주로 쓰인다.

```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

유니온 타입을 만들때 string | number로 만들면 이 두 타입 간에는 교집합이 전혀 없기 때문에 해당 타입은 never로 추론이 된다.

## - Void

never와 비슷하게 함수에서 값을 반환하지 않지만 never와는 달리 함수 실행이 정상적으로 종료된다.

## - Any

타입스크립트의 기능을 무력화시키는 타입이다. 정말 특수한 상황이 아니면 any 타입은 지양하는 게 좋다.

단, any 타입의 값은 never 타입의 값에도 할당이 되지 않는다.(다운캐스팅 불가)
