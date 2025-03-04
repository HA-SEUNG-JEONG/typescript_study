## Quiz1.

https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6&ssl=23&ssc=2&pln=10&pc=1#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquAjzYLodUA5gKYAuAymwDa9sATgGcAYoID2AWwAKkgCYBXAMYdhUQBargDCHAGuNRAJ53JAAz1bAAmNRAGD2ANNcBINVEADC4FDxioFQJnbUAcg3jABaVpx5+ITFJWQUVNU0tQBSmg2MtQB0OqEBsHsABcag5CSVVKEAGHsAX0YTAAN7ABkWAGihhPgFBKEBcGsAWmcooQBTZwBzZwBdVqEAJgYTAFrG8wssrWljtR0AJpswAOl9hmwpAUK7AHaHAQAnAHnGkwBJBlw7AH1GoQEtVqagACkAPccBHZsASocAdlqhARdGPa4dHAEowEGAwMFAoCAAiooAJYALzQUEAIqOADPa9IAVedugB9OqBaFyePBQL4-YEAOw4QgAZgBDZRsDLhHIAbzAUCgwPkAC4oDjFFIAEZCADcNOZRKkbCZwg4glxLG5tIADiLSUyWeyuTyqkFBEzqbTafTZayOYJxeqcXyBZVhaK9bTlNIJUScQBPQUmnFinkAX25zp+BMUONUwIkOP83GqwXE0ky2TUpylWQiwiZYYiEDQbwZ8dUEAA5Eqaum0ImoGqoIJOIpBP6o+HhNMpESJadIxSOG8oABeAB8UHLEWmWaEbzdPz+EAAKmwhRDADejgAY60qxFyAV6aKA1ADYLtEnUEAIOOAHVWoIBKsfoSVRtEAA5NQQBSo4BWoZOWOBUglEkEHHzUAAogBHRRE3gVZ8ADwlbByZ0oAJUIoAAIgAAQ4G1-x8ZQAAtPwER1R2ARQOGBXhhDA7kwGg-8oBHIUAGEiSqdRm3+Hlf3-VQAB43w-Xg6JkIlBENfERDo-C2AkAkA0CGoQlDBthFbCAAAY0AqVMOETVtWzKai-wAjgGPfT86IAJWLUshxgthuIMviBKDEQQzCaNVDEmSGwgMCe0EMDczQBSwDQbkgA

```ts
interface Product {
    id: number;
    name: string;
    price: number;
    seller: {
        id: number;
        name: string;
        company: string;
    };
}

function getSellersFromProducts(products: Product[]): Product["seller"][] {
    return products.map((product) => product.seller);
}
```

## Quiz2.

https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6&ssl=31&ssc=2&pln=10&pc=1#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUA4TgLjWAi41IDOdgjhOAaq4ClNUAzMoBrjUgAwuCh4yYCmzgADWA6HVIFQJxpUAcg4BSxsAFooABQCGAJwAuASzkAbGQoD2AEwCuAYyWs2gAXHZOg8dPNAFV2ADlqiAQVd6AfZcAPS4B9OqJiiACQcBdhcBACZd3D35AFB7AHvrTNkAJpswAOikoACUAUzldbQA7dQBPLT0jE3YLYusytnsnV08fP0BfccAGOqhAEAnASrGwzyjY9gTk1MzsvML5ZTVNK1LTCpmbdlqe718AkIAaKFaO7vqIqBi4xJSQYDAwUCgIAEV9FQAvNChAEVHADPbmQBV5wB2Wn0AMIYEojEUDOYBUuSUGQUADM5IYMpYSjYAN5gKBQFS6ABcUFy+gAtgAjKEAbjRuLk+IyOIAzkoFOCAOZk9EABwZ8JxeKJpPJNIy6nUUJxqPR6MxXIJxIULLFuUp1KgdIZuWZ5PRhm0+NZclyBVp9KZsoAvmTjRclAVWQiJqoNJVZgBeKCi64AawyBQxuSgHoK2mhiKqaAA-FiHcYIH60GayWBLdb0lkcvkigsTM7XQpk2MvVHPd7fZ6A0HSmhw+n8wUMKaLVaESMU+NFHbpkiMy7ydnRqn3QXwUX-YGI0pQxX21WY2BzZcQNcACoZOnPQA3oy1AAG9gAZF2gCQCvTSRAC0zgBsFyhtQAg44AdVagnUAI838AGUQADk1BAFKjgFahxIg84qbXaZQuqAAFEAEd9A0LZAIAD2tYwtgAOW0JQQLA9QoGNKBoR0fEoAAIgAAQTDJJEMAALDQhVVJdgH0VR1BpHC40IqBFzpABhOR+RpKBnQgckoJgpQAB5kI0QTbSmEctnE0SRwAPnkjY+OgjJjGE0DRMbXNJKTHtCjE9N5NkxT0X4lShJE9RBM01NpLbKotmsvTbP09tDNksApyAA

