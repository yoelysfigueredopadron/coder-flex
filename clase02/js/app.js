// algoritmo sencillo:
// Declaración de variables
// let nombre = 'Juan';
// let edad = 25;
// let esMayorDeEdad = edad >= 18;

// Operaciones aritméticas y de concatenación
// let mensaje = 'Hola, ' + nombre + '. ';
// let mensaje2 = 'Tienes ' + edad + ' años. ';
// let mensaje3 = '¿Eres mayor de edad? ' + esMayorDeEdad;

// let unirMensajes = mensaje + mensaje2 + mensaje3;

// console.log(unirMensajes);
// console.warn(unirMensajes);
// console.error(unirMensajes);

// estructura condicional if
// let edad = prompt('Ingrese su edad');
// console.log(edad);

// if (edad >= 18) {
//     console.log('Usted es mayor de edad, puede entrar en la disco');
// } else {
//     console.log('Tu eres menor de edad, no puede entrar en la disco');
// }

// Estructuras if anidadas
// let precio = 20.5;

// if (precio < 20) {
//     alert('El precio es menor que 20');
// } else if (precio < 50) {
//     alert('El precio es menor que 50');
// } else if (precio < 100) {
//     alert('El precio es menor que 100');
// } else {
//     alert('El precio es mayor que 100');
// }

// Operador lógico And && operaciones compuestas
// let nombreIngresado = prompt('Ingresar nombre');
// let apellidoIngresado = prompt('Ingresar apellido');

// if (nombreIngresado != '' && apellidoIngresado != '' && nombreIngresado != null && apellidoIngresado != null) {
//     alert('Nombre: ' + nombreIngresado + '\nApellido: ' + apellidoIngresado);
// } else {
//     alert(':( Error: debe ingresar su nombre y apellido');
// }

// Ejemplo aplicado cicle for
// Solicitamos un valor al usuario
// let ingresarNumero = parseInt(prompt('Ingresar Numero'));

// En cada repetición, calculamos el número ingresado X el número de repetición (i)
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i;
//     console.log(ingresarNumero + ' X ' + i + ' = ' + resultado);
// }

// Ejemplo aplicado ciclo while
// let entrada = prompt('Ingresar un dato');

//Repetimos con While hasta que el usuario ingresa "ESC"
// while (entrada != 'ESC') {
//     alert('El usuario ingresó ' + entrada);

// Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt('Ingresar otro dato');
// }

// Ejemplo ciclo while mejorado
// let entrada = prompt('Ingresar un dato');

// Evitamos que la variable entrada quede nula o vacía
// while (entrada == '' || entrada == null) {
//     entrada = prompt('Ingresar un dato');
// }

// Convertimos su valor a mayúscula
// entrada = entrada.toUpperCase();

//Repetimos con While hasta que el usuario ingresa "ESC"
// while (entrada != 'ESC') {
//     alert('El usuario ingresó ' + entrada);

//Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt('Ingresar otro dato');

//     while (entrada == '' || entrada == null) {
//         entrada = prompt('Ingresar un dato');
//     }

//     entrada = entrada.toUpperCase();
// }

// Ejemplo con do ... while
// let entrada;

// Evitamos que la variable entrada quede nula o vacía
// do {
//     entrada = prompt('Ingresar un dato');
// } while (entrada == '' || entrada == null);

// Convertimos su valor a mayúscula
// entrada = entrada.toUpperCase();

//Repetimos con While hasta que el usuario ingresa "ESC"
// do {
//     alert('El usuario ingresó ' + entrada);

//     if (entrada == 'ESC') {
//         break; // salimos del ciclo do ... while
//     }

//     do {
//         entrada = prompt('Ingresar un dato');
//     } while (entrada == '' || entrada == null);

//     entrada = entrada.toUpperCase();
// } while (entrada != 'ESC');

// Ejemplo con switch
// let entrada;

// Evitamos que la variable entrada quede nula o vacía
// do {
//     entrada = prompt('Ingresar un dato');
// } while (entrada == '' || entrada == null);

// Convertimos su valor a mayúscula
// entrada = entrada.toUpperCase();

//Repetimos hasta que se ingresa "ESC"
// while (entrada != 'ESC') {
//     switch (entrada) {
//         case 'ANA':
//             alert('HOLA ANA');
//             break;
//         case 'JUAN':
//             alert('HOLA JUAN');
//             break;
//         default:
//             alert('¿QUIÉN SOS?');
//             break;
//     }

//     do {
//         entrada = prompt('Ingresar un dato');
//     } while (entrada == '' || entrada == null);

//     entrada = entrada.toUpperCase();
// }
