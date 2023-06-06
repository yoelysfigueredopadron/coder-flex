// alert('Hola coders!');

const btnClick = document.getElementById('btnClick');
const btnClick2 = document.getElementById('btnClick2');
const btnClick3 = document.getElementById('btnClick3');
const url = 'https://raw.githubusercontent.com/yoelysfigueredopadron/JSON/main/productos3.json';

// btnClick.addEventListener('click', () => {
//     Swal.fire({
//         title: 'Soy el titulo', // titulo del alert
//         text: 'Texto contenido de la alerta', // Texto del alert
//         icon: 'info', // warning, error, success, info, question
//         confirmButtonText: 'Aceptar', // texto del boton de confirmación
//         showConfirmButton: true, // true, false
//         timer: 2000, // tiempo para cerrar la alerta

//         Propiedades de imagen
//         imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/spiderman-cruzando-el-multiverso-pelicula-miles-morales-647b1a35aa1f8.jpg?crop=1xw:1xh;center,top',
//         imageUrl: '../img/spiderman2-miles-morales.jpg', // ubicación de imagen local o externa
//         imageWidth: 400, // ancho de la imagen
//         imageHeight: 200, // alto de la imagen
//         imageAlt: 'spiderman cruzando el multiverso pelicula miles morales', // atributo Alt de la imagen
//     });
// });

btnClick.addEventListener('click', () => {
    Swal.fire({
        title: '¿Confirma compra?',
        text: 'spiderman cruzando el multiverso pelicula miles morales',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        showConfirmButton: true,

        imageUrl: '../img/spiderman2-miles-morales.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'spiderman cruzando el multiverso pelicula miles morales',
    }).then((btnResult) => {
        if (btnResult.isConfirmed) {
            Swal.fire({
                title: 'Compra confirmada',
                icon: 'success',
                text: 'Su compra se realizo con éxito',
            });
        } else {
            Swal.fire({
                title: 'Compra cancelada',
                icon: 'error',
                text: 'Su compra fue cancelada',
            });
        }
    });
});

btnClick2.addEventListener('click', mensajeToast);

function mensajeToast() {
    Swal.fire({
        icon: 'error', // info, success
        title: 'producto eliminado', // producto eliminado, producto agregado
        position: 'top-end', // top, top-start, top-end, center, center-start, center-end, bottom, bottom-start, bottom-end
        width: 300,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        background: '#ac0174', // #34b555, #ac0174
        color: 'whitesmoke',
    });
}

async function cargarProductos() {
    const response = await fetch(url);
    const productos = await response.json();
    return productos;
}

function listarProductos() {
    const listaOrdenada = document.createElement('ol');
    Swal.fire({
        title: '¿Desea mostrar la lista de productos?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
    }).then(async (btnRespuesta) => {
        if (btnRespuesta.isConfirmed) {
            const listaDeProducto = await cargarProductos();
            console.log(listaDeProducto);

            listaDeProducto.forEach((producto) => {
                const li = document.createElement('li');
                // li.textContent = JSON.stringify(producto);
                li.textContent = `ID: ${producto.id} / Nombre: ${producto.nombre} / Precio: $${producto.precio}`;
                listaOrdenada.appendChild(li);
            });

            document.body.appendChild(listaOrdenada);
        }
    });
}

btnClick3.addEventListener('click', listarProductos);

const date = new Date();
console.log(date);

// Luxon
const { DateTime } = luxon;
const now = DateTime.now();

console.log(now.toString()); // Fecha actual
console.log(now.year);
console.log(now.month);
console.log(now.day);
console.log(now.hour);
console.log(now.minute);
console.log(now.second);
console.log(now.millisecond);
console.log(now.weekday);
