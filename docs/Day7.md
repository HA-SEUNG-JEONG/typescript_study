## Quiz1

다음 요구사항을 만족하도록 introduce 함수의 매개변수의 타입을 정의하세요

name 매개변수는 String 타입이며, "이정환" 이라는 기본값이 설정됩니다.
tall 매개변수는 Number 타입이며, 선택적 매개변수 입니다.

https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquAjzYLodUAlgHYAuATgPYAmAVwDGAUyiALVcAYQ4A1xqIBPO5IAGemVEADC4FDxioFQJ6bUAcg3jABaKGwCGAWzELlgFKaoAZW7sA5mvWAXccAOXQBooAIg8tQA01-ygPQB92+0AGOsAPnsAkGo8oQBJBrUBKFsAJpswAOmMoDjMAG0L5JUl7ADkBCwAjES53bz9AAkHAXYXAQAnS5Sh1LNyQYDAwUCgIAEUBFgAvNChAEVHADPbZQBV5wB2WwB9OqEARMcBGQcAXVahAEjHADU7NuEAHGv08KAGwADMBNiEOFh42Vk5eQVEACnMrAD8AC4AM7ONguPwFYrAtjVOpcACUUAA3mAoKw7lAfgBCaGFZFojEYoRvEE8QoibKFHguH4AA0AEqOAVUarlAACQo-4iAC+vUwOPpiIA3OioDyoCJCiCxETiaS2OTKdTaQyWWzOdy+X0oIAShfsnPx2swQtFGJ5YAtwxAowAKiIwbNADej0UAAb2ABkX7FpAK9NFEALTOAGwXaNEoIAQccAOqtQQCVY-RADodUEkWlogAHJqCAKVHAK1DWRug3Y3H4whEPxFYDzX0LP0CIX8JbLBd+VdCfgAjAB2ACsJaAA

```typescript
function introduce(name?: string, tall?: number) {
    if (!tall) {
        console.log(`안녕하세요 ${name}입니다!`);
    } else {
        console.log(`안녕하세요 ${name}입니다. 키는 ${tall}입니다`);
    }
}
```

## Quiz2

https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAtVwGENUAMLgoeNSA6K4CBrgu0OAi41IC7jglWOAuq1ICdNgMuNSApY4Da1gNQOC2q9UAznYEcJwBqrgFKb8RAGIBXAHYBjQD6dUQKgTgDXHRgDkGOYALRQATMg1RAJ53JAAz24AhoAExqACNVgbB7ArUOAJpuYA6Axes7SQA5WQBbJwBTACcAGmdJAGUAF2iAS3kAcykCbz9DQAwewA01wCQaqUABcecAeyqAG0jbeShc3zAQYDAwUCgIAEVZNIAvNChAEVHADPazQBV5wB2W1UARMcBGQaZAEjHADU7VOEAHGp0OKHawZIBPAAdIqDklKABeKAAKWwAueXCouKdHgGdUjMyAShuAD5qnUGvIANydboQAAqkW+I0AN6OABjrAAG9gAZFyRqQCvTdRAC0zgBsF0TIqCAEHHADqrUDogBHmwA6HVBsGpRIAByaggClRrzMfYdRRVeTfKAAMwUikeFxFN3utniTgB12BAG8wFAoLz+aCfLUqpkHj5klVpGkAB6RAAmdz+f0hKrVnw1Wp1Tj1VQAMlVFLZ6m6AO4xADCtk+kQtVuVUGikWSsmiTVSskikIAvpCwGkwicqtFklAFVAAKIAR1knvieaNZ0UyXiwSqyQAgvIjlBE0LolUwlAAEQAAWOZ30igAFp76ll4cBZMk0rVPp2U33znDvgGg59JRAw2WK8kADw1+uNneXRSAwGxTflyKVneF4u1HcABVs0VsYUjMU+R5FgIgAAY0PELwRDEp7niqW5Xrut6eo+z6vu+0SfseP4AIwAVA3zpFkp5gGgkJAA

```typescript
type Func = (a: number, b: string) => boolean;
```
