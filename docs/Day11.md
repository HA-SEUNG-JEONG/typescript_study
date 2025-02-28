## Quiz1.

https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAMzKAa41IB7jgDIuAZy4C7jgEqHAPp1RAqBOtagDkG8YAIwA6KAGEA9gDsALgFNNUAJKatAJwBmAQwDGWsFCgBaKGrMBbLQAoAyhqMBLNQHMoQAGFwFDxgEoAGig-ExU3ABVg8KhAEFXAHQ7AH2XAB6WRQDQawFahwAmmzHkwACZFADUfABMtFX1DU0trWwcABwAbMwBPeJ9XNwA5AFdnACNjJLDUzJyoAuLFMCZFACEVFQBrRu1mqxt7KHazfy1RieNhscmjadnsvKKSsBBgMDBQKAgARRGfABeaCggBFRwAZ7exACrzgB2WkSADCHRFI8FA3h8-HtzFYoNU6g0AN6HLq9fquABcahuxgA3GAAL5opqYrRQDbbKAE2wnM4XW7kylGGn0sDo4xM5TqbSaAA88QAfOzDk4yQBnbx+fw02wxFSk+KCj5fCDxLSq4GAG9HAAx1gADeriMUSAV6aKIAWmcANgu0C1QQAg44AdVaggEqxwAjzWkoAjaIAByaggClR54o94mEZqCwaHzqKAAdzMGgsAAscfU3BYJToNKTxYZpXmVLKZhyoIW1MqVJ0tPJOip-G4AAYAEjx9clGnk2vkRL6Ay0tMAO0OAEBr2IBUGtYIkngFqZwAWq52wvqwPHE8nU0YtGYaqytgWi5pS6pyxopSfqwrbPXG83W+2u73+8Wh2pYiPTud+VpQAY2vYQBRGYoQBfcewDctwzLNc1qfNayVLRSwAIl9EIoBdC1g0ADPHAB92wBOLsYUIBBdQBezsADqW0IiQ5tVLWtOW6McySgWQAAZ5AAVjo2xaTo2lNw+A8jxPNxkJcVCoAwqAsJw-DiMYQAazsAQ1GaL46Ifx1B9bGOf8eWMUsAHYOI4zSBLpYSgA

```typescript
interface Video {
    playTime: number;
}

interface Book {
    pageNumber: number;
}

interface Content<T> {
    name: string;
    info: T;
}
```

## Quiz2.

https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0wHMCmAXAwgPYC2x2AdrgM5SAWq4BhDgGuNSCAE4BATgOqtSAYPYBprgSDVRAAwuBQ8cAi41ECoE80Aaq4A5BwCljYALRQcBEmUo0GgFKaogG9HAN+3JmRUhVzCRUQLg1gFpnAPp1RAL037ADD2AX0YmARPsCbzYAMdSyAPOOAOh08vDL6DCKAE02AJ00AdCoRgqKALuNQAAoATiQAllTYADwAruQA1uSEAO7kAHyZgCKjgDNNUIABE1CAKs1SgKprXKJhUIAps4AGHYAYLYAxNVAyBoAjzVKAr01DgB7jkoCWqwnJIMBgYKBQEACKpfkAXmhQTYAZ7cyAKvOAOy3O9JLyClA7YPmU2DkAZgBDADG2Cg5i0VgA3mAoFB8gATABcUHIpWIACNfgBuGFQAGlXAAC0IOWRVFwOW+mBxsKBhB+lDJFKpOIAvns-uUgbh8vS1HhwZYqAAKACUiNyBSKxUFlAgaHqUGhsJyeFKOXIKOwNWyeWIhWwwuFqqohAANgA3bCiqAAXkVythUCKuAAKvkyIQCUabfalbinVATearcKIAHA-7I5GEciAIwAGgj0fxRJJyIAROlJLwoAAyKCAATrABVrgAk+jNJ6OBukM3CZjg2ABiAFEoIAZGcADZ2AAcmAIRQQAiY4BUGsAMnVdqCAFTX0oBQZZ7FeTTtZlcjaFFNIXCagACYAAy71e41n79n7ECHV3YcmXAwBQABvYAGRf0kkWEnsgBsFmQBKCAEHGuIBKsbm4QvDIY6AFKjgCtQwkHy7B6AAOJJQlAzYAI6lACZobs2AAeMHYNyG4AHKELgyGoWaUCslAfx6lAGYAAK4AAnjhyhAoSaFmhQOBUMABL5GaVAZjiYCMThUDnuS+AAkUNC2ocuJYTh3LFIRxEoWhxQAEpqhqrpMSUInYIQfz8hoFjaPUG6Svq0oAuQDH1A5S4KbhuDKURJHqVpuDquQuk4cUBlGSZsrUBZupSiU5RVLUDSOfJ2EuW5qmkZp2m+XpAV6UF6ghVQYVWQaxTkNgVo5A5FnxYprkeWaqXeTpGWBcZOWaEK+V6oVIXyuVYBoDiQA

```typescript
function getComments(): Promise<Comment[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    author: "이정환 & 김효빈",
                    content: "한입 FE 챌린지! 완강까지 화이팅!"
                }
            ]);
        }, 2000);
    });
}
```
