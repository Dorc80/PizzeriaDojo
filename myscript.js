let tipoCorteza = ['estilo chicago', 'lanzada a mano', 'tradicional', 'extra delgada', 'doble masa'];
let tipoSalsa = ['tradicional', 'marinara', 'tomate', 'BBQ'];
let quesos = ['mozzarella', 'feta', 'cheddar', 'parmesano'];
let salsas = ['pepperoni', 'salchicha', 'champiñones', 'aceitunas', 'cebollas', 'tocino', 'choclo'];

function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas
    return pizza;
}

function randomPizza() {
    let tipoCortezaR = tipoCorteza[Math.floor(Math.random() * tipoCorteza.length)];
    let tipoSalsaR = tipoSalsa[Math.floor(Math.random() * tipoSalsa.length)];
    let nroQuesos = Math.floor(Math.random() * quesos.length) + 1;
    let quesosR = [];
    for (var i = 0; i < nroQuesos; i++) {
        let queso = quesos[Math.floor(Math.random() * quesos.length)];
        if(!quesosR.includes(queso)) {
            quesosR.push(queso);
        }
    }
    let nroSalsas = Math.floor(Math.random() * salsas.length) + 1;
    let salsasR = [];
    for (var i = 0; i < nroSalsas; i++) {
        let salsa = salsas[Math.floor(Math.random() * salsas.length)];
        if(!salsasR.includes(salsa)) {
            salsasR.push(salsa);
        }
    }
    let pizza = pizzaOven(tipoCortezaR, tipoSalsaR, quesosR, salsasR);
    return pizza;
}


let pizza1 = pizzaOven(tipoCorteza[0], tipoSalsa[0], [quesos[0]], [salsas[0], salsas[1]]);
console.log(pizza1);
let pizza2 = pizzaOven(tipoCorteza[1], tipoSalsa[1], [quesos[0], quesos[1]], [salsas[2], salsas[3], salsas[4]]);
console.log(pizza2);
let pizza3 = pizzaOven(tipoCorteza[2], tipoSalsa[2], [quesos[2], quesos[3]], [salsas[4], salsas[5], salsas[6]]);
console.log(pizza3);
let pizza4 = pizzaOven(tipoCorteza[3], tipoSalsa[3], [quesos[1], quesos[3]], [salsas[2], salsas[5]]);
console.log(pizza4);
let pizza5 = randomPizza();
console.log(pizza5);