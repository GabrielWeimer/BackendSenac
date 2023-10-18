import * as leitor from "readline-sync"

export class EmpresaDesenvolvimento{
    nome: String
    endereco: String
    funcionarios: Array<String> = ["Joao Silva", "Marcelo da Rosa", "Gabriel Souza", "Matheus Ribeiro"] 

    constructor(nome: String, endereco: String){
        this.nome = nome
        this.endereco = endereco
    }
    
    mostrarFuncionarios(){
        console.log("Funcionarios:")
        for(let i = 0; i < this.funcionarios.length; i++ ){
            console.log(`${this.funcionarios[i]}`);
        }
    }

    contratarFuncionario(){
        let pergunta: String = leitor.question("Qual o nome e sobrenome do funcionario:")
        this.funcionarios.push(pergunta)
        console.log("CONTRATADO!!!");
    }

    demitirFuncionario(){
        let pergunta: String = leitor.question("Nome do funcionario que deseja demitir:").toLowerCase()
        for(let i = 0; i < this.funcionarios.length; i++){
            if(pergunta === this.funcionarios[i].toLowerCase()){
                this.funcionarios.splice(i,1)
                console.log("DEMITIDO!!!");
            }
        }
    }
}