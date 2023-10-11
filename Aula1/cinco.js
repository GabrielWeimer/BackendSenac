"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var numero1;
    var numero2;
    var numero3;
    numero1 = leitor.questionFloat("Digite o primeiro numero:");
    numero2 = leitor.questionFloat("Digite o segundo numero:");
    numero3 = leitor.questionFloat("Digite o terceiro numero:");
    console.log("Soma:", somar(numero1, numero2, numero3));
    console.log("Subtração:", subtrair(numero1, numero2, numero3));
    console.log("Multiplicação:", multiplicar(numero1, numero2, numero3));
    console.log("Divisão:", dividir(numero1, numero2, numero3));
}
main();
function somar(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3;
}
function subtrair(numero1, numero2, numero3) {
    return numero1 - numero2 - numero3;
}
function multiplicar(numero1, numero2, numero3) {
    return numero1 * numero2 * numero3;
}
function dividir(numero1, numero2, numero3) {
    return numero1 / numero2 / numero3;
}
