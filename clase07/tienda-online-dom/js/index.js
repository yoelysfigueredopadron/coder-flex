const iconMenu = document.getElementById('icon-menu');
const containerProducts = document.getElementById('container-products');

iconMenu.addEventListener('click', showMenu);

function showMenu() {
    let navbar = document.getElementById('myTopnav');

    if (navbar.className === 'topnav') {
        navbar.className += ' responsive';
    } else {
        navbar.className = 'topnav';
    }
}

console.log(productos);

const renderizarProductos = () => {
    productos.forEach((producto) => {
        const divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.innerHTML = `
			<img src="./img/${producto.img}" alt="${producto.nombre}" />
			<h4>${producto.nombre}</h4>
			<p>$${producto.precio}</p>
			<a id=${producto.id} class="boton agregar-carrito" href="#">Agregar</a>
        `;

        containerProducts.appendChild(divCard);
    });
};

renderizarProductos();
