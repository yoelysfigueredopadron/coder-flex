const url = 'https://raw.githubusercontent.com/yoelysfigueredopadron/JSON/main/productos3.json';
const file = '../data/productos3.json';
const containerProducts = document.getElementById('container-products');
const modal = document.getElementById('ventana-modal');
const carrito = document.getElementById('carrito');
const totalCarrito = document.getElementById('total');
const btnClose = document.getElementsByClassName('close')[0];
const containerCart = document.querySelector('.modal-body');
const iconMenu = document.getElementById('icon-menu');
const contenedorProductos = document.querySelector('.contenedor-carrito');
const cantidadProductos = document.querySelector('.count-products');
const finalizarCompra = document.getElementById('finalizar-compra');
const vaciarCarrito = document.getElementById('vaciar-carrito');
const inputFiltrar = document.querySelector('#input-filtro');
const btnFiltro = document.querySelector('#filtro');
let productosCarrito = [];

const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	width: 300,
	color: 'whitesmoke',
	timer: 1000,
	timerProgressBar: true,
});

class Producto {
	constructor(imagen, nombre, precio, id) {
		this.imagen = imagen;
		this.nombre = nombre;
		this.precio = precio;
		this.id = id;
		this.cantidad = 1;
		this.subtotal = 0;
	}

	obtenerTotal() {
		this.subtotal = this.precio * this.cantidad;
	}
}

cargarEventos();

function cargarEventos() {
	iconMenu.addEventListener('click', showMenu);

	document.addEventListener('DOMContentLoaded', () => {
		renderizarProductos();
		cargarCarritoLocalStorage();
		mostrarProductosCarrito();
	});

	containerProducts.addEventListener('click', agregarProducto);
	containerCart.addEventListener('click', eliminarProducto);
	finalizarCompra.addEventListener('click', compraFinalizada);
	vaciarCarrito.addEventListener('click', limpiarCarrito);
	btnFiltro.addEventListener('click', filtrarProductos);

	carrito.onclick = function () {
		modal.style.display = 'block';
	};

	btnClose.onclick = function () {
		ocultarModal();
	};

	window.onclick = function (event) {
		if (event.target == modal) {
			ocultarModal();
		}
	};
}

async function filtrarProductos() {
	const productos = await realizarPeticion(file);
	let productosFiltrados, filtro;

	filtro = inputFiltrar.value.toLowerCase();
	console.log(filtro);

	productosFiltrados = productos.filter((producto) => producto.nombre.toLowerCase().includes(filtro));
	console.log(productosFiltrados);

	if (productosFiltrados.length > 0) {
		limpiarContenedorProductos();
		recorrerArray(productosFiltrados);
	} else {
		console.log('No se encontraron productos');
		Swal.fire({
			icon: 'error',
			title: 'Filtrando productos',
			text: '¡No se encontraron productos con el filtro especificado!',
			timerProgressBar: true,
			timer: 10000,
		});
		limpiarContenedorProductos();
		recorrerArray(productos);
	}
}

function recorrerArray(arregloProductos) {
	arregloProductos.forEach((producto) => {
		const divCard = document.createElement('div');
		divCard.classList.add('card');
		divCard.innerHTML += `
			<img src="./img/${producto.img}" alt="${producto.nombre}" />
			<h4>${producto.nombre}</h4>
			<p>$${producto.precio}</p>
			<a id=${producto.id} class="boton agregar-carrito" href="#">Agregar</a>
		`;

		containerProducts.appendChild(divCard);
	});
}

function limpiarContenedorProductos() {
	while (containerProducts.firstChild) {
		containerProducts.removeChild(containerProducts.firstChild);
	}
}

function alertaProducto(icono, titulo, colorfondo) {
	Toast.fire({
		icon: icono,
		title: titulo,
		background: colorfondo,
	});
}

function compraFinalizada() {
	Swal.fire({
		icon: 'success',
		title: 'Compra finalizada',
		text: '!Su compra se realizo con exito¡',
		timerProgressBar: true,
		timer: 5000,
	});

	eliminarCarritoLS();
	cargarCarritoLocalStorage();
	mostrarProductosCarrito();
	ocultarModal();
}

function limpiarCarrito() {
	Swal.fire({
		title: 'Limpiar carrito',
		text: '¿Confirma que desea vaciar el carrito de compras?',
		icon: 'question',
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		cancelButtonText: 'Cancelar',
	}).then((btnResponse) => {
		if (btnResponse.isConfirmed) {
			Swal.fire({
				title: 'Vaciando Carrito',
				icon: 'success',
				text: 'Su carrito de compras fue vaciado con exito.',
				timerProgressBar: true,
				timer: 5000,
			});
			eliminarCarritoLS();
			cargarCarritoLocalStorage();
			mostrarProductosCarrito();
			ocultarModal();
		} else {
			Swal.fire({
				title: 'Operación cancelada',
				icon: 'info',
				text: 'La operación de vaciar el carrito de compras fue cancelada',
				timerProgressBar: true,
				timer: 5000,
			});
		}
	});
}

function eliminarCarritoLS() {
	localStorage.removeItem('productosLS');
}

function ocultarModal() {
	modal.style.display = 'none';
}

function cargarCarritoLocalStorage() {
	productosCarrito = JSON.parse(localStorage.getItem('productosLS')) || [];
}

