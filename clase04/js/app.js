// array vacío
// const arreglo = [];
// const arregloNumeros = [1, 9, 3, 9];
// const arregloBoolean = [true, true, false, false];
// const arregloString = ['cadena de texto1', 'cadena de texto2', 'cadena de texto3'];
// const arregloMixto = [50, true, 'Yoelys', [10, 20, 30]];

// console.log(arreglo);
// console.log(arregloNumeros);
// console.log(arregloBoolean);
// console.log(arregloString);
// console.log(arregloMixto);

// accediendo a las posiciones de un array
// console.log(arregloNumeros[3]);
// console.log(arregloNumeros[1]);

// let resultado = arregloNumeros[3] + arregloNumeros[1];
// let resultado2 = arregloNumeros[3] * arregloNumeros[1];

// console.log(arregloNumeros[3] + ' + ' + arregloNumeros[1] + ' = ' + resultado);
// console.log(arregloNumeros[3] + ' * ' + arregloNumeros[1] + ' = ' + resultado2);

// console.log(arregloMixto[0]);
// console.log(arregloMixto[1]);
// console.log(arregloMixto[2]);
// console.log(arregloMixto[3]);
// console.log(arregloMixto[3][0]);
// console.log(arregloMixto[3][1]);
// console.log(arregloMixto[3][2]);

// const numeros = [15, 25, 35, 45, 55];

// console.log(numeros);

// for (let i = 0; i < 5; i++) {
// 	console.log(numeros[i]);
// }

// propiedad length propiedad que determina la cantidad de elementos de un arreglo
// const numeros = [15, 25, 35, 45, 55, 100, 200];

// console.log(numeros.length);

// for (let i = 0; i < numeros.length; i++) {
// 	console.log(numeros[i]);
// }

const superHeroes = ['Batman', 'Ironman', 'Spiderman'];

// console.log(superHeroes);
// console.log('Cantidad de superhéroes:', superHeroes.length);

// push agrega un elemento al final del array
superHeroes.push('Superman');
// console.log(superHeroes);
// console.log('Cantidad de superhéroes:', superHeroes.length);

// unshift agrega un elemento al inicio del array
superHeroes.unshift('Wonder Woman');
// console.log(superHeroes);
// console.log('Cantidad de superhéroes:', superHeroes.length);

// pop elimina el último elemento y shift elimina el primer elemento
superHeroes.pop();
// console.log(superHeroes);

superHeroes.shift();
// console.log(superHeroes);

// const nombres = ['Yoelys', 'Juan', 'Pedro'];

// console.log(nombres);
// console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);

// join() une todos los elementos de un array con un separador pasado como parámetro
// console.log(nombres.join(', '));
// console.log(nombres.join(' - '));
// console.log(nombres.join(' * '));

const mensaje = ['Estas', 'palabras', 'estan', 'separadas', 'por', 'un', 'espacio.'];

// console.log(mensaje);
// console.log(mensaje.join(' '));

// indexOf() devuelve el indice de un elemento en el array sino existe devuelve -1

// console.log(nombres.indexOf('Yoelys')); // 0
// console.log(nombres.indexOf('Pedro')); // 2
// console.log(nombres.indexOf('María')); // -1 no existe en el array nombres
// console.log(mensaje.indexOf('palabras')); // 1
// console.log(mensaje.indexOf('espacio.')); // 6
// console.log(mensaje.indexOf('espacio')); // -1 el texto 'espacio' sin punto al final no existe en el array mensaje

// includes() retorna true si un elemento existe, false en caso contrario

// console.log(nombres.includes('Yoelys')); // true
// console.log(nombres.includes('Pedro')); // true
// console.log(nombres.includes('María')); // false
// console.log(mensaje.includes('palabras')); // true
// console.log(mensaje.includes('espacio.')); // true
// console.log(mensaje.includes('espacio')); // false

const nombres = ['Yoelys', 'Juan', 'Pedro', 'Ana', 'Roberto'];

// sort() ordena un array de forma ascendente
// console.log(nombres);
// nombres.sort();
// console.log(nombres);

// Reverse() invierte el orden de los elementos del array
// nombres.reverse();
// console.log(nombres);

// nombres.sort().reverse();
// console.log(nombres);

// sort() y reverse() son métodos destrutibos, cambian el orden del array luego de ser usados, sino deseamos que el orden original se pierda podemos hacer una copia del array y sobre la copia utilizamos los métodos de ordenamiento

// dos formas para realizar una copia del un array sin modificar el original pueden ser con slice() o el operador spread(...)
// const nombresOrdenados = nombres.slice(); // copia del array utilizando slice()
const nombresOrdenados = [...nombres]; // copia del array utilizando slice()

