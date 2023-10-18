"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
var leitor = require("readline-sync");
var Loja = /** @class */ (function () {
    function Loja(nome, endereco) {
        this.listaProdutos = ["Arroz", "Feijao", "Batata", "Pasta de dente", "Perfume", "Coca-Cola", "Alface"];
        this.nome = nome;
        this.endereco = endereco;
    }
    Loja.prototype.getProdutos = function () {
        console.log("Produtos:");
        for (var i = 0; i < this.listaProdutos.length; i++) {
            console.log("".concat(this.listaProdutos[i]));
        }
    };
    Loja.prototype.adicionarProduto = function () {
        var pergunta = leitor.question("Qual produto deseja adicionar");
        this.listaProdutos.push(pergunta);
        console.log("Produto adicionado.");
    };
    Loja.prototype.removerProduto = function () {
        var pergunta = leitor.question("Qual produto deseja remover:").toLowerCase();
        for (var i = 0; i < this.listaProdutos.length; i++) {
            if (pergunta === this.listaProdutos[i].toLowerCase()) {
                this.listaProdutos.splice(i, 1);
                console.log("Produto removido.");
            }
        }
    };
    return Loja;
}());
exports.Loja = Loja;
