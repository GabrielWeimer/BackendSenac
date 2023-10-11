"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var leitor = require("readline-sync");
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, cpf, rg, cor, idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.cor = cor;
        this.idade = idade;
    }
    Pessoa.prototype.getNome = function () {
        console.log("Ol\u00E1 meu nome \u00E9: ".concat(this.nome));
    };
    Pessoa.prototype.getCPF = function () {
        console.log("meu cpf \u00E9: ".concat(this.cpf));
    };
    Pessoa.prototype.getRG = function () {
        console.log("meu RG \u00E9: ".concat(this.rg));
    };
    Pessoa.prototype.getCor = function () {
        console.log("minha cor \u00E9: ".concat(this.cor));
    };
    Pessoa.prototype.getIdade = function () {
        console.log("minha idade \u00E9: ".concat(this.idade));
    };
    Pessoa.prototype.setNome = function () {
        var nomeDois = leitor.question("Insira o novo nome:");
        this.nome = nomeDois;
    };
    Pessoa.prototype.setCPF = function () {
        var CPFDois = leitor.question("Insira o novo CPF:");
        this.cpf = CPFDois;
    };
    Pessoa.prototype.setRG = function () {
        var RGDois = leitor.question("Insira o novo RG:");
        this.rg = RGDois;
    };
    Pessoa.prototype.setCor = function () {
        var CorDois = leitor.question("Insira a cor:");
        this.cor = CorDois;
    };
    Pessoa.prototype.setIdade = function () {
        var IdadeDois = leitor.question("Insira a idade:");
        this.idade = IdadeDois;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
