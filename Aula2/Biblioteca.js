"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.obterDetalhes = function () {
        console.log("Titulo: ".concat(this.titulo, " | Autor: ").concat(this.autor, " | Ano de publicacao: ").concat(this.anoPublicacao));
    };
    return Livro;
}());
exports.Livro = Livro;
