import * as leitor from "readline-sync"

export class Loja{
nome: String
endereco: String
listaProdutos: Array<String> = ["Arroz", "Feijao", "Batata", "Pasta de dente", "Perfume", "Coca-Cola", "Alface"]

    constructor(nome: String, endereco:String){
        this.nome = nome
        this.endereco = endereco
    }

    getProdutos(){
        console.log("Produtos:")
        for(let i = 0; i < this.listaProdutos.length; i++ ){
            console.log(`${this.listaProdutos[i]}`);
        }
    }

    adicionarProduto(){
        let pergunta: String = leitor.question("Qual produto deseja adicionar:")
        this.listaProdutos.push(pergunta)
        console.log("Produto adicionado.");
    }

    removerProduto(){
        let pergunta: String = leitor.question("Qual produto deseja remover:").toLowerCase()
        for(let i = 0; i < this.listaProdutos.length; i++ ){
            if(pergunta === this.listaProdutos[i].toLowerCase()){
                this.listaProdutos.splice(i,1)
                console.log("Produto removido.");
            }
        }
    }
}