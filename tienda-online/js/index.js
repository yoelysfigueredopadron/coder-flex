const iconMenu = document.getElementById('icon-menu');
const containerProducts = document.getElementById('container-products');
const modal = document.getElementById('ventanaModal');
const carrito = document.getElementById('carrito');
const showTotal = document.getElementById('total');
const spanClose = document.getElementsByClassName('close')[0];
const containerCart = document.querySelector('.modal-body');
let productosCarrito = [];

renderizarProductos();
cargarEventos();

function cargarEventos() {
    iconMenu.addEventListener('click', showMenu);

    document.addEventListener('DOMContentLoaded', () => {
        productosCarrito = JSON.parse(localStorage.getItem('productosLS')) || [];

        mostrarProductosCarrito();
    });

    containerProducts.addEventListener('click', agregarProducto);

    containerCart.addEventListener('click', eliminarProducto);

    carrito.onclick = function () {
        modal.style.display = 'block';
    };

    spanClose.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

function eliminarProducto(e) {
    if (e.target.classList.contains('eliminar-producto')) {
        const productoId = parseInt(e.target.getAttribute('id'));
        // console.log(productoId);

        productosCarrito = productosCarrito.filter((producto) => producto.id !== productoId);
        guardarProductosLocalStorage();
        console.log(productosCarrito);

        mostrarProductosCarrito();
    }
}

function calcularTotal() {
    let total = productosCarrito.reduce((sumaTotal, producto) => sumaTotal + producto.subtotal, 0);
    // console.log(total);

    showTotal.innerHTML = `Total a Pagar: $ ${total}`;
}

function agregarProducto(e) {
    e.preventDefault();
    // console.log(e.target);

    if (e.target.classList.contains('agregar-carrito')) {
        const productoAgregado = e.target.parentElement;
        // console.log(productoAgregado);

        leerDatosProducto(productoAgregado);
    }
}

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

function leerDatosProducto(producto) {
    // Creamos un objeto literal
    // const datosProducto = {
    // 	imagen: producto.querySelector('img').src,
    // 	nombre: producto.querySelector('h4').textContent,
    // 	precio: Number(producto.querySelector('p').textContent.replace('$', '')),
    // 	id: parseInt(producto.querySelector('a').getAttribute('id')),
    // 	cantidad: 1,
    // 	subtotal: 0
    // };

    // datosProducto.subtotal = datosProducto.precio * datosProducto.cantidad;
    // console.log(datosProducto);

    // creamos el objeto utilizando la clase Producto
    const datosProducto = new Producto(
        producto.querySelector('img').src,
        producto.querySelector('h4').textContent,
        Number(producto.querySelector('p').textContent.replace('$', '')),
        parseInt(producto.querySelector('a').getAttribute('id'))
    );

    datosProducto.obtenerTotal();
    // console.log(datosProducto);

    agregarAlCarrito(datosProducto);
}

function agregarAlCarrito(productoAgregar) {
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

        // productosCarrito = [...productos]; // ... Spread Operator será estudiado en próximas clases
        productosCarrito = productos; // reasignamos con el array productos devuelto por el metodo "map"
    } else {
        productosCarrito.push(productoAgregar); // agregamos el nuevo producto ya que no se encontraba dentro de productosCarrito
    }

    guardarProductosLocalStorage();

    console.log(productosCarrito);
    mostrarProductosCarrito();
}

function guardarProductosLocalStorage() {
    localStorage.setItem('productosLS', JSON.stringify(productosCarrito));
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

    calcularTotal();
}

function limpiarHTML() {
    while (containerCart.firstChild) {
        containerCart.removeChild(containerCart.firstChild);
    }
}

function showMenu() {
    let navbar = document.getElementById('myTopnav');

    if (navbar.className === 'topnav') {
        navbar.className += ' responsive';
    } else {
        navbar.className = 'topnav';
    }
}

function renderizarProductos() {
    productos.forEach((producto) => {
        const divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.innerHTML += `
			<img src=./img/${producto.img} alt=${producto.nombre} />
			<h4>${producto.nombre}</h4>
			<p>$${producto.precio}</p>
			<a id=${producto.id} class="boton agregar-carrito" href="#">Agregar</a>
        `;

        containerProducts.appendChild(divCard);
    });
}