// nombresOrdenados.sort(); // ascendete
nombresOrdenados.sort().reverse(); // descendente
// console.log(nombres); // array original
// console.log(nombresOrdenados); // array ordenado

// Ordenando arrays numericos
// Por defecto el método sort() ordena los valores como strings donde en el arreglo nombres ("Ana" es colocado antes que "Yoelys") pero en el caso de los numeros son ordenados como strings y "25" es considerado que debe ordenarse después de "100" ya que el primer caracter "2" es mayor que "1" esto produce un resultado incorrecto para lo que deseamos obtener cuando ordenamos números y para resolverlo se usa una función de comparación, mostramos un ejemplo a continuación:

const puntos = [40, 100, 1, 5, 25, 10];

// puntos.sort(); // Resultado erroneo toma como referencia para ordenar el primer caracter, si son todos iguales toma el segundo y así sucesivamente pero trata los valores como strings y no como números

// la función de comparación retorna uno de tres valores posibles (negativo, cero, positivo)

// La explicación de la lógica siguiente aplica si la función esta ordenando en forma ascendente en caso de utilizar una función de orden descendente la lógica es la misma pero en forma inversa
// Si el resultado es negativo el parámetro 'a' es ordenado antes que 'b'
// Si el resultado es positivo el parámetro 'b' es ordenado antes que 'a'
// Si el resultado es cero '0' el orden de los números en el array no cambia ya que ambos son iguales

// la función de comparación evaluará todos los valores del array, dos en cada llamada de la función (a, b). Cuando comparamos 40 y 100 el método sort() llama la función de comparación pasando los valores a los parámetros(40, 100) . La función calcular 40 - 100 el resultado devuelto es negativo(-60) y la función ordena el valor 40 antes que 100.

// si el array fuera de la siguiente forma: const puntos = [100, 40, 1, 5, 25, 10]; se pasarian los parámetros de la siguiente forma (100, 40) . La función calcular 100 - 40 el resultado devuelto sería positivo (60) y la función ordena el parámetro 'b' que tiene el valor 40 antes que el parámetro 'a' que tiene el valor 100

// Ordena de forma ascendente los números
// puntos.sort(function (a, b) {
// 	return a - b;
// });

// Ordena de forma ascendente los números utilizando una arrow function =>
// puntos.sort((a, b) => a - b);

// Ordena de forma descendente los números
// puntos.sort(function (a, b) {
// 	return b - a;
// });

// Ordena de forma descendente los números utilizando una arrow function =>
puntos.sort((a, b) => b - a);

// console.log(puntos);

// Objetos literales
// const producto = { id: 1, nombre: 'arroz', precio: 90 };

// console.log(producto);
// console.log('Id:', producto.id);
// console.log('Nombre:', producto.nombre);
// console.log('Precio:', producto.precio);

// función constructora de objetos
// function Producto(id, nombre, precio) {
// 	this.id = id;
// 	this.nombre = nombre;
// 	this.precio = precio;
// }

// creamos un objeto Producto
// const producto1 = new Producto(1, 'arroz', 90);
// const producto2 = new Producto(2, 'pan', 30);
// const producto3 = new Producto(3, 'agua', 50);
// const producto4 = new Producto(4, 'porotos', 60);
// const producto5 = new Producto(5, 'carne', 200);

// console.log(producto1);
// console.log(producto1.id);
// console.log(producto1.nombre);
// console.log(producto1.precio);

class Producto {
	constructor(id, nombre, precio) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
	}

	// Metodo sumarIva
	sumarIva() {
		this.precio = Number((this.precio * 1.21).toFixed(2));
	}
}

const arregloProductos = [];
// console.log(arregloProductos);

// creando objetos con la clase producto
arregloProductos.push(new Producto(1, 'arroz', 90));
arregloProductos.push(new Producto(2, 'pan', 30));
arregloProductos.push(new Producto(3, 'agua', 50));
arregloProductos.push(new Producto(4, 'porotos', 60));
arregloProductos.push(new Producto(5, 'carne', 200));
// console.log(arregloProductos);

// for ... of ejecuta un bucle sobre un objeto iterable (Arrays, Strings, etc)
for (const producto of arregloProductos) {
	producto.sumarIva();
}

// console.log(arregloProductos);

const sumarIva = precio => Number((precio * 1.21).toFixed(2));

const productos = [
	{ id: 1, nombre: 'arroz', precio: 90 },
	{ id: 2, nombre: 'pan', precio: 30 },
	{ id: 3, nombre: 'agua', precio: 50 },
	{ id: 4, nombre: 'porotos', precio: 60 },
	{ id: 5, nombre: 'carne', precio: 200 }
];

console.log(productos);

for (const producto of productos) {
	producto.precio = sumarIva(producto.precio);
	console.log(producto);
}
