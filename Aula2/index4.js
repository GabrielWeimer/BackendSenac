"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculadora_1 = require("./Calculadora");
function main() {
    cadastro();
}
function cadastro() {
    var calculadora1 = new Calculadora_1.Calculadora();
    calculadora1.setValores();
    console.log("Adicao:", calculadora1.getMais());
    console.log("Subtracao:", calculadora1.getMenos());
    console.log("Multiplicacao:", calculadora1.getMultiplicar());
    console.log("Divisao:", calculadora1.getDividir());
}
main();
