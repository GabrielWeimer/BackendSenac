"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Biblioteca_1 = require("./Biblioteca");
var leitor = require("readline-sync");
function main() {
    var livro = cadastro();
    console.log(livro.obterDetalhes());
}
function cadastro() {
    var titulo = leitor.question("Insira o título do livro: ");
    var autor = leitor.question("Insira o autor do livro: ");
    var anoPublicacao = leitor.questionInt("Insira o ano de publicacao do livro: ");
    var livro = new Biblioteca_1.Livro(titulo, autor, anoPublicacao);
    return livro;
}
main();
