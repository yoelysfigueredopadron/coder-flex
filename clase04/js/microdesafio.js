const productos = [];

const ingresarDatos = () => prompt('Ingrese el nombre del producto');

const mensaje = (texto, producto, error = false) => {
	if (error) {
		alert(texto + producto + "', el mismo ya está existente dentro de la lista de productos o puede haber ingresado un valor no válido.");
		console.error(texto + producto + "', el mismo ya está existente dentro de la lista de productos o puede haber ingresado un valor no válido.");
	} else {
		alert(texto + "'" + producto + "'");
	}
};

const agregarProducto = () => {
	let confirmacion = confirm('¿Desea agregar un producto?'),
		producto;

	while (confirmacion) {
		producto = ingresarDatos();

		if (producto !== null) {
			producto = producto.trim().toLowerCase();
		}

		console.log(producto);

		if (!productos.includes(producto) && producto !== null && producto !== '') {
			productos.push(producto);
			mensaje('Se agrego el producto ', producto);
			console.log(productos);
		} else {
			mensaje(":( Error al agregar el producto '", producto, true);
			console.log(productos);
		}

		confirmacion = confirm('¿Desea agregar un producto nuevo?');
	}
};

console.log(productos);
agregarProducto();
