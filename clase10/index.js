mensaje = 'Realizando prueba con NodeJS';

// console.log(mensaje);

const usuarios = [
	{ nombre: 'Yoelys', edad: 40 },
	{ nombre: 'Lucas', edad: 25 },
	{ nombre: 'Juan', edad: 32 },
];

// console.log(usuarios);
// console.table(usuarios);

luxon = require('luxon');
let fechaActual = luxon.DateTime.now().toLocaleString();

console.log(fechaActual);
