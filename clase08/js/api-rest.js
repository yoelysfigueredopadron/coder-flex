// Función para realizar una solicitud HTTP
function makeHttpRequest(method, url, data) {
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    return fetch(url, options).then(function (response) {
        if (!response.ok) {
            throw new Error('Error: ' + response.status + ' ' + response.statusText);
        }
        return response.json();
    });
}

// El uso de .then() y .catch() en una promesa es una forma de manejar el resultado o los errores de una operación asíncrona. Cuando una promesa se resuelve con éxito, es decir, se cumple, se ejecuta la función de callback pasada al .then(), que puede recibir el resultado de la promesa y realizar cualquier operación adicional que se desee.

// Si la promesa es rechazada, es decir, ocurre un error, se ejecuta la función de callback pasada al .catch(), que permite manejar el error y tomar las acciones necesarias.

// Obtener todos los usuarios (Get -> Read)
makeHttpRequest('GET', 'https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        console.log('Usuarios:', response);
    })
    .catch((error) => {
        console.error('Error al obtener usuarios:', error);
    });

// Obtener un usuario específico (Get -> Read)
makeHttpRequest('GET', 'https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
        console.log('Usuario:', response);
    })
    .catch((error) => {
        console.error('Error al obtener usuario:', error);
    });

// Crear un nuevo usuario (Post -> Create)
makeHttpRequest('POST', 'https://jsonplaceholder.typicode.com/users', {
    name: 'Juan Gonzales',
    username: 'juangonzales',
    email: 'juangonzales@example.com',
})
    .then((response) => {
        console.log('Nuevo usuario creado:', response);
    })
    .catch((error) => {
        console.error('Error al crear usuario:', error);
    });

// Actualizar un usuario existente (Put-> Update)
makeHttpRequest('PUT', 'https://jsonplaceholder.typicode.com/users/1', {
    name: 'Nuevo nombre usuario',
    username: 'nuevonombreusuario',
    email: 'nuevonombreusuario@example.com',
})
    .then((response) => {
        console.log('Usuario actualizado:', response);
    })
    .catch((error) => {
        console.error('Error al actualizar usuario:', error);
    });

// Eliminar un usuario
makeHttpRequest('DELETE', 'https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
        console.log('Usuario eliminado');
    })
    .catch((error) => {
        console.error('Error al eliminar usuario:', error);
    });
