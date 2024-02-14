const {soma,menos,div,mult} = require ('./index.js');

test ('soma de 6+4 é igual a 10', () => {
    expect (soma(4,6)).toBe(10);
});

test ('subtracao de 10-4 é igual a 6', () => {
    expect (menos(10,4)).toBe(6);
});

test ('Divisao de 6/3 é igual a 2', () => {
    expect (div(6,3)).toBe(2);
});

test ('Multiplicacao de 12*12 é igual a 144', () => {
    expect (mult(12,12)).toBe(144);
});