```ts
interface Product {
    id: number;
    name: string;
    price: number;
    seller: {
        id: number;
        name: string;
        company: string;
    };
}

type PartialProduct = {
    [key in keyof Product]?: Product[key];
};

type ReadonlyProduct = {
    readonly [key in keyof Product]: Product[key];
};

type ReadonlyPartialProduct = {
    readonly [key in keyof Product]?: Product[key];
};
```

## Quiz3.

https://www.typescriptlang.org/play/?ts=5.1.6&ssl=7&ssc=3&pln=8&pc=1#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUA4TgLjWAi41IDOdgjhOAaq4ClNUAygMYD2ATgKZSADC4KHjJgNrWAQNcqAOQcApY2AC09Zuy7dAAuNRACBOAMIcA+nVEAZDZ0AtDYAY6qIBBxwDqrsQAnjgF9G5gHnHAOh1QA5ABIA3gAZAAb2AGRagBGN4AydYADk4Aa41CAqBMqAL4Srp4+-sFhkVEOgKhrgLtDJIBoNYCtQ4ATTZgOYFBQUmwAHgCUUABEvhJutQA0dQDMEgBMLXVuEgAstVCALuOAD+1QaYA7C2EwlnLchQB0JWVQlTWALaOACU2AvVNhqoALo4AjzVCACi1QZoA1nSq0gDRjUCpQgGOjBZjLIMBgYKBQEACKAFcAJYALzQUEAIqOADPawoAVecAOy0aFThESiKAfMAAFwAngAHDgAOQBAFsAEZsFgAJQAhgA7ADmHAAvFAAAZxKAAHz8XKgnV5bV5-V5AFZeQA2XkAdl5AA5eQBOKKsrF4jiMVjMtmuIlkik0hlsGI6knkql0xnKgDcXx+EAAKmwAM6Y8GAG9G9N5aOFAK9NJEALTOAGwXKAYTFBAJVjR3syMoQSggClR17oz5A4m41iYqAuKAAUQAjgDqQAbVo5ir4hiY0vltiVsuYti0gAmTurFcxADFi06OFEoAAzFhMYl1AACOPxEgYAAti0XG4yncAAZigUWnbUbWBmLSXVBMQxfFAWfUFY1N9umLvMwf+SeRRJfL4Lzu9wfBSez8+ba+bwxhSenQSLKL5Xm+DBiieUpdBeqr4lAjougAwtSPZOsevwrGW7ZduubAADzYbWmL1o2Lb4Rq7CtBObBMP2+6HgAfIxzRYTWla4T2hHsSRFQNs2ToUTIbDUWqdEMZ0zGsaURGVtx7akQJQmaqJ+Lie+Ulse28nEYp5GUSJ+5ifRB79JpMk8TpdZ8WRgkGaptEmRBzFgGgNpAA

```ts
type NumberRange = `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;
type Score = `${NumberRange}-${NumberRange}`;
```
