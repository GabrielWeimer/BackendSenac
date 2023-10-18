import { Loja } from "./Loja";
import * as leitor from "readline-sync"

let loja

function main(){
    cadastrarLoja()
    menu()
}

function cadastrarLoja(){
    let nome = leitor.question("Digite o nome da sua loja:")
    let endereco = leitor.question("Digite o endereco da sua loja:")
    loja = new Loja(nome, endereco)
}

function menu(){
    let continuar = true
    while(continuar){
        let pergunta: number = leitor.questionInt(`Bem vindo a loja ${loja.nome} digite \n1 - Checar produtos \n2 - Adicionar produto \n3 - Remover produtos \n4 - Checar endereco da loja \n5 - Sair \n`)
        switch(pergunta){
            case 1:
                loja.getProdutos()
                break
            case 2:
                loja.adicionarProduto()
                break
            case 3:
                loja.removerProduto()
            case 4:
                console.log(`O endereco dessa loja é ${loja.endereco}`);
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