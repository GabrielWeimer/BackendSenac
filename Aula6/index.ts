
import {Farmacia} from "./Farmacia";
import * as leitor from "readline-sync"

let farmacia = new Farmacia()

function main (){
    menu()
}


function menu() {
    var continuar = true;
    while (continuar) {
        var pergunta: number = leitor.questionInt("1 - Vender Medicamento \n2 - Comprar estoque: \n3 - Substituir Medicamento \n4 - Remover Medicamento \n5 - Inserir medicamentos \n6 - Visualizar estoque \n7 - Sair \n");
        switch (pergunta) {
            case 1:
                farmacia.vendaMedicamentos();
                break;
            case 2:
                farmacia.comprarMedicamento();
                break;
            case 3:
                farmacia.substituirMedicamento();
                break;
            case 4:
                farmacia.removerMedicamento()
                break
            case 5: 
                farmacia.inserirMedicamento()
                break
            case 6:
                farmacia.visualizarEstoque()
                break
            case 7:
                continuar = false;
                break;
            default: 
                console.log(`Opcao invalida tente novamente`);
            
        }
    }
}

main()






