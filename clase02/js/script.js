// Find The Bug

// Actividad 01:
// let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');

// Parseamos cantidad a un numero entero
// let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));
// let texto = prompt('INGRESE TEXTO A REPETIR');

// for (let index = 0; index < cantidad; index++) {
// 	console.log(texto);
// }

// ¿Qué tiene que hacer este código?
//El código tiene que repetir el valor de la variable 'texto' n cantidad de veces

// ¿Por qué no cumple con su función?
// No cumple la función porque no se esta incrementando el valor de la variable 'index' un operador de incremento que podemos utilizar es el ++ ejemplo index++ esto aumentará el valor de index en 1 por cada cicle hasta que la condición index < cantidad devuelva false.

// Al introducir un número válido por prompt() para la variable cantidad esta va a contener un número pero en fomato de texto (string) la condición index < cantidad va a comparar el valor de index con el valor numerico de cantidad y siempre que sea un número devolverá true o false de acuerdo a la condición evaluada sin embargo es una buena práctica es parsear cantidad para que sea una variable númerica del mismo tipo de index ya que esto puede evitar errores en otras operaciones donde usemos esa variable.

// Actividad 02:
// El número de lados de una figura geométrica se refiere a la cantidad de líneas rectas que forman la figura.

// Hay muchas figuras geométricas que tienen 3 o más lados, algunas de las más comunes son:

// Triángulo: una figura geométrica de tres lados y tres ángulos.
// Cuadrilátero: una figura geométrica de cuatro lados y cuatro ángulos.
// Pentágono: una figura geométrica de cinco lados y cinco ángulos.
// Hexágono: una figura geométrica de seis lados y seis ángulos.
// Heptágono: una figura geométrica de siete lados y siete ángulos.
// Octágono: una figura geométrica de ocho lados y ocho ángulos.
// Nonágono: una figura geométrica de nueve lados y nueve ángulos.
// Decágono: una figura geométrica de diez lados y diez ángulos.
// Dodecágono: una figura geométrica de doce lados y doce ángulos.

// Hay muchas más figuras geométricas con tres o más lados, pero estas son algunas de las más comunes.

// let lados = prompt('INGRESE CANTIDAD DE LADOS');

// parseamos a un número entero
// let lados = parseInt(prompt('INGRESE CANTIDAD DE LADOS'));

// for (let index = 1; index <= lados; index++) {
// 	if (index > 3) {
// 		alert('La figura geométrica tiene más de 3 lados por lo que no es un Tríángulo');
// 		break; // podemos utilizar el break si una vez comprobado que no es un triangulo, si deseamos salir del bucle for para que no nos muestre constantemente la alerta
// 	}

// 	alert('lado: ' + index);
// }

// ¿Qué tiene que hacer este código?
// El código recorre con un ciclo for y ejecuta su bloque de código mientras la condición index < lados sea verdadera(true)

// ¿Por qué no cumple con su función?
// No se cumple con la función primero porque no se le ha introducido sentencias dentro del bloque de código del if. Además la condición del if nunca será verdadera si index no es mayor que 3

// ¿Qué propuesta podrías hacer para que tenga sentido su uso?
// Podríamos hacer que cuando la condición sea verdadera se muestre un alert con un mensaje por ejemplo "La figura geométrica tiene más de 3 lados por lo que no es un Tríángulo" . Debemos modificar el valor de index = 1 ya que el valor de esa variable nos ayudará a controlar en la condición del if si una figura tiene más de 3 lados para poder mostrar la alerta. También vamos a modificar la condición del bucle for con el operador de comparación menor igual <= ya que index comienza en 1 y queremos que se compruebe la condición mientras sea menor o igual que la variable lados

// Desafíos complementarios
// Actividad 01:
// Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese número es par o impar.
// Para determinar si un número es par o impar el número debe de ser divisible por 2

// let nummero = Number(prompt('Introduzca un numero'));

// if (nummero % 2 == 0) {
// 	console.log('El número ' + nummero + ' es par.');
// } else {
// 	console.log('El número ' + nummero + ' es impar.');
// }

// Actividad 02:
// Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar
// cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".

alert('Ingrese un número para determinar si es par o impar. Mostraremos un lista de los mismo al finalizar.');

let salir = '',
	cantidadPares = 0,
	cantidadImpares = 0,
	listaNumerosPares = '',
	listaNumerosImpares = '';

let nummero2 = Number(prompt('Introduzca un numero'));

while (salir !== 'salir') {
	if (nummero2 % 2 == 0) {
		cantidadPares++;
		listaNumerosPares += nummero2.toString() + ', ';
	} else {
		cantidadImpares++;
		listaNumerosImpares += nummero2.toString() + ', ';
	}

	salir = prompt('Ingrese la palabra "salir" y presione el botón aceptar si desea salir del programa. En caso contrario presione cancelar');

	if (salir !== 'salir') {
		nummero2 = Number(prompt('Introduzca un nuevo numero'));
	}
}

if (cantidadPares !== 0) {
	console.log('Cantidad de números Pares: ' + cantidadPares);
	console.log('Lista de números Pares: ' + listaNumerosPares.substring(0, listaNumerosPares.length - 2));
} else {
	console.log('No existen números pares.\n');
}

if (cantidadImpares !== 0) {
	console.log('Cantidad de números Impares: ' + cantidadImpares);
	console.log('Lista de números Impares: ' + listaNumerosImpares.substring(0, listaNumerosImpares.length - 2));
} else {
	console.log('No existen números impares.');
}
