// desafíos 1
// 1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar si.
// A. Esta lloviendo
// B. Esta soleado

// En caso de estar lloviendo debe devolver por consola un mensaje que diga "Lleva paraguas"
// En caso de estar soleado debe devolver por consola un mensaje que diga "No olvides tus shorts"

// let respuesta = prompt('Seleccione una opción (A, B) para saber como se encuentra el clima hoy. \nA. Esta lloviendo \nB. Esta soleado');

// if (respuesta == 'A') {
// 	console.warn('Lleva paraguas');
// } else if (respuesta == 'B') {
// 	console.log('No olvides tus shorts');
// } else {
// 	console.error('No ha seleccionado una opción válida.');
// }

// desafíos 2
// 1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar si.
// A. Cometiste un delito
// B. Eres inocente

// En caso de estar haber cometido un delito debe devolver por consola un mensaje que diga "Iras a la cárcel"
// En caso de ser inocente debe devolver por consola un mensaje que diga "Puedes ir a casa"
// let veredicto = prompt(
// 	'Seleccione una opción (1 o 2) para decidir si la persona es culpable o inocente: \n\n1. Cometiste un delito, te declaro culpable. \n2. Después de la investigación se comprobo que eres inocente.'
// );

// if (veredicto == 1) {
// 	console.log('Has sido encontrado culpable e iras a la cárcel.');
// } else if (veredicto == 2) {
// 	console.log('Se ha demostrado que eres inocente, puedes ir a casa.');
// } else {
// 	console.error(':( No has seleccionado un veredicto válido para declarar al acusado como culpable o inocente, vuelva a seleccionar una opción.');
// }

// Desafío 3
// 1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar si te alcanza para comprar figuritas del mundial.
// A. Si tienes menos de $20 ó $20 debe devolver por consola un mensaje que diga "Te puedo ofrecer 2 caramelos"
// B. Si tienes entre de $21 y $49 debe devolver por consola un mensaje que diga "Estas cerca, pero no puedo fiarte, vuelve mañana."
// C. Si tienes $50 o más debe devolver por consola un mensaje que diga "Aquí tienes tus figuritas del mundial"

// let opcionSeleccionada = prompt('Seleccione la opción que corresponda según la cantidadde dinero que tenga: \n\nA. Tengo $20 o menos \nB. Tengo entre $21 y $49 \nC. Tengo $50 o más');

// if (opcionSeleccionada == 'A') {
// 	console.log('Te puedo ofrecer 2 caramelos');
// } else if (opcionSeleccionada == 'B') {
// 	console.log('Estas cerca, pero no puedo fiarte, vuelve mañana.');
// } else if (opcionSeleccionada == 'C') {
// 	console.log('Aquí tienes tus figuritas del mundial');
// } else {
// 	console.error(':( No has seleccionado una opción válida');
// }

// Desafío 3 otra solución
// let dineroDisponible = Number(prompt('Introduzca el dinero que tiene para comprar las figuritas del mundial'));

// if (dineroDisponible > 0 && dineroDisponible <= 20) {
// 	console.log('Te puedo ofrecer 2 caramelos');
// } else if (dineroDisponible >= 21 && dineroDisponible <= 49) {
// 	console.log('Estas cerca, pero no puedo fiarte, vuelve mañana.');
// } else if (dineroDisponible >= 50) {
// 	console.log('Aquí tienes tus figuritas del mundial');
// } else {
// 	console.error(':( No puedes ingresar una suma de dinero negativo o un valor no válido');
// }

// Desafío 4
// 1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar Cuántos mundiales vivió una persona.
// Ten en cuenta que se juega un mundial cada 4 años y que se han jugado 21 copas del mundo.

// Pedimos el año de nacimiento del usuario
// let anioActual = 2023;
// let anioDeNacimiento = prompt('¿En qué año naciste?');

// Calculamos la cantidad de Copas Mundiales que ha vivido la persona
// let cantidadDeCopas = parseInt((anioActual - anioDeNacimiento) / 4);

// alert('Has vivido ' + cantidadDeCopas + ' Copas Mundiales desde que naciste hasta el ' + anioActual + '.');

// Desafío 4 otra solución
// let anioActual = new Date().getFullYear();
// let anioDeNacimiento = prompt('¿En qué año naciste?');

// let cantidadDeCopas = Math.floor((anioActual - anioDeNacimiento) / 4);

// alert('Has vivido ' + cantidadDeCopas + ' Copas Mundiales desde que naciste hasta el ' + anioActual + '.');

// Desafíos de la clase
// 1- Pedir número mediante prompt() y sumarle otro nuevo número en cada repetición, realizando una salida por cada resultado (expresa el resultado de la operación).

// let numero = Number(prompt('Ingrese un número'));
// let suma = 0;

// se agregar al valor de suma el numero ingresado 5 veces
// for (let i = 1; i <= 5; i++) {
// 	suma = suma + numero;
// 	console.log(suma);
// }

// 2- Pedir un texto mediante prompt(), concatenar un valor adicional en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC” en el cuadro de diálogo.
// let texto = prompt('Ingrese un texto');
// let mensajeAMostrar = '';

// while (texto != 'esc') {
// agregamos un espacio después de la nueva palabra y la asignamos en la variable mensajeAMostrar
// 	mensajeAMostrar += texto + ' ';
// 	console.log(mensajeAMostrar);

// 	texto = prompt('Ingrese un texto');
// }

// console.log('El programa a terminado');

// 3- Pedir un número por prompt(), repetir la salida del mensaje “Hola Coders!” X cantidad de
// veces, de acuerdo al número ingresado.
// const saludo = 'Hola Coders!';
// let cantidadSaludos = Number(prompt('Ingrese cantidad'));
// let contador = 1;

// while (contador <= cantidadSaludos) {
// 	console.log(saludo);
// 	contador++;
// }
