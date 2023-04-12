// operadores relacionales o de comparación son usados en condiciones que devuelven uno de dos valores posibles true/false
// <, <=, >, >=, ==, ===, !=, !==

// Ejemplos usando operadores relacionales

// let valorBoolean1 = 5 < 4; // false
// let valorBoolean2 = 5 > 4; // True
// let valorBoolean3 = 5 <= 4; // false
// let valorBoolean4 = 5 >= 4; // True
// let valorBoolean5 = 5 == 5; // true el operador igualdad == comparar por valor
// let valorBoolean6 = 5 != 5; // false el operador de distinto != comparar por valor

// console.log(valorBoolean1);
// console.log(valorBoolean2);
// console.log(valorBoolean3);
// console.log(valorBoolean4);
// console.log(valorBoolean5);
// console.log(valorBoolean6);

// Diferencias entre los operadores por valor(==, !=) y los operadores estrictos(===, !==)
// let valor1 = 5 == 5; // true porque se comparar por valor
// let valor2 = 5 === '5'; // false -> se compara por valor y por tipo de dato
// let valor3 = 5 != 5; // false -> se compara por valor
// let valor4 = 5 !== '5'; // true -> se compara por valor y tipo

// console.log('5 == 5 // ' + valor1);
// console.log("5 === '5' // " + valor2);
// console.log('5 != 5 // ' + valor3);
// console.log("5 !== '5' // " + valor4);

// typeof es un operador en JavaScript que se utiliza para determinar el tipo de datos de una variable o expresión, ejemplos:
// let variableNumerica = 5;
// let variableString = '5';
// let variableBoolean = variableNumerica === variableString; // false

// console.log(typeof variableNumerica);
// console.log(typeof variableString);
// console.log(typeof variableBoolean);

// Operadores lógicos (And, Or, Not) &&, ||, !
// operador And &&
// let bool1 = true && true; // true
// let bool2 = true && false; // false
// let bool3 = false && true; // false
// let bool4 = false && false; // false

// console.log('true && true = ' + bool1);
// console.log('true && false = ' + bool2);
// console.log('false && true = ' + bool3);
// console.log('false && false = ' + bool4);

// operador Or ||
// let bool5 = true || true; // true
// let bool6 = true || false; // true
// let bool7 = false || true; // true
// let bool8 = false || false; // false

// console.log('true || true = ' + bool5);
// console.log('true || false = ' + bool6);
// console.log('false || true = ' + bool7);
// console.log('false || false = ' + bool8);

// operador Not !
// let bool9 = !true; // false
// let bool10 = !false; // true

// console.log(bool9);
// console.log(bool10);
