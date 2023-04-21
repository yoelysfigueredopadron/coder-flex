// Creamos una función para pedir los 3 parámetros al usuario que serán pasados a la función calcular como argumentos para realizar el calculo
function ingresarDatos() {
	let numero1, numero2, operacion;

	alert(
		'Ingresará dos números y una operación (+, -, *, /) para realizar un calculo obteniendo el resultado. Acontinuación le mostraremos ejemplos, recuerde que no se puede realizar una división por 0 para evitar errores, gracias. \n\n5 + 5 = 10 \n5 - 5 = 0 \n5 * 5 = 25 \n5 / 5 = 1'
	);

	numero1 = Number(prompt('Ingrese el primer número:'));
	numero2 = Number(prompt('Ingrese el segundo número:'));
	operacion = prompt('Ingrese una operación de las siguientes(+, -, *, /):');

	calcular(numero1, numero2, operacion);
}

// creamos la función calcular la cual recibe tres parámetros (valor1, valor2, operacion) retornando el resultado del calculo
function calcular(valor1, valor2, operacion) {
	let resultado;

	switch (operacion) {
		case '+':
			resultado = valor1 + valor2;
			mostrarResultado('Operación sumar', valor1, valor2, operacion, resultado);
			break;
		case '-':
			resultado = valor1 - valor2;
			mostrarResultado('Operación restar', valor1, valor2, operacion, resultado);
			break;
		case '*':
			resultado = valor1 * valor2;
			mostrarResultado('Operación multiplicar', valor1, valor2, operacion, resultado);
			break;
		case '/':
			if (valor2 !== 0) {
				resultado = valor1 / valor2;
				mostrarResultado('Operación dividir', valor1, valor2, operacion, resultado);
			} else {
				// Error al dividir por 0
				mensajeError(valor2, operacion);
			}
			break;
		default:
			mensajeError(valor2, operacion);
			break;
	}

	return resultado;
}

function mensajeError(valor2, operacion) {
	if (valor2 === 0 && operacion === '/') {
		alert(':( Error el divisor no puede ser ' + valor2 + ' . Por favor introduzca un valor válido para esta operación.');
		console.error(':( Error el divisor no puede ser ' + valor2 + ' . Por favor introduzca un valor válido para esta operación.');
	} else {
		alert(':( Error, se ha seleccionado una operación (' + operacion + ') no válida.');
		console.error(':( Error, se ha seleccionado una operación (' + operacion + ') no válida.');
	}
}

function mostrarResultado(texto, valor1, valor2, operacion, resultado) {
	alert(texto + ': \n\n' + valor1 + ' ' + operacion + ' ' + valor2 + ' = ' + resultado);
	console.log(valor1 + ' ' + operacion + ' ' + valor2 + ' = ' + resultado);
}

ingresarDatos();
ingresarDatos();
ingresarDatos();
ingresarDatos();
ingresarDatos();
ingresarDatos();
ingresarDatos();
