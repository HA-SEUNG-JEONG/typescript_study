## Quiz1.

---

https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAGFwoeNUBdNgHaOAi41IC7jglWOAuq1AA4CmATgM4D2AdlIAM9gGEOALo1IAk+qIFwawC0zgH06ogA1XAn02ANVcAcg4BSxsAApAMeuAOpYB0UQBCzgH5qogEFXAOh2AfZcAPS1EABNYBqBqIEoewAOTkwCDjgHVWoOfAQCUYCDAYGAALgCe9FAACoysHAC8UADeYFBQbACGALZ0AFxQTKEMAJZsAOYA3GlQmeX5GQCu2QBGjNUAvtVgADZ0obRx7AWxzOxQSckdtUwxQ2zVQA

```typescript
type Person = {
    name: string;
    age: number;
};

let person: Person = {} as Person;
```

## Quiz2.

---

https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAGFwoeNUBdNgHaOAi41IC7jglWOAuq1IBargGENSAca4DmzgC6OA4g4BrjUgJGOAanYB9OqJUANNYA1VwByDgFLGwACkAx64A6lgHRQAxgHsAdgGcALvgIBKMCGBgwAGwCmBgG4BDSwFdrUALxQAjAAYoDnXVtfQBuMABzAEs7awBZa19ZRxdrIzCwUCgIABVrfTQoQBvRwAY6wADewAZFwBSmqEBUCcBXppJAFpnAGwWxYqhAEHHAHVWockAR5sAdDqg6GrFAAcmoQClRwFahwAmmwBOmqDMwADNnLTU9SO0oKJj4xOTXAC5vHyMoAG8wKCgAJ1tnO60oI+swgF8wIA

```typescript
let value = 10 as const;
giveMe10(value);
```

## Quiz3.

---

```typescript
type Boss = {
    car: string;
    type: "Boss";
};

type Employee = {
    salary: number;
    type: "Employee";
};

type CompanyMember = Employee | Boss;
```
