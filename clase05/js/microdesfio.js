const producto = {},
	productos = [];

class Producto {
	static id = 0;

	constructor(objProducto) {
		this.nombre = objProducto.nombre;
		this.precio = objProducto.precio;
		this.cantidad = objProducto.cantidad;
		this.subtotal = 0;
	}

	subtotalPorProducto() {
		this.subtotal = this.precio * this.cantidad;
	}

	agregarIva() {
		this.precio = Number((this.precio * 1.21).toFixed());
	}
}

const modificarCantidad = (masCantidad) => {
	let cantidad;

	if (masCantidad) {
		cantidad = Number(prompt('Ingrese la cantidad de productos que desea'));

		while (cantidad <= 0 || isNaN(cantidad)) {
			alert('Error, debe ingresar un valor valido para cantidad de productos (1 o más) :');
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
	nombre = prompt('Ingrese nombre del producto: ');

	while (nombre === null || nombre.trim() === '') {
		alert('Error, debe ingresar un nombre de producto');
		nombre = prompt('Ingrese nombre del producto: ');
	}

	nombre = nombre.toLowerCase();

	return nombre;
};

const validarPrecioProducto = (precio) => {
	precio = Number(prompt('Ingrese precio del producto'));

	while (isNaN(precio) || precio <= 0) {
		alert('Error, ingresar un precio válido para producto');
		precio = Number(prompt('Ingrese precio del producto'));
	}

	return precio;
};

const agregarPropiedades = (nombre, precio, cantidad) => {
	// agregamos propiedades de forma dinámica
	producto.nombre = nombre; // producto['nombre'] = nombre;
	producto.precio = precio; // producto['precio'] = precio;
	producto.cantidad = cantidad; // producto['cantidad'] = cantidad;
};

const ingresarDatos = () => {
	let nombre, precio, cantidad, subtotal, masCantidad;

	nombre = validarNombreProducto(nombre);
	console.log({ nombre });

	precio = validarPrecioProducto(precio);
	console.log({ precio });

	masCantidad = confirm('¿Desea agregar más de un producto?');
	console.log({ masCantidad });

	cantidad = modificarCantidad(masCantidad);
	console.log({ cantidad });

	agregarPropiedades(nombre, precio, cantidad);
	console.log(producto);

	productos.push(new Producto(producto));
	console.log(productos);
};

const iniciar = () => {
	let confirmacion = confirm('¿Desea ingresar productos?');

	while (confirmacion) {
		ingresarDatos();
		confirmacion = confirm('¿Desea continiuar ingresando productos?');
	}

	// actualizamos el precio de los producto con el iva y el subtotal
	for (const producto of productos) {
		producto.agregarIva();
		producto.subtotalPorProducto();
	}

	console.log(productos);

	console.log('Muchas gracias por usar nuestra aplicación. :)');
};

iniciar();
