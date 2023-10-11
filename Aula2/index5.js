"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Geometria_1 = require("./Geometria");
var leitor = require("readline-sync");
function main() {
    cadastro();
}
function cadastro() {
    var pergunta = leitor.question("Você deseja calcular a area de um 1)Circulo, 2)Triangulo ou 3)Retangulo:");
    if (pergunta === "1") {
        var raio = leitor.questionFloat("Digite o raio do circulo:");
        var circulo = new Geometria_1.Circulo(raio);
        console.log("A area do seu triangulo e:", circulo.getCalculo());
    }
    else if (pergunta === "2") {
        var base = leitor.questionFloat("Digite a base do seu triangulo:");
        var altura = leitor.questionFloat("Digite a altura do seu triangulo:");
        var triangulo = new Geometria_1.Triangulo(base, altura);
        console.log("A area do seu triangulo e:", triangulo.getCalculo());
    }
    else if (pergunta === "3") {
        var base = leitor.questionFloat("Digite a base do seu retangulo:");
        var altura = leitor.questionFloat("Digite a altura do seu retangulo:");
        var retangulo = new Geometria_1.Retangulo(base, altura);
        console.log("A area do seu retangulo e:", retangulo.getCalculo());
    }
    else {
        console.log("Desculpe a opçao desejada nao foi encontrada.");
    }
}
main();