function eliminarProducto(e) {
	if (e.target.classList.contains('eliminar-producto')) {
		// console.log(e.target);

		const productoId = parseInt(e.target.getAttribute('id'));
		// console.log(productoId);

		alertaProducto('error', 'producto eliminado', '#ac0174');
		productosCarrito = productosCarrito.filter((producto) => producto.id !== productoId);
		guardarProductosLocalStorage();
		console.log(productosCarrito);
		mostrarProductosCarrito();
	}
}

function agregarProducto(e) {
	e.preventDefault();

	if (e.target.classList.contains('agregar-carrito')) {
		const productoAgregado = e.target.parentElement;
		// console.log(productoAgregado);

		alertaProducto('success', 'producto agregado', '#34b555');
		leerDatosProducto(productoAgregado);
	}
}

function leerDatosProducto(producto) {
	// console.log(producto);

	// creamos el objeto utilizando la clase Producto
	const datosProducto = new Producto(producto.querySelector('img').src, producto.querySelector('h4').textContent, Number(producto.querySelector('p').textContent.replace('$', '')), parseInt(producto.querySelector('a').getAttribute('id')));

	datosProducto.obtenerTotal();
	// console.log(datosProducto);

	agregarAlCarrito(datosProducto);
}

function agregarAlCarrito(productoAgregar) {
	// console.log(productoAgregar);
	// console.log(productosCarrito);

	const existeEnCarrito = productosCarrito.some((producto) => producto.id === productoAgregar.id);
	// console.log(existeEnCarrito);

	if (existeEnCarrito) {
		// Creamos un nuevo array con los productos del carrito actualizados
		const productos = productosCarrito.map((producto) => {
			if (producto.id === productoAgregar.id) {
				producto.cantidad++;
				producto.subtotal = producto.precio * producto.cantidad;

				// retornamos el objeto producto(cantidad y subtotal actualizados)
				return producto;
			} else {
				// retornamos el producto que estaba en el carrito sin actualizar ya que no coincide con el nuevo producto agregado
				return producto;
			}
		});

		productosCarrito = productos; // reasignamos con el array productos devuelto por el metodo
	} else {
		productosCarrito.push(productoAgregar); // agregamos el nuevo producto ya que no se encontraba dentro de productosCarrito
	}

	guardarProductosLocalStorage();
	console.log(productosCarrito);
	mostrarProductosCarrito();
}

function mostrarProductosCarrito() {
	limpiarHTML();

	productosCarrito.forEach((producto) => {
		const { imagen, nombre, precio, cantidad, subtotal, id } = producto;

		const div = document.createElement('div');
		div.classList.add('contenedor-producto');
		div.innerHTML = `
			<img src="${imagen}" width="100">
			<P>${nombre}</P>
			<P>$${precio}</P>
			<P>${cantidad}</P>
			<P>$${subtotal}</P>
			<a href="#" class="eliminar-producto" id="${id}"> X </a>
		`;

		containerCart.appendChild(div);
	});

	mostrarCantidadProductos();
	calcularTotal();
}

function mostrarCantidadProductos() {
	let contarProductos;

	if (productosCarrito.length > 0) {
		// console.log('Tenemos productos en el carrito');
		contenedorProductos.style.display = 'flex';
		contenedorProductos.style.alignItems = 'center';
		cantidadProductos.style.display = 'flex';
		contarProductos = productosCarrito.reduce((cantidad, producto) => cantidad + producto.cantidad, 0);
		// console.log({ contarProductos });
		cantidadProductos.innerText = `${contarProductos}`;
	} else {
		// console.log(':( No hay productos en el carrito.');
		contenedorProductos.style.display = 'block';
		cantidadProductos.style.display = 'none';
	}
}

function calcularTotal() {
	let total = productosCarrito.reduce((sumaTotal, producto) => sumaTotal + producto.subtotal, 0);
	// console.log(total);

	totalCarrito.innerHTML = `Total a Pagar: $ ${total}`;
}

function limpiarHTML() {
	while (containerCart.firstChild) {
		containerCart.removeChild(containerCart.firstChild);
	}
}

function guardarProductosLocalStorage() {
	localStorage.setItem('productosLS', JSON.stringify(productosCarrito));
}

async function renderizarProductos() {
	// const productos = await realizarPeticion(url);
	const productos = await realizarPeticion(file);

	recorrerArray(productos);
	// productos.forEach((producto) => {
	// 	const divCard = document.createElement('div');
	// 	divCard.classList.add('card');
	// 	divCard.innerHTML += `
	// 		<img src="./img/${producto.img}" alt="${producto.nombre}" />
	// 		<h4>${producto.nombre}</h4>
	// 		<p>$${producto.precio}</p>
	// 		<a id=${producto.id} class="boton agregar-carrito" href="#">Agregar</a>
	//     `;

	// 	containerProducts.appendChild(divCard);
	// });
}

async function realizarPeticion(datos) {
	try {
		const response = await fetch(datos);

		if (!response.ok) {
			throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
	// finally {
	// 	console.log('Petición finalizada');
	// }
}

function showMenu() {
	let navbar = document.getElementById('navigation-bar');

	if (navbar.className === 'navigation-bar') {
		navbar.className += ' responsive';
	} else {
		navbar.className = 'navigation-bar';
	}
}
