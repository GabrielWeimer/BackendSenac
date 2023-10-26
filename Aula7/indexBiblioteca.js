"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Biblioteca_1 = require("./Biblioteca");
var leitor = require("readline-sync");
var continuar = true;
var biblioteca = new Biblioteca_1.SistemaBiblioteca();
while (continuar) {
    var opt = leitor.questionInt("Digite a opcao desejada \n1 - Cadastrar livro \n2 - Cadastrar usuario \n3 - Emprestar livro \n4 - Devolver livro \n5 - Ver livros disponiveis \n6 - Sair \n");
    switch (opt) {
        case 1:
            biblioteca.cadastrarLivro();
            break;
        case 2:
            biblioteca.cadastrarUsuario();
            break;
        case 3:
            biblioteca.emprestarLivro();
            break;
        case 4:
            biblioteca.devolverLivro();
            break;
        case 5:
            biblioteca.consultarLivrosDisponiveis();
            break;
        case 6:
            continuar = false;
            break;
        default:
            console.log("Opcao inserida nao encontrada.");
            break;
    }
}
