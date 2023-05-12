const producto = {},
	productos = [];
let total = 0;

// console.log({ producto, productos });

class Producto {
	static id = 0;

	constructor(objProducto) {
		this.nombre = objProducto.nombre;
		this.precio = objProducto.precio;
		this.cantidad = objProducto.cantidad;
		this.subtotal = 0;
	}

	subtotalPorProducto() {
		this.subtotal = this.cantidad * this.precio;
	}

	agregarIva() {
		this.precio = Number((this.precio * 1.21).toFixed(2));
	}
}

const modificarCantidad = (masCantidad) => {
	let cantidad;

	if (masCantidad) {
		cantidad = Number(prompt('Ingrese la cantidad de productos que desea'));

		while (cantidad <= 0 || isNaN(cantidad)) {
			alert('Error, debe ingresar un valor válido para cantidad de productos (1 o más) :');
			cantidad = Number(prompt('Ingrese la cantidad de productos que desea'));
		}

		if (cantidad === 1) {
			alert(`Agrego solo ${cantidad} producto.`);
		} else {
			alert(`Agrego ${cantidad} productos.`);
		}
	} else {
		cantidad = 1;
	}

	return cantidad;
};

const validarNombreProducto = (nombre) => {
	nombre = prompt('Ingrese nombre del producto');

	while (nombre === null || nombre.trim() === '') {
		alert('Error, debe ingresar un nombre de producto');
		nombre = prompt('Ingrese nombre del producto');
	}

	return (nombre = nombre.toLowerCase());
};

const validarPrecioProducto = (precio) => {
	precio = Number(prompt('Ingrese precio del producto'));

	while (isNaN(precio) || precio <= 0) {
		alert('Error, debe ingresar un precio válido para el producto');
		precio = Number(prompt('Ingrese precio del producto'));
	}

	return precio;
};

const agregarPropiedas = (nombre, precio, cantidad) => {
	// agregamos las propiedades de forma dinámica
	// producto.nombre = nombre;
	// producto.precio = precio;
	// producto.cantidad = cantidad;

	producto['nombre'] = nombre;
	producto['precio'] = precio;
	producto['cantidad'] = cantidad;
};

const ingresarDatos = () => {
	let nombre, precio, cantidad, masCantidad;

	nombre = validarNombreProducto(nombre);
	console.log({ nombre });

	precio = validarPrecioProducto(precio);
	console.log({ precio });

	masCantidad = confirm('¿Desea agregar más de un producto?');
	console.log({ masCantidad });

	cantidad = modificarCantidad(masCantidad);
	console.log({ cantidad });

	agregarPropiedas(nombre, precio, cantidad);
	console.log(producto);

	productos.push(new Producto(producto));
	console.log(productos);
};

const iniciar = () => {
	let confirmacion = confirm('¿Desea ingresar productos?');

	while (confirmacion) {
		ingresarDatos();
		confirmacion = confirm('¿Desea continuar ingresando productos?');
	}

	// actualizamos el precio de los productos con el iva y el subtotal
	for (const producto of productos) {
		producto.agregarIva();
		producto.subtotalPorProducto();
		total += producto.subtotal;
		console.log({ total });
	}

	console.log(productos);
	console.log(`El total de los productos a pagar es $${total}`);
	console.log('Muchas gracias por usar nuestra aplicación');
};

// iniciar();

// storage y JSON
// métodos de localStorage y sessionStorage -> setItem(), getItem(), removeItem(), clear()
// métodos JSON stringifity() y parse()

// guardando informacición en localstorage y sessionstorage con setItem()
// localStorage.setItem('texto', 'Esto es una cadena de texto');
// localStorage.setItem('numero', 100);
// localStorage.setItem('aprobado', true);
// sessionStorage.setItem('texto', 'Esto es una cadena de texto');
// sessionStorage.setItem('numero', 100);
// sessionStorage.setItem('aprobado', true);

// recuperamos valores de localstorage y sessionstorage con getItem()
// let cadena = localStorage.getItem('texto');
// let numero = Number(localStorage.getItem('numero'));
// let aprobado = localStorage.getItem('aprobado') === 'true';
// let cadena2 = sessionStorage.getItem('texto');
// let numero2 = Number(sessionStorage.getItem('numero'));
// let aprobado2 = sessionStorage.getItem('aprobado') === 'true';

// console.log({ cadena });
// console.log('cadena ->', typeof cadena);
// console.log({ numero });
// console.log('numero ->', typeof numero);
// console.log({ aprobado });
// console.log('aprobado ->', typeof aprobado);

// console.log({ cadena2 });
// console.log(typeof cadena2);
// console.log({ numero2 });
// console.log(typeof numero2);
// console.log({ aprobado2 });
// console.log(typeof aprobado2);

// Eliminar un valor de localstorage y sessionstorage con el método removeItem()
// localStorage.removeItem('numero');
// localStorage.removeItem('texto');
// localStorage.removeItem('aprobado');
// sessionStorage.removeItem('numero');
// sessionStorage.removeItem('texto');
// sessionStorage.removeItem('aprobado');

// eliminar todos los valores de localstorage y sessionstorage con el método clear()
// localStorage.clear();
// sessionStorage.clear();

// guardando objetos en formato JSON (JavaScript Object Notation)
const objeto = { nombre: 'Juan', edad: 50 };

// localStorage.setItem('miObjeto', objeto); // object Object
localStorage.setItem('miObjeto', JSON.stringify(objeto)); // parseamos de objeto a JSON

// const miObjeto = localStorage.getItem('miObjeto'); // formato JSON
// const miObjeto = JSON.parse(localStorage.getItem('miObjeto')); parseamosde JSON a objeto

// console.log(miObjeto);

const array = [5, 6, 7, 8];

// localStorage.setItem('miArray', array); // guarda el array como texto
localStorage.setItem('miArray', JSON.stringify(array)); // pasea el array de objeto a JSON

// const miArray = localStorage.getItem('miArray');
const miArray = JSON.parse(localStorage.getItem('miArray'));

console.log(miArray);
console.log(typeof miArray);
