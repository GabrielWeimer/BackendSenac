"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var adulto = leitor.questionInt("Insira a quantidade de adultos que estao na festa:");
    var crianca = leitor.questionInt("Insira a quantidade de criancas que estao na festa:");
    console.log("The total party size is:", calculo(crianca, adulto));
}
function calculo(adulto, crianca) {
    return adulto + crianca;
}
main();
