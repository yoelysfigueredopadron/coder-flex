// function saludo() {
//     let nombre = prompt('Ingrese su nombre:');

//     alert('Bienvenido ' + nombre);
// }

// saludo();
// saludo();
// saludo();
// saludo();
// saludo();

// for (let i = 0; i < 5; i++) {
//     saludo();
// }

// let resultado, numero1, numero2;

// function IngresarDatos() {
//     numero1 = Number(prompt('Ingrese el primer número'));
//     numero2 = Number(prompt('Ingrese el segundo número'));
// }

// function multiplicar(parametro1, parametro2) {
//     resultado = parametro1 * parametro2;
// }

// function mostrarResultado(valorAMostrar) {
//     alert('El resultado de la multiplicación es ' + valorAMostrar);
//     console.log('El resultado de la multiplicación es ' + valorAMostrar);
// }

// multiplicar(5, 5);
// mostrarResultado(resultado);

// IngresarDatos();
// multiplicar(numero1, numero2);
// mostrarResultado(resultado);

// uso de return
// let resultado, numero1, numero2;

// function IngresarDatos() {
//     numero1 = Number(prompt('Ingrese el primer número'));
//     numero2 = Number(prompt('Ingrese el segundo número'));
// }

// function multiplicar(parametro1, parametro2) {
//     let resultadoMultiplicacion = parametro1 * parametro2;

//     return resultadoMultiplicacion;
// }

// function mostrarResultado(valorAMostrar) {
//     alert('El resultado de la multiplicación es ' + valorAMostrar);
//     console.log('El resultado de la multiplicación es ' + valorAMostrar);
// }

// resultado = multiplicar(5, 5);
// mostrarResultado(resultado);

// IngresarDatos();
// resultado = multiplicar(numero1, numero2);
// mostrarResultado(resultado);

// Uso de variable globales y locales
// let numero1, numero2, resultado, resultadoMultiplicar, resultadoDividir; // variables globales

// function IngresarDatos() {
//     numero1 = Number(prompt('Ingrese el primer número'));
//     numero2 = Number(prompt('Ingrese el segundo número'));
// }

// function multiplicar(parametro1, parametro2) {
//     let resultado = parametro1 * parametro2; // resultado es una variable localSS
// mostrarResultado(resultado); // utilizamos resultado como argumento de la función mostrarResultado

// resultado = parametro1 * parametro2; // resultado es una variable global
//     return resultado;
// }

// function dividir(parametro1, parametro2) {
//     let resultado = parametro1 / parametro2; // resultado es una variable local

//     resultado = parametro1 / parametro2; // resultado es una variable global
//     return resultado;
// }

// function mostrarResultado(valorAMostrar) {
//     alert('El resultado es ' + valorAMostrar);
//     console.log('El resultado es ' + valorAMostrar);
// }

// mostrarResultado(multiplicar(5, 5));

// IngresarDatos();
// resultadoMultiplicar = multiplicar(numero1, numero2);
// resultadoDividir = dividir(numero1, numero2);
// mostrarResultado(resultado); // resultado es una variable global
// mostrarResultado(resultadoMultiplicar);
// mostrarResultado(resultadoDividir);

// funciones anonimas
// function multiplicar(parametro1, parametro2) {
//     let resultado = parametro1 * parametro2;

//     return resultado;
// }

// console.log(multiplicar(6, 10));

// const multiplicar = function (parametro1, parametro2) {
//     return parametro1 * parametro2;
// };

// console.log(multiplicar(6, 5));

// funcion flecha
// const multiplicar = (parametro1, parametro2) => {
// 	return parametro1 * parametro2;
// };

// con una unica sentencia podemos eliminar las llaves, el return viene implicito
// const multiplicar = (parametro1, parametro2) => parametro1 * parametro2;

// si tiene que incluir más de una linea se incluye las llaves, también debe agregar el return
// const multiplicar = (parametro1, parametro2) => {
//     console.log('Operación de multiplicar:');
//     console.log('Parametro1: ', parametro1);
//     console.log('Parametro2: ', parametro2);
//     return parametro1 * parametro2;
// };

// console.log(multiplicar(6, 6));

// calcular precio con descuento usando arrow functions
// const sumar = (a, b) => a + b;
// const restar = (a, b) => a - b;
// const iva = (x) => x * 0.21;

// let precioProducto = 500,
//     descuento = 50,
//     precioDescuento;

// console.log(iva(500)); // iva sobre el precio del Producto
// console.log(sumar(precioProducto, iva(precioProducto))); // precio con iva
// console.log(restar(sumar(precioProducto, iva(precioProducto)), descuento)); // precio final (precio con iva - descuento)

// precioDescuento = restar(sumar(precioProducto, iva(precioProducto)), descuento);
// console.log('El precio final es $', precioDescuento);
// console.log('El precio final es $' + precioDescuento);

// Find The Bug

// Actividad 01:
// const IVA = 1.21;
// let importe = prompt('Ingresa el importe sobre el cual quieres calcular el IVA:');

// const precioConIVA = (imp, iva) => imp * iva;

// Al tratarse de una multiplicación sino parseamos correctamente la variable "importe" realiza la operación de forma correcta, esto no pasaría de igual forma si se tratase de una suma, por esa razón es una buena práctica parsear siempre los valores tomados por un prompt si se van a utilizar en calculos númericos
// console.log(precioConIVA(importe, IVA));

// Actividad 02:
// const valorM2 = 31.83; //valor fijo del seguro por Metro 2
// const comision = 1.025; //comisión del 2.5%
// const M2 = prompt('Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:');
// const calcularPoliza = (M2) => M2 * valorM2 * comision;

// const calcularPoliza = (M2) => {
//     return M2 * valorM2 * comision;
// };

// let valorPoliza = calcularPoliza(M2);
// console.log('El costo de la póliza es: $', valorPoliza.toFixed(2));

// porque var es una mala practica
// function ejemploVar() {
//     var x = 1;
//     if (true) {
//         var x = 2; // Mismo x
//         console.log(x); // 2
//     }
//     console.log(x); // 2
// }

// function ejemploLet() {
//     let y = 1;
//     if (true) {
//         let y = 2; // Diferente y
//         console.log(y); // 2
//     }
//     console.log(y); // 1
// }

// ejemploVar();
// ejemploLet();
