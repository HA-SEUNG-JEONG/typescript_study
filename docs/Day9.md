## Quiz1.

다음 요구사항을 만족하는 Pokemon 클래스를 완성하세요

다음 3개의 필드를 갖습니다.

-   name 필드는 String 타입이며 Public입니다.
-   skill 필드는 String 타입이며 Public 입니다.
-   type 필드는 String 타입이며 ReadOnly(읽기 전용)필드 입니다.
    다음 2개의 메서드를 갖습니다.
-   getName 메서드는 name 필드의 값을 반환합니다.
-   setSkill 메서드는 String 타입의 매개변수를 받아 skill 필드의 값을 업데이트 합니다.

https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6&ssl=26&ssc=2&pln=14&pc=1#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAAoD2A1gKYC2LAdlIBcFwBntgEqHAPp1RAImOBGQdqAOQbxgAtFBxQAzMkAa41EAiq4B2WiYDQawK1DgCabMAOjBQoARktReAQy4c9+xgGUALgCcAS14AcyhAAYXAUPHAF3HABy7mAFcAIwAbAIBjCItrWwAmRwBnNgDk5I9vfyDQyNiElPSoTKsbDUcfAE8AB3cDcsCQ8Oi4gCUOZwATAHleZLaACkBfccAGOqhAEAnASrGASgMGrOVVXBztKEAVLsAcQcMoU13bByhgjh8AOVd3M88nF48dQCQaikAMHsAGmuAS1XrlA8lB8g8vEUSidzr1KgMdIATzuQgAGewAYQxJANg9gBFRiEw0oGH4UQCjo4AHZqigA6lqAgpogYBgMCgKAQACK8QCAC80FACIAQNaggB2hwAftWZAAszEhk8jwUAZYDSyWc+XyzHY3D4UAA3s00nx8v54mkfCw-LMOklUmkPm4AFwGvrBAA0Frq1sKxWS9oqISdUD8ozGfBmUHaXW9jo2OuaAF8mbZ7k8XrMo81bAGfPE-PwfAALAL5SwuNwAblj8YhUMJsw9JQjlVTtlseYLllrpQAvATPWXbHG48yQKyACocA28wA3o4tAAG9gAZFxiAVAnAK9NFEALTOAGwXaMtACDjgB1VqBrQAjzYAdDqgGIXtEAA5NQQBSo+ZMHLGXreAaoB0AmxnGlc-EoF3eBwADuaqcDwvCzAARIAPKuAC5zgAgcxBfoQYAjD2UIAPz1UohUAQSsiwQRsZbvp+37xJYibPG4KaER+X4-m2VaepBgA5M+hVIAIT4WWQA

```typescript
class Pokemon {
    constructor(
        public name: string,
        public skill: string,
        readonly type: string
    ) {}

    getName() {
        return this.name;
    }

    setSkill(skill: string) {
        this.skill = skill;
    }
}
```
