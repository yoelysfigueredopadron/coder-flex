// El Call Stack sigue el principio LIFO (last in first out) (último en entrar, primero en salir), lo que significa que la última función que se añadió a la pila es la primera en ser eliminada cuando se completa su ejecución.

function foo() {
    // segunda función llamada
    console.log('Función foo');
    bar();
}

function bar() {
    // tercera función llamada
    console.log('Función bar');
}

function baz() {
    // primera función llamada
    console.log('Función baz');
    foo();
}

// baz();

// El Event Loop es una parte fundamental del modelo de concurrencia de JavaScript que permite que el lenguaje sea asíncrono y maneje eventos de manera eficiente. Es responsable de coordinar la ejecución de tareas asíncronas, como eventos de usuario, peticiones de red y temporizadores. El Event Loop sigue un ciclo continuo y se encarga de manejar la cola de tareas y la pila de llamadas (Call Stack)

// console.log('Inicio');

// setTimeout(function () {
//     console.log('Temporizador 1');
// }, 0);

// setTimeout(function () {
//     console.log('Temporizador 2');
// }, 0);

// Promise.resolve().then(function () {
//     console.log('Promesa resuelta');
// });

// console.log('Fin');

// Ejemplo con setInterval y clearInterval
// let intervalo = setInterval(() => {
//     console.log('¡Hola, soy setInterval!');
// }, 1000);

// Detener el intervalo después de 5 segundos
// setTimeout(() => {
//     clearInterval(intervalo);
//     console.log('Se ha detenido el intervalo');
// }, 5000);

// Ejemplo con setTimeout y clearTimeout
// let temporizador = setTimeout(() => {
//     console.log('¡Hola, soy setTimeout!');
// }, 2000);

// Cancelar el temporizador antes de que se ejecute
// clearTimeout(temporizador);
// console.log('Se ha cancelado el temporizador');

// En JavaScript, una promesa (Promise) es un objeto que se utiliza para realizar operaciones asíncronas y manejar sus resultados. Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca.

// Las promesas pueden estar en uno de los siguientes estados
// Pendiente (pending): La promesa está en curso y aún no se ha resuelto o rechazado.
// Cumplida (fulfilled): La promesa se resolvió exitosamente y se obtuvo un resultado.
// Rechazada (rejected): La promesa se rechazó debido a un error y se obtuvo una razón para el rechazo.

// Ejemplo de promesa para simular una operación asíncrona
// const miPromesa = new Promise((resolve, reject) => {
// Simulamos una tarea asíncrona que se completará después de 2 segundos
//     setTimeout(() => {
//         const numeroAleatorio = Math.random();

//         if (numeroAleatorio < 0.5) {
// Si el número aleatorio es menor a 0.5, la promesa se resuelve con éxito
//             resolve(numeroAleatorio);
//         } else {
// Si el número aleatorio es mayor o igual a 0.5, la promesa se rechaza con un error
//             reject(new Error('El número aleatorio es mayor o igual a 0.5'));
//         }
//     }, 2000);
// });

// Utilizando la promesa
// miPromesa
//     .then((result) => {
//         console.log('La promesa se cumplió:', result);
//     })
//     .catch((error) => {
//         console.error('La promesa fue rechazada:', error.message);
//     });

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // const response = await fetch('https://raw.githubusercontent.com/yoelysfigueredopadron/JSON/main/productos2.json');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        console.log(data);
        // Aquí puedes realizar cualquier acción con los datos recibidos
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        console.log('La solicitud ha finalizado');
    }
}

// Llamamos a la función para obtener los datos
fetchData();
