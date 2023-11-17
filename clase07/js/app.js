// Obtener el elemento por su ID y cambiar su contenido
let tituloElemento = document.getElementById('titulo');
// console.log(tituloElemento);

tituloElemento.innerHTML = 'Nuevo Titulo';

let parrafosElemento = document.getElementsByClassName('parrafo');
// console.log(parrafosElemento);

for (let i = 0; i < parrafosElemento.length; i++) {
    parrafosElemento[i].innerHTML = 'Nuevo parrafo';
}

let elementosLista = document.getElementsByTagName('li');
// console.log(elementosLista);

for (let i = 0; i < elementosLista.length; i++) {
    // elementosLista[i].innerText = 'Elemento ' + (i + 1) + ' modificado';
    elementosLista[i].innerText = `Elemento ${i + 1} modificado`;
}

tituloElemento.className = 'highlight';

let nuevoElemento = document.createElement('p');
// nuevoElemento.classList.add('nuevo-estilo-parrafo');
nuevoElemento.classList.add('nuevo', 'estilo', 'parrafo');
nuevoElemento.classList.remove('nuevo');
nuevoElemento.classList.remove('estilo');
nuevoElemento.innerText = 'Nuevo elemento creado';

// document.body.appendChild(nuevoElemento);
// document.body.append(nuevoElemento);
// document.body.insertBefore(nuevoElemento, document.body.firstChild);

let primerParrafo = document.querySelector('p');
let todosLosParrafos = document.querySelectorAll('p');

// console.log(primerParrafo);
// console.log(todosLosParrafos);

// Creando elementos desde objetos
const productos = [
    { id: 1, nombre: 'Arroz', precio: 125, img: 'arroz.jpg' },
    { id: 2, nombre: 'Fideo', precio: 70, img: 'fideos.jpg' },
    { id: 3, nombre: 'Pan', precio: 50, img: 'pan.jpg' },
    { id: 4, nombre: 'Flan', precio: 100, img: 'flan.jpg' },
];

// console.log(productos);

function renderizarProductos() {
    let listaProductos = document.createElement('ul');

    for (const producto of productos) {
        let objProducto = document.createElement('li');
        // objProducto.innerHTML = JSON.stringify(producto);
        objProducto.innerHTML = `ID: ${producto.id} | Nombre: ${producto.nombre} | Precio: ${producto.precio} `;
        listaProductos.append(objProducto);
    }

    alert(JSON.stringify(productos));
    document.body.append(listaProductos);
}

// renderizarProductos();

function renderizarProductos2() {
    for (const producto of productos) {
        let card = document.createElement('div');
        card.classList.add('card');

        // Definimos el innerHTML del elemento con una plantilla de texto
        card.innerHTML = `
                        <img src="../img/${producto.img}" alt="${producto.nombre}" />
                        <div class=""container>
                            <h4>${producto.nombre}</h4>
                            <p>$${producto.precio}</p>
                        </div>
       `;

        document.body.append(card);
    }
}

// renderizarProductos2();

//Eventos

// Evento mousedown
// document.addEventListener('mousedown', function () {
//     console.log('mousedown evento: se elimino la clase highlight en el titulo');
//     tituloElemento.classList.remove('highlight');
// });

// Evento mouseup
// document.addEventListener('mouseup', function () {
//     console.log('mouseup evento: se vuelva agregar la clase highlight pero modificamos su calor a azul');
//     tituloElemento.classList.add('highlight');
//     tituloElemento.style.backgroundColor = 'blue';
// });

// Evento mouseover
// tituloElemento.addEventListener('mouseover', () => {
//     console.log('mouseover evento: cambiamos el color de fondo a verde');
//     tituloElemento.style.backgroundColor = 'green';
// });

// Evento mouseout
// tituloElemento.addEventListener('mouseout', () => {
//     console.log('mouseout evento: cambiamos el color de fondo a rojo');
//     tituloElemento.style.backgroundColor = 'red';
// });

// Evento mousemove
// tituloElemento.addEventListener('mousemove', cambiarColor);

// function cambiarColor() {
//     console.log('mousemove evento: cambiamos el color de fondo a rosado');
//     tituloElemento.style.backgroundColor = 'pink';
// }

// Evento click
// document.addEventListener('click', function () {
//     console.log('Ha ocurrido el evento click.');
// });

const myInput = document.getElementById('myInput');

// Evento keydown
// myInput.addEventListener('keydown', function () {
//     console.log('Evento keydown:');
// });

// Evento keyup
// myInput.addEventListener('keyup', function () {
//     console.log('Evento keyup: ' + myInput.value);
// });

// Evento onchange
// myInput.addEventListener('change', function () {
//     console.log('Evento change evento:', myInput.value);
// });

// Evento input cuando se inserta o borran caracteres
// myInput.addEventListener('input', function () {
//     console.log('Evento input: ' + myInput.value);
// });

const myForm = document.getElementById('myForm');
const clientes = [];

// Evento submit
myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('fname').value;
    const apellido = document.getElementById('lname').value;
    const pais = document.getElementById('country').value;
    const cliente = {};

    console.log(nombre);
    console.log(apellido);
    console.log(pais);
    console.log(cliente);

    // cliente['nombre'] = nombre;
    // cliente['apellido'] = apellido;
    // cliente['pais'] = pais;
    cliente.nombre = nombre;
    cliente.apellido = apellido;
    cliente.pais = pais;

    clientes.push(cliente);
    console.log(cliente);
    console.log(clientes);

    myForm.reset();

    console.log('Evento submit.');
});
