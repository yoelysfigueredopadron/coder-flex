// Crear un algoritmo simple con JS

// Pedir nombre mediante prompt(), y mostrarlo en la consola JS junto con algún texto de saludo. Ejemplo: ¡Hola, Juan!
// let nombre = prompt('Por favor, ingrese su nombre:');

// usamos prompt pasando pasando un valor por defecto
// let nombre = prompt('Por favor, ingrese su nombre:', 'visitante');

// alert('¡Bienvenido ' + nombre + '!');

// Pedir uno o más números mediante prompt(), parsearlos, y luego sumarlo a otro, o entre sí, para, finalmente, mostrar el resultado en consola JS
// let numero4 = 90;
// let numero5;
// let resultado;

// alert('Ingrese un número para sumarlo al valor 90 y mostrar el resultado por alert() y consola.');

// ingresamos un valor para numero5 por prompt()
// numero5 = parseInt(prompt('Ingrese un número:')); // parseInt parsea una cadena a un valor númerico entero
// numero5 = parseFloat(prompt('Ingrese un número:')); // parseFloat parsea una cadena a un valor númerico decimal
// numero5 = Number(prompt('Ingrese un número:')); // Number parsea una cadena a un valor númerico decimal o entero según corresponda

// sumamos el valor de numero4 y nummero5
// resultado = numero4 + numero5;

// alert('El resultado de la suma es: ' + resultado);
// console.log(numero4 + ' + ' + numero5 + ' = ' + resultado);

// Pedir un texto mediante prompt(), luego otro, concatenarlos, y mostrarlo finalmente utilizando un alert().
let nombre, apellido, edad, direccion;

nombre = prompt('Ingrese su nombre:');
apellido = prompt('Ingrese su apellido:');
edad = prompt('Ingrese su edad:');
direccion = prompt('Ingrese su direccion');

alert(nombre + ' ' + apellido + ' tiene ' + edad + ' años y vive en ' + direccion + '.');

console.log(nombre + ' ' + apellido + ' tiene ' + edad + ' años y vive en ' + direccion + '.');
