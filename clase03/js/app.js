// Ejemplos de funciones
// function solicitarNombre() {
// 	let nombreIngresado = prompt('Ingresar nombre');
// 	alert('El nombre ingresado es ' + nombreIngresado);
// }

// for (let i = 0; i < 5; i++) {
// 	solicitarNombre();
// }

// Ejemplo: Sumar y mostrar
// Declaración de variable para guardar el resultado de la suma
// let resultado = 0;

// Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
// 	resultado = primerNumero + segundoNumero;
// }

//Función que muestra resultado por consola
// function mostrar(mensaje) {
//     console.log(mensaje);
// }

//Llamamos primero a sumar y luego a mostrar
// sumar(6, 3);
// mostrar(resultado);

// uso del return
// function sumar(primerNumero, segundoNumero) {
// 	return primerNumero + segundoNumero;
// }

// let resultado2 = sumar(5, 10);
// mostrar(resultado2);

// function calculadora
// function calculadora(primerNumero, segundoNumero, operacion) {
// 	switch (operacion) {
// 		case '+':
// 			return primerNumero + segundoNumero;
// 		case '-':
// 			return primerNumero - segundoNumero;
// 		case '*':
// 			return primerNumero * segundoNumero;
// 		case '/':
// 			return primerNumero / segundoNumero;
// 		default:
// 			return 0;
// 	}
// }

// let resultado3;

// resultado3 = calculadora(5, 5, '*');
// mostrar(resultado3);

// En este ejemplo si pueden usar break porque no usamos el return de la función
// let resultado4;

// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case '+':
//             resultado4 = primerNumero + segundoNumero;
//             break;
//         case '-':
//             resultado4 = primerNumero - segundoNumero;
//             break;
//         case '*':
//             resultado4 = primerNumero * segundoNumero;
//             break;
//         case '/':
//             resultado4 = primerNumero / segundoNumero;
//             break;
//         default:
//             resultado4 = 0;
//     }
// }

// calculadora(5, 5, '+');
// mostrar(resultado4);
// calculadora(5, 5, '-');
// mostrar(resultado4);
// calculadora(5, 5, '*');
// mostrar(resultado4);
// calculadora(5, 5, '/');
// mostrar(resultado4);

// Variables globales y locales
// let resultado5 = 0; // variable global

// function sumar(primerNumero, segundoNumero) {
// 	resultado5 = primerNumero + segundoNumero;
// }

// sumar(5, 6);

//Se puede acceder a la variable resultado porque es global
// mostrar(resultado5);

// function sumar(primerNumero, segundoNumero) {
// 	let resultado = primerNumero + segundoNumero;
// }

// sumar(5, 6);

//No se puede acceder a la variable resultado fuera del bloque
// console.error(resultado); // Uncaught ReferenceError: resultado is not defined

// scope local
// function sumar(num1, num2) {
//     let resultado = num1 + num2;
//     return resultado;
// }

// function restar(num1, num2) {
//     let resultado = num1 - num2;
//     return resultado;
// }

// mostrar('Sumar: ' + sumar(8, 8));
// mostrar('Restar: ' + restar(8, 8));
