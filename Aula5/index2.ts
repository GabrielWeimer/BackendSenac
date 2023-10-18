import { EmpresaDesenvolvimento } from "./EmpresaDesenvolvimento";
import * as leitor from "readline-sync"

let empresa

function main(){
    cadastrarEmpresa()
    menu()
}

function cadastrarEmpresa(){
    let nome = leitor.question("Digite o nome da empresa:")
    let endereco = leitor.question("Digite o endereco da empresa:")
    empresa = new EmpresaDesenvolvimento(nome, endereco)
}

function menu(){
    let continuar = true
    while(continuar){
        let pergunta: number = leitor.questionInt(`Menu da empresa ${empresa.nome} digite \n1 - Lista funcionarios da empresa \n2 - Contratar funcionario \n3 - Demitir funcionario \n4 - Endereco da empresa \n5 - Sair \n `)
        switch(pergunta){
            case 1:
                empresa.mostrarFuncionarios()
                break
            case 2:
                empresa.contratarFuncionario()
                break
            case 3:
                empresa.demitirFuncionario()
                break
            case 4:
                console.log(empresa.endereco);
                break
            case 5:
                continuar = false
                console.log("Saindo...");
                break
            default:
                console.log("Resposta nao encontrada.");
            break
        }
    }
}

main()