"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Loja_1 = require("./Loja");
var leitor = require("readline-sync");
var loja;
function main() {
    cadastrarLoja();
    menu();
}
function cadastrarLoja() {
    var nome = leitor.question("Digite o nome da sua loja:");
    var endereco = leitor.question("Digite o endereco da sua loja:");
    loja = new Loja_1.Loja(nome, endereco);
}
function menu() {
    var continuar = true;
    while (continuar) {
        var pergunta = leitor.questionInt("Bem vindo a loja ".concat(loja.nome, " digite \n1 - Checar produtos \n2 - Adicionar produto \n3 - Remover produtos \n4 - Checar endereco da loja \n5 - Sair \n"));
        switch (pergunta) {
            case 1:
                loja.getProdutos();
                break;
            case 2:
                loja.adicionarProduto();
                break;
            case 3:
                loja.removerProduto();
            case 4:
                console.log("O endereco dessa loja \u00E9 ".concat(loja.endereco));
                break;
            case 5:
                continuar = false;
                console.log("Saindo...");
                break;
            default:
                console.log("Resposta nao encontrada.");
                break;
        }
    }
}
main();
