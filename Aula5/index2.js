"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmpresaDesenvolvimento_1 = require("./EmpresaDesenvolvimento");
var leitor = require("readline-sync");
var empresa;
function main() {
    cadastrarEmpresa();
    menu();
}
function cadastrarEmpresa() {
    var nome = leitor.question("Digite o nome da empresa");
    var endereco = leitor.question("Digite o endereco da empresa");
    empresa = new EmpresaDesenvolvimento_1.EmpresaDesenvolvimento(nome, endereco);
}
function menu() {
    var continuar = true;
    while (continuar) {
        var pergunta = leitor.questionInt("Menu da empresa ".concat(empresa.nome, " digite \n1 - Lista funcionarios da empresa \n2 - Contratar funcionario \n3 - Demitir funcionario \n4 - Endereco da empresa \n5 - Sair "));
        switch (pergunta) {
            case 1:
                empresa.mostrarFuncionarios();
                break;
            case 2:
                empresa.contratarFuncionario();
                break;
            case 3:
                empresa.demitirFuncionario();
                break;
            case 4:
                console.log(empresa.endereco);
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
