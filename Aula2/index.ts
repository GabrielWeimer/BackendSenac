import { Pessoa } from "./Pessoa";
import * as leitor from "readline-sync"

function main(): void {
    const humano = metodos()
    let decisao = leitor.question("Voce gostaria de modificar o cadastro?(s/n)")
    if(decisao === "s"){
        editarCadastro(humano)
    }
    else {
        console.log("Obrigado, saindo...");
        
    }
    
}
function cadastro(): Pessoa {
let nome = leitor.question("Insira seu nome aqui:")
let CPF = leitor.question("Insira seu CPF aqui:")
let RG = leitor.question("Insira seu RG aqui:")
let cor = leitor.question("Insira sua cor aqui:")
let idade = leitor.question("Insira sua idade aqui:")
const humano1 = new Pessoa(nome, CPF, RG, cor, idade)
return humano1
}


function metodos(): Pessoa {
const humano1 = cadastro()
humano1.getNome()
humano1.getCPF()
humano1.getRG()
humano1.getCor()
humano1.getIdade()
return humano1
}


function editarCadastro(humano1 : Pessoa): void {
    humano1.setNome()
    humano1.setCPF()
    humano1.setRG()
    humano1.setCor()
    humano1.setIdade()
    humano1.getNome()
    humano1.getCPF()
    humano1.getRG()
    humano1.getCor()
    humano1.getIdade()
}

main()
