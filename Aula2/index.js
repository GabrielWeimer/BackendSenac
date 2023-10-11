"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var leitor = require("readline-sync");
function main() {
    var humano = metodos();
    var decisao = leitor.question("Voce gostaria de modificar o cadastro?(s/n)");
    if (decisao === "s") {
        editarCadastro(humano);
    }
    else {
        console.log("Obrigado, saindo...");
    }
}
function cadastro() {
    var nome = leitor.question("Insira seu nome aqui:");
    var CPF = leitor.question("Insira seu CPF aqui:");
    var RG = leitor.question("Insira seu RG aqui:");
    var cor = leitor.question("Insira sua cor aqui:");
    var idade = leitor.question("Insira sua idade aqui:");
    var humano1 = new Pessoa_1.Pessoa(nome, CPF, RG, cor, idade);
    return humano1;
}
function metodos() {
    var humano1 = cadastro();
    humano1.getNome();
    humano1.getCPF();
    humano1.getRG();
    humano1.getCor();
    humano1.getIdade();
    return humano1;
}
function editarCadastro(humano1) {
    humano1.setNome();
    humano1.setCPF();
    humano1.setRG();
    humano1.setCor();
    humano1.setIdade();
    humano1.getNome();
    humano1.getCPF();
    humano1.getRG();
    humano1.getCor();
    humano1.getIdade();
}
main();
