const Hamburguesas = [];

class Hamburguesa {
    constructor(nombre, precio, ingredientes, combo) {
        this.nombre = nombre;
        this.precio = precio.toFixed(2);
        this.ingredientes = ingredientes;
        this.combo = combo;
    }
}

const hamburguesa1 = new Hamburguesa('Krusty Burger', 150.0, ['Carne', 'Queso'], 1);
const hamburguesa2 = new Hamburguesa('Krusty Burger Doble', 225.0, ['Carne', 'Queso', 'Panceta'], 2);
const hamburguesa3 = new Hamburguesa('Krusty Pollo', 150.0, ['Pollo', 'Queso'], 3);
const hamburguesa4 = new Hamburguesa('Krusty Mega balde de Pollo', 140.0, ['Pollo', 'Queso', 'Aderezo'], 4);
const hamburguesa5 = new Hamburguesa('Super Krusty', 150.0, ['Carne', 'Queso', 'huevo'], 5);
const hamburguesa6 = new Hamburguesa('Super Krusty Doble', 180.0, ['Carne', 'Queso', 'huevo'], 6);
const hamburguesa7 = new Hamburguesa('Super Krusty Triple', 205.0, ['Carne', 'Queso', 'huevo'], 7);
const hamburguesa8 = new Hamburguesa('Krusty Vegan', 125.0, ['Espinaca', 'Soja'], 8);

Hamburguesas.push(hamburguesa1);
Hamburguesas.push(hamburguesa2);
Hamburguesas.push(hamburguesa3);
Hamburguesas.push(hamburguesa4);
Hamburguesas.push(hamburguesa5);
Hamburguesas.push(hamburguesa6);
Hamburguesas.push(hamburguesa7);
Hamburguesas.push(hamburguesa8);

console.log(Hamburguesas);
