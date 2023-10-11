"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notas_1 = require("./notas");
var leitor = require("readline-sync");
function main() {
    var aluno = cadastro();
}
function cadastro() {
    var nome = leitor.question("Insira o nome do aluno:");
    var aluno1 = new notas_1.Aluno(nome);
    console.log("Aluno criado com sucesso!");
    aluno1.setNotas();
    aluno1.getMedia();
    return aluno1;
}
main();
