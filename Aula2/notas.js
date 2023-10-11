"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var leitor = require("readline-sync");
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.notas = [];
        this.nome = nome;
    }
    Aluno.prototype.setNotas = function () {
        for (var i = 0; i < 3; i++) {
            var notasAluno = leitor.questionFloat("Digite as notas deste aluno:");
            this.notas.push(notasAluno);
        }
    };
    Aluno.prototype.getMedia = function () {
        var n1 = this.notas[0];
        var n2 = this.notas[1];
        var n3 = this.notas[2];
        var media = (n1 + n2 + n3) / 3;
        console.log("A media das notas do aluno foi: ".concat(media));
    };
    return Aluno;
}());
exports.Aluno = Aluno;
