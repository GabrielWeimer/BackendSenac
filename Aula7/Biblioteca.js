"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaBiblioteca = void 0;
var leitor = require("readline-sync");
var Livro = /** @class */ (function () {
    function Livro(id, titulo, autor, anoPublicacao, quantidadeDisponivel) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.quantidadeDisponivel = quantidadeDisponivel;
    }
    return Livro;
}());
var Usuario = /** @class */ (function () {
    function Usuario(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.livrosEmprestados = [];
    }
    return Usuario;
}());
var SistemaBiblioteca = /** @class */ (function () {
    function SistemaBiblioteca() {
        this.usuarios = [];
        this.livros = [];
    }
    SistemaBiblioteca.prototype.cadastrarLivro = function () {
        var menu = true;
        while (menu) {
            var idLivro = leitor.questionInt("Informe o ID do livro: ");
            var titulo = leitor.question("Informe o título: ");
            var autor = leitor.question("Informe o autor: ");
            var anoPublicacao = leitor.questionInt("Informe o ano de publicação: ");
            var quantidadeDisponivel = leitor.questionInt("Qual a quantidade disponível? ");
            var livro = new Livro(idLivro, titulo, autor, anoPublicacao, quantidadeDisponivel);
            if (livro) {
                this.livros.push(livro);
                console.log("Livro cadastrado com sucesso!!");
                menu = false;
            }
            else {
                console.log("Ocorreu algum erro, tente novamente!");
            }
        }
    };
    SistemaBiblioteca.prototype.cadastrarUsuario = function () {
        var menu = true;
        while (menu) {
            var idUsuario = leitor.questionInt("Informe o ID do usuário: ");
            var nome = leitor.question("Informe o nome: ");
            var email = leitor.question("Informe o email: ");
            var usuario = new Usuario(idUsuario, nome, email);
            if (usuario) {
                this.usuarios.push(usuario);
                console.log("Usuário cadastrado com sucesso!!");
                menu = false;
            }
            else {
                console.log("Ocorreu algum erro, tente novamente!");
            }
        }
    };
    SistemaBiblioteca.prototype.emprestarLivro = function () {
        this.usuarios.forEach(function (user) {
            console.log("Identificador: [".concat(user.id, "] - Nome: ").concat(user.nome));
        });
        var iduser = leitor.questionInt("Insira o ID do usuário: ");
        var findUsuario = this.usuarios.findIndex(function (u) { return u.id === iduser; });
        this.livros.forEach(function (book) {
            console.log("Identificador: [".concat(book.id, " - T\u00EDtulo: ").concat(book.titulo, "]"));
        });
        var idbook = leitor.questionInt("Insira o ID do livro: ");
        var findLivro = this.livros.findIndex(function (l) { return l.id === idbook; });
        if (findLivro && findUsuario) {
            if (this.usuarios[findUsuario].livrosEmprestados.length < 3 && this.livros[findLivro].quantidadeDisponivel > 0) {
                console.log("Livro ".concat(this.livros[findLivro].titulo, " emprestado para ").concat(this.usuarios[findUsuario].nome, " com sucesso!"));
                this.livros[findLivro].quantidadeDisponivel -= 1;
                this.usuarios[findUsuario].livrosEmprestados.push(this.livros[findLivro]);
            }
            else if (this.livros[findLivro].quantidadeDisponivel <= 0) {
                console.log("Livro indispon\u00EDvel");
            }
            else {
                console.log("Quantidade de livros emprestados excedida.");
            }
        }
    };
    SistemaBiblioteca.prototype.devolverLivro = function () {
        this.usuarios.forEach(function (user) {
            console.log("Identificador: [".concat(user.id, "] - Nome: ").concat(user.nome));
        });
        var iduser = leitor.questionInt("Insira o ID do usuário: ");
        var findUsuario = this.usuarios.findIndex(function (u) { return u.id === iduser; });
        this.usuarios[findUsuario].livrosEmprestados.forEach(function (books) {
            console.log("Identificador: [".concat(books.id, " - T\u00EDtulo: ").concat(books.titulo, "]"));
        });
        var idbook = leitor.questionInt("Insira o ID do livro para devolução: ");
        var findLivro = this.livros.findIndex(function (l) { return l.id === idbook; });
        if (findLivro && findUsuario) {
            this.usuarios[findUsuario].livrosEmprestados.splice(findLivro, 1);
            this.livros[findLivro].quantidadeDisponivel += 1;
            console.log("Livro devolvido com sucesso");
        }
        else if (!findLivro) {
            console.log("Livro n\u00E3o encontrado");
        }
    };
    SistemaBiblioteca.prototype.consultarLivrosDisponiveis = function () {
        this.livros.forEach(function (books) {
            console.log("Livro: ".concat(books.titulo));
            console.log("Autor: ".concat(books.autor));
            console.log("Ano de Publica\u00E7\u00E3o: ".concat(books.anoPublicacao));
            console.log("Quantidade dispon\u00EDvel: ".concat(books.quantidadeDisponivel, "\n"));
        });
    };
    return SistemaBiblioteca;
}());
exports.SistemaBiblioteca = SistemaBiblioteca;
