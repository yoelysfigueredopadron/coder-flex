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

// Ejemplo con librerías Toastify

// Mostrar una notificación básica
// Toastify({
//     text: '¡Hola, coder!',
//     duration: 3000, // Duración en milisegundos
// }).showToast();

// Personalizar el estilo y posición de la notificación
// Toastify({
//     text: '¡Éxito!',
//     style: {
//         background: 'green', // 'linear-gradient(to right, #00b09b, #96c93d)'
//     },
//     position: 'bottom-right',
// }).showToast();

// Agregar un botón de cierre a la notificación
// Toastify({
//     text: 'Haz clic en el botón de cerrar',
//     close: true,
// }).showToast();

// Mostrar una notificación con acción y callback
Toastify({
    text: "Haz clic en 'Aceptar'",
    close: true,
    onClick: function () {
        console.log('Se hizo clic en la notificación');
    },
}).showToast();

// Ejemplo con fechas usando el objeto Date de javascript y la librería luxon
const dateActual = new Date();
// console.log(dateActual);

// Crear una instancia de fecha y hora actual
const now = luxon.DateTime.now();
// console.log(now.toISO());

// Realizar cálculos con fechas y horas
const pastDate = luxon.DateTime.fromISO('2023-06-01');
const duration = luxon.Duration.fromObject({ days: 7 });
const futureDate = pastDate.plus(duration);
// console.log(futureDate.toISODate()); // 2023-06-08

// Formatear una fecha y hora en un formato específico
const date = luxon.DateTime.fromISO('2023-07-05T10:30:00');
const formattedDate = date.toFormat('dd/MM/yyyy HH:mm:ss');
// console.log(formattedDate); // 05/07/2023 10:30:00

// Obtener la diferencia entre dos fechas
const start = luxon.DateTime.fromISO('2023-07-01');
const end = luxon.DateTime.fromISO('2023-07-05');
// El método diff devuelve un objeto Duration que representa la duración entre las dos fechas. toObject() convierte el objeto Duration en un objeto de JavaScript que contiene las propiedades de la duración, como días, horas, minutos, segundos, milisegundos.
const diff = end.diff(start, 'days').toObject();
// console.log(diff.days); // 4
