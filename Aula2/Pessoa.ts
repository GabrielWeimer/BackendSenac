
import * as leitor from "readline-sync"

export class Pessoa {
    nome: String
    cpf: Number;
    rg: Number
    cor: String
    idade: Number


    constructor(nome: String, cpf: Number, rg: Number, cor: String, idade: Number){
        this.nome = nome
        this.cpf = cpf
        this.rg = rg 
        this.cor = cor
        this.idade = idade


    }

    getNome(){
      console.log(`Olá meu nome é: ${this.nome}`)
        
    }

    getCPF(){
        console.log(`meu cpf é: ${this.cpf}`)
          
    }

    getRG(){
        console.log(`meu RG é: ${this.rg}`)
          
    }

    getCor(){
        console.log(`minha cor é: ${this.cor}`);
        
          
    }

    getIdade(){
        console.log(`minha idade é: ${this.idade}`);
        
          
    }

    setNome() {
        let nomeDois = leitor.question("Insira o novo nome:")
        this.nome = nomeDois
    }

    setCPF() {
        let CPFDois = leitor.question("Insira o novo CPF:")
        this.cpf = CPFDois
    }
    
    setRG() {
        let RGDois = leitor.question("Insira o novo RG:")
        this.rg = RGDois
    }

    setCor() {
        let CorDois = leitor.question("Insira a cor:")
        this.cor = CorDois
    }

    setIdade() {
        let IdadeDois = leitor.question("Insira a idade:")
        this.idade = IdadeDois
    }

    

}

