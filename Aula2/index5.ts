import {Circulo, Triangulo, Retangulo} from "./Geometria";
import * as leitor from "readline-sync"

function main() {
    cadastro()
}

function cadastro() {
    let pergunta = leitor.question("Voce deseja calcular a area de um 1)Circulo, 2)Triangulo ou 3)Retangulo:")
    if(pergunta === "1") {
        let raio = leitor.questionFloat("Digite o raio do circulo:")
        let circulo = new Circulo(raio)
        console.log("A area do seu triangulo e:", circulo.getCalculo())
    }
    else if(pergunta === "2"){
        let base = leitor.questionFloat("Digite a base do seu triangulo:")
        let altura = leitor.questionFloat("Digite a altura do seu triangulo:")
        let triangulo = new Triangulo(base, altura)
        console.log("A area do seu triangulo e:", triangulo.getCalculo());
    }
    else if(pergunta === "3"){
        let base = leitor.questionFloat("Digite a base do seu retangulo:")
        let altura = leitor.questionFloat("Digite a altura do seu retangulo:")
        let retangulo = new Retangulo(base, altura)
        console.log("A area do seu retangulo e:", retangulo.getCalculo())
    }
    else{
        console.log("Desculpe a opçao desejada nao foi encontrada.");
    }
        
}

main()