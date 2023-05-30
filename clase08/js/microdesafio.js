const obtenerDatos = async () => {
    // let url = './js/productos2.json'; // archivo local en la aplicación
    let url = 'https://raw.githubusercontent.com/yoelysfigueredopadron/JSON/main/productos2.json'; // Archivo en un servidor
    let mostrarContenido = '';

    try {
        let peticion = await fetch(url);
        let productos = await peticion.json();

        productos.forEach((producto) => {
            mostrarContenido += `<p>${producto.nombre} ($${producto.precio})</p>`;
        });
    } catch (error) {
        console.error('Se ha producido un error', error);
    } finally {
        document.body.innerHTML = mostrarContenido;
    }
};

obtenerDatos();
