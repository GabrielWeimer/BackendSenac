"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaDesenvolvimento = void 0;
var leitor = require("readline-sync");
var EmpresaDesenvolvimento = /** @class */ (function () {
    function EmpresaDesenvolvimento(nome, endereco) {
        this.funcionarios = ["Joao Silva", "Marcelo da Rosa", "Gabriel Souza", "Matheus Ribeiro"];
        this.nome = nome;
        this.endereco = endereco;
    }
    EmpresaDesenvolvimento.prototype.mostrarFuncionarios = function () {
        console.log("Funcionarios:");
        for (var i = 0; i < this.funcionarios.length; i++) {
            console.log("".concat(this.funcionarios[i]));
        }
    };
    EmpresaDesenvolvimento.prototype.contratarFuncionario = function () {
        var pergunta = leitor.question("Qual o nome e sobrenome do funcionario:");
        this.funcionarios.push(pergunta);
        console.log("CONTRATADO!!!");
    };
    EmpresaDesenvolvimento.prototype.demitirFuncionario = function () {
        var pergunta = leitor.question("Nome do funcionario que deseja demitir:").toLowerCase();
        for (var i = 0; i < this.funcionarios.length; i++) {
            if (pergunta === this.funcionarios[i].toLowerCase()) {
                this.funcionarios.splice(i, 1);
                console.log("DEMITIDO!!!");
            }
        }
    };
    return EmpresaDesenvolvimento;
}());
exports.EmpresaDesenvolvimento = EmpresaDesenvolvimento;
