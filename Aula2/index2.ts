import { Livro } from "./Biblioteca";
import * as leitor from "readline-sync"

function main(){
    let livro = cadastro()
    console.log(livro.obterDetalhes())
}

function cadastro(){
    let titulo = leitor.question("Insira o título do livro: ")
    let autor = leitor.question("Insira o autor do livro: ")
    let anoPublicacao = leitor.questionInt("Insira o ano de publicacao do livro: ")
    let livro = new Livro(titulo, autor, anoPublicacao)
    return livro
}

main()
