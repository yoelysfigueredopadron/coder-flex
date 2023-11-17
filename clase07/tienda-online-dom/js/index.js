const iconMenu = document.getElementById('icon-menu');
const containerProducts = document.getElementById('container-products');

iconMenu.addEventListener('click', showMenu);

// console.log(productos);

function showMenu() {
    let navBar = document.getElementById('navigation-bar');

    if (navBar.className === 'navigation-bar') {
        navBar.className += ' responsive';
    } else {
        navBar.className = 'navigation-bar';
    }
}

const renderizarProductos = () => {
    productos.forEach((producto) => {
        const divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.innerHTML = `
                                <img src="./img/${producto.img}" alt="${producto.nombre}" />
                                <h4>${producto.nombre}</h4>
                                <p>$${producto.precio}</p>
                                <a id="${producto.id}" class="boton agregar-carrito" href="#">Agregar</a>
                            `;

        containerProducts.append(divCard);
    });
};

renderizarProductos();
