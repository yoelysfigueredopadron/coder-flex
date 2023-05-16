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
        this.descripcion = objProducto.descripcion;
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

const validarDescripcionProducto = (descripcion) => {
    descripcion = prompt('Ingrese descripción del producto');

    while (descripcion === null || descripcion.trim() === '') {
        alert('Error, debe ingresar una descripcion del producto');
        descripcion = prompt('Ingrese descripción del producto');
    }

    return iniciarEnMayuscula(descripcion);
};

const validarPrecioProducto = (precio) => {
    precio = Number(prompt('Ingrese precio del producto'));

    while (isNaN(precio) || precio <= 0) {
        alert('Error, debe ingresar un precio válido para el producto');
        precio = Number(prompt('Ingrese precio del producto'));
    }

    return precio;
};

const agregarPropiedas = (nombre, precio, cantidad, descripcion) => {
    // agregamos las propiedades de forma dinámica
    producto.nombre = nombre;
    producto.precio = precio;
    producto.cantidad = cantidad;
    producto.descripcion = descripcion;
};

const ingresarDatos = () => {
    let nombre, precio, cantidad, masCantidad, descripcion;

    nombre = validarNombreProducto(nombre);
    console.log({ nombre });

    descripcion = validarDescripcionProducto(descripcion);
    console.log({ descripcion });

    precio = validarPrecioProducto(precio);
    console.log({ precio });

    masCantidad = confirm('¿Desea agregar más de un producto?');
    console.log({ masCantidad });

    cantidad = modificarCantidad(masCantidad);
    console.log({ cantidad });

    agregarPropiedas(nombre, precio, cantidad, descripcion);
    console.log(producto);

    productos.push(new Producto(producto));
    console.log(productos);
};

function iniciarEnMayuscula(texto) {
    const primerCaracter = texto.charAt(0).toUpperCase();
    const restoTexto = texto.slice(1).toLowerCase();
    return primerCaracter + restoTexto;
}

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
        console.log(`$${total.toFixed(2)}`);
    }

    console.log(productos);
    console.log(`El total de los productos a pagar es $${total}`);
    console.log('Muchas gracias por usar nuestra aplicación');
};

// iniciar();
