// objeto literal
const persona = {
	nombre: 'Juan',
	apellido: 'Gonzales',
	edad: 25,
	direccion: 'Parque Patricios 4000'
};

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.edad);
// console.log(persona.direccion);

// console.log(persona['nombre']);
// console.log(persona['apellido']);
// console.log(persona['edad']);
// console.log(persona['direccion']);

// función constructora de objetos usa objetos literales
// function Persona(objetoLiteral) {
// 	this.nombre = objetoLiteral.nombre;
// 	this.apellido = objetoLiteral.apellido;
// 	this.edad = objetoLiteral.edad;
// 	this.direccion = objetoLiteral.direccion;
// }

// const persona1 = new Persona(persona);
// const persona2 = new Persona({ nombre: 'Pablo', apellido: 'Martínez', edad: 30, direccion: 'Malfada 3000' });

// console.log(persona1);
// console.log(persona2);

// función constructora de objetos usan variables como parametros
// function Persona(nombre, apellido, edad, direccion) {
// 	this.nombre = nombre;
// 	this.apellido = apellido;
// 	this.edad = edad;
// 	this.direccion = direccion;

// 	// agregamos una función anónima
// 	// this.infoPersona = function () {
// 	// 	console.log('Nombre : ' + this.nombre + '\nApellido : ' + this.apellido + '\nEdad : ' + this.edad + '\nDirección : ' + this.direccion);
// 	// };

// 	// agregamos una arrow function
// 	this.infoPersona = () => {
// 		console.log('Nombre : ' + this.nombre + '\nApellido : ' + this.apellido + '\nEdad : ' + this.edad + '\nDirección : ' + this.direccion);
// 	};
// }

// const persona1 = new Persona('Juan', 'Gonzales', 25, 'Parque Patricios 4000');
// console.log(persona1);

// let nombre, apellido, edad, direccion;

// function ingresarDatos() {
// 	nombre = prompt('Ingrese su nombre:');
// 	apellido = prompt('Ingrese su apellido:');
// 	edad = Number(prompt('Ingrese su edad:'));
// 	direccion = prompt('Ingrese su direccion:');

// 	const persona1 = new Persona(nombre, apellido, edad, direccion);
// 	console.log(persona1);

// 	persona1.infoPersona();
// }

// ingresarDatos();

// Creación de Clases
// class Persona {
// 	constructor(nombre, apellido, edad, direccion) {
// 		this.nombre = nombre;
// 		this.apellido = apellido;
// 		this.edad = edad;
// 		this.direccion = direccion;
// 	}

// 	// creación de método
// 	infoPersona() {
// 		console.log('Nombre : ' + this.nombre + '\nApellido : ' + this.apellido + '\nEdad : ' + this.edad + '\nDirección : ' + this.direccion);
// 	}
// }

// const persona1 = new Persona('Pedro', 'Rodríguez', 25, 'Parque Patricios 4550');
// const persona2 = new Persona('Federico', 'Rodríguez', 45, 'Parque Patricios 8090', 88997766);
// console.log(persona1);

// persona1.infoPersona();
// persona2.infoPersona();

// (Propiedades privadas) la convención es utilizar un guion bajo antes del nombre de la propiedad para indicar que es privada y que no se debe acceder directamente desde fuera de la clase. Sin embargo, es importante tener en cuenta que esta es solo una convención y que la propiedad aún es accesible desde fuera de la clase.
class Persona {
	// Propiedades estaticas
	static id = 0;

	constructor(nombre, apellido, edad, direccion, dni) {
		this._nombre = nombre;
		this._apellido = apellido;
		this._id = ++Persona.id;
	}

	get nombre() {
		return this._nombre;
	}

	set nombre(nuevoNombre) {
		this._nombre = nuevoNombre;
	}

	get apellido() {
		return this._apellido;
	}

	set apellido(nuevoApellido) {
		this._apellido = nuevoApellido;
	}

	// método privado que contiene toda la información de Persona
	_infoPersona() {
		console.log('ID : ' + this._id + '\nNombre : ' + this._nombre + '\nApellido : ' + this._apellido);
	}

	// método publico
	mostrarInfoPersona() {
		this._infoPersona();
	}
}

const persona1 = new Persona('Pedro', 'Rodríguez');
const persona2 = new Persona('Juan', 'Lopéz');
const persona3 = new Persona('Maria', 'Gonzales');

// persona1.mostrarInfoPersona();
// persona1._infoPersona();

// modificando las propiedades de persona1
persona1.nombre = 'Yoelys';
persona1.apellido = 'Figueredo';

// persona1.mostrarInfoPersona();
// persona1._infoPersona();
// persona2._infoPersona();
// persona3._infoPersona();

// console.log(persona1._id);
// console.log(persona2._id);
// console.log(persona3._id);

// console.log('Propiedad estática de persona : ' + Persona.id); // id es una propiedad estatica de la clase

// Las propiedades estáticas son aquellas que pertenecen a la clase o al objeto en sí, mientras que las propiedades dinámicas son aquellas que se agregan al objeto durante la ejecución del programa. Las propiedades estáticas se comparten entre todas las instancias de la clase, mientras que las propiedades dinámicas son únicas para cada instancia del objeto. Además, las propiedades estáticas pueden ser accedidas directamente a través de la clase, mientras que las propiedades dinámicas solo pueden ser accedidas a través de una instancia del objeto.
const idsPersonas = {},
	personas = [persona1, persona2, persona3];

