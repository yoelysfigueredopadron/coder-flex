const productos = [];

console.log(productos);

const ingresarDatos = () => prompt('Ingrese el nombre del producto.');

const mensaje = (texto, producto, error = false) => {
	if (error) {
		alert(texto + producto + "', el mismo ya está dentro de la lista de productos o puede haber ingresado un valor no válido");
		console.error(texto + producto + "', el mismo ya está dentro de la lista de productos o puede haber ingresado un valor no válido");
	} else {
		alert(texto + producto + "'");
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

		// if (!productos.includes(producto) && producto !== null && producto !== '') {
		// 	productos.push(producto);
		// 	mensaje("Se agrego un producto '", producto);
		// 	// alert("Se agrego un producto '" + producto + "'");
		// 	console.log(productos);
		// } else {
		// 	mensaje(":( Error al agregar el producto '", producto, true);
		// 	// alert(":( Error al agregar el producto '" + producto + "'");
		// 	// console.error(":( Error al agregar el producto '" + producto + "'");
		// 	console.log(productos);
		// }

		if (productos.indexOf(producto) === -1 && producto !== null && producto !== '') {
			productos.push(producto);
			mensaje("Se agrego un producto '", producto);
			// alert("Se agrego un producto '" + producto + "'");
			console.log(productos);
		} else {
			mensaje(":( Error al agregar el producto '", producto, true);
			// alert(":( Error al agregar el producto '" + producto + "'");
			// console.error(":( Error al agregar el producto '" + producto + "'");
			console.log(productos);
		}

		confirmacion = confirm('¿Desea agregar un nuevo producto?');
	}
};

agregarProducto();
