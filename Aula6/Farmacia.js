"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farmacia = exports.Medicamento = void 0;
var leitor = require("readline-sync");
var Medicamento = /** @class */ (function () {
    function Medicamento(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }
    return Medicamento;
}());
exports.Medicamento = Medicamento;
var Farmacia = /** @class */ (function () {
    function Farmacia() {
        this.medicamentos = [];
    }
    Farmacia.prototype.VendaMedicamentos = function () {
        var nome = leitor.question.question("Informe o nome do remedio que deseja vender:");
        var qtd = leitor.questionInt("Quantos deste medicamento voce deseja:");
        var medicamento = this.medicamentos.find(function (m) { return m.nome == nome; });
        if (medicamento) {
            if (medicamento.quantidade >= qtd) {
                medicamento.quantidade -= qtd;
                console.log("Venda realizada: ".concat(qtd, " unidades de ").concat(medicamento.nome));
            }
            else {
                console.log(("Estoque insuficiente para a venda de ".concat(qtd, " unidade de ").concat(medicamento.nome)));
            }
        }
        else {
            console.log("Medicamento ".concat(nome, " nao encontrado."));
        }
    };
    Farmacia.prototype.comprarMedicamentos = function () {
        var nome = leitor.question("Informe o nome do medicamento que ira comprar:");
        var qtd = leitor.questionInt("A quantidade a ser comprada");
        var preco = leitor.questionInt("Informe o valor do medicamento:");
        var medicamento = this.medicamentos.find(function (m) { return m.nome == nome; });
        if (medicamento) {
            medicamento.quantidade += qtd;
            medicamento.preco = preco;
        }
        else {
            var novoMedicamento = new Medicamento(nome, qtd, preco);
            this.medicamentos.push(novoMedicamento);
        }
        console.log("Compra realizada ".concat(qtd, " unidades de ").concat(nome));
    };
    Farmacia.prototype.inserirMedicamento = function () {
        var nome = leitor.question("Informe o nome do medicamento que ira ser inserido:");
        var qtd = leitor.questionInt("A quantidade a ser inserida:");
        var preco = leitor.questionInt("Informe o valor do medicamento:");
        var novoMedicamento = new Medicamento(nome, qtd, preco);
        this.medicamentos.push(novoMedicamento);
        console.log("Medicamento ".concat(novoMedicamento.nome, " inserido no estoque."));
    };
    Farmacia.prototype.removerMedicamento = function () {
        var nome = leitor.question("Informe o nome do medicamento que ira ser removido:");
        var index = this.medicamentos.findIndex(function (m) { return m.nome == nome; });
        if (index !== -1) {
            this.medicamentos.splice(index, 1);
            console.log("Medicamento ".concat(nome, " removido do estoque"));
        }
        else {
            console.log("Medicamento ".concat(nome, " nao removido do estoque, verifique o nome inserio"));
        }
    };
    Farmacia.prototype.substituirMeicamento = function () {
        var nomeAntigo = leitor.question("Insira o nome do remedio a ser substituido:");
        var nomeNovo = leitor.question("Insira o nome do remedio a ser inserido no estoque:");
        var qtd = leitor.questionInt("A quantidade a ser inserida:");
        var preco = leitor.questionInt("Informe o valor do medicamento:");
        var medicamentoAntigo = this.medicamentos.find((function (m) { return m.nome === nomeAntigo; }));
        if (medicamentoAntigo) {
            medicamentoAntigo.quantidade -= qtd;
        }
    };
    Farmacia.prototype.visualizarEstoque = function () {
        console.log("Estoque de medicamentos:");
        this.medicamentos.forEach(function (medicamento) {
            console.log("Medicamento: ".concat(medicamento.nome));
            console.log("Quantidade: ".concat(medicamento.quantidade));
            console.log("Preco: ".concat(medicamento.preco));
        });
    };
    return Farmacia;
}());
exports.Farmacia = Farmacia;
