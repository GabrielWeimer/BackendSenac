"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Farmacia_1 = require("./Farmacia");
var leitor = require("readline-sync");
var farmacia = new Farmacia_1.Farmacia();
function main() {
    menu();
}
function menu() {
    var continuar = true;
    while (continuar) {
        var pergunta = leitor.questionInt("1 - Vender Medicamento \n2 - Comprar estoque: \n3 - Substituir Medicamento \n4 - Remover Medicamento \n5 - Inserir medicamentos \n6 - Visualizar estoque \n7 - Sair ");
        switch (pergunta) {
            case 1:
                farmacia.VendaMedicamentos;
                break;
            case 2:
                farmacia.comprarMedicamentos();
                break;
            case 3:
                farmacia.substituirMeicamento();
                break;
            case 4:
                farmacia.removerMedicamento();
                break;
            case 5:
                farmacia.inserirMedicamento();
                break;
            case 6:
                farmacia.visualizarEstoque();
                break;
            case 7:
                continuar = false;
                break;
            default:
                console.log("Opcao invalida tente novamente");
        }
    }
}
main();