personas.forEach((persona, index) => (idsPersonas[`id_${index + 1}`] = persona));

// console.log(idsPersonas);

// storage (localStorage y sessionStorage)

// Guardar un valor en LocalStorage:
// localStorage.setItem('mensaje', 'Bienvenido a localstorage.');
// localStorage.setItem('confirmacion', true);
// localStorage.setItem('cantidadEstudiantes', 50);

// const mensaje = localStorage.getItem('mensaje');
// const confirmacion = localStorage.getItem('confirmacion') === 'true'; // convertier en Boolean()
// const cantidadEstudiantes = Number(localStorage.getItem('cantidadEstudiantes')); // convertier en Number()

// console.log(mensaje);
// console.log(typeof mensaje);
// console.log(confirmacion);
// console.log(typeof confirmacion);
// console.log(cantidadEstudiantes);
// console.log(typeof cantidadEstudiantes);

// const valorNumerico = 100;
// const valorBoolean = true;
// console.log(valorBoolean);
// console.log(valorNumerico);

// sessionStorage.setItem('arregloNumerico', [10, 20, 30, 40]);
// sessionStorage.setItem('valorBoolean', false);
// sessionStorage.setItem('email', 'yoelys@mail.com');

// let arregloNumerico = sessionStorage.getItem('arregloNumerico').split(',');
// arregloNumerico = arregloNumerico.map((numero) => +numero);
// const valorBoolean = sessionStorage.getItem('valorBoolean') === 'true';
// const email = sessionStorage.getItem('email');

// console.log(arregloNumerico);
// console.log(typeof arregloNumerico); // objeto
// console.log(valorBoolean);
// console.log(typeof valorBoolean); // boolean
// console.log(email);
// console.log(typeof email); // string

// recorrer el storage
// for (let i = 0; i < localStorage.length; i++) {
// 	let clave = localStorage.key(i);
// 	let valor = localStorage.getItem(clave);
// 	console.log({ clave }, { valor });
// }

// for (let i = 0; i < sessionStorage.length; i++) {
// 	let clave = sessionStorage.key(i);
// 	let valor = sessionStorage.getItem(clave);
// 	console.log({ clave }, { valor });
// }

// Eliminar datos del storage
// localStorage.removeItem('confirmacion');
// sessionStorage.removeItem('valorBoolean');

// Eliminar toda la información de localstorage y sessionStorage
// localStorage.clear();
// sessionStorage.clear();

// localStorage.numeroPrueba = 5;
// alert((localStorage.numeroPrueba = 5));

// let clave = 'toSting'; // no se pueden crear claves con palabras reservadas del lenguaje
// localStorage.clave;
// alert(localStorage.clave);

// localStorage.setItem('person', JSON.stringify(persona));

let variableFormatoJson = '{"nombre":"Juan","apellido":"Gonzales","edad":25,"direccion":"Parque Patricios 4000"}';
const copiaPersona = JSON.parse(variableFormatoJson);

// console.log(variableFormatoJson);
// console.log(copiaPersona);

// arreglo de productos
const productos = [
	{ id: 1, nombre: 'arroz', precio: 90 },
	{ id: 2, nombre: 'pan', precio: 30 },
	{ id: 3, nombre: 'agua', precio: 50 },
	{ id: 4, nombre: 'porotos', precio: 60 },
	{ id: 5, nombre: 'carne', precio: 200 }
];

// console.log(productos);

// creamos una función para guardar los productos en localStorage
// const guardarLocal = (clave, valor) => localStorage.setItem(clave, valor);

// // guardamos los productos de a uno con for ... of
// for (const producto of productos) {
// 	guardarLocal(producto.id, JSON.stringify(producto));
// }

// Guardamos el array completo en localstorage
localStorage.setItem('carrito', JSON.stringify(productos));

// obtenemos los productos de localStorage
let carritoCompras = JSON.parse(localStorage.getItem('carrito'));

// console.log(carritoCompras);

// Ejemplo aplicado
class Producto {
	static id = 0;

	constructor(obj) {
		this.id = ++Producto.id;
		this.nombre = obj.nombre.toUpperCase();
		this.precio = obj.precio;
	}

	agregarIva() {
		this.precio = Number((this.precio * 1.21).toFixed(2));
	}
}

const productosAlmacenados = JSON.parse(localStorage.getItem('carrito'));
const listaProductos = [];

// iteramos para tranformar cada uno de sus objetos en productos de la clase
for (const objProducto of productosAlmacenados) {
	listaProductos.push(new Producto(objProducto));
}

// agregamos el iva a los productos
for (const producto of listaProductos) {
	producto.agregarIva();
}

// console.log(listaProductos);

let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem('usuario'));

console.log(usuario);

// Si había algo almacenado, lo recupero. Si no le pido un ingreso
if (usuarioEnLS !== 'null') {
	usuario = usuarioEnLS;
} else {
	usuario = prompt('Ingrese su nombre de usuario');
	localStorage.setItem('usuario', usuario);
}

console.log(usuario);
