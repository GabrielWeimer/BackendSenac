import * as leitor from "readline-sync"

export class Aluno {
    nome: String
    notas: Array<number> = []

    constructor(nome: String) {
        this.nome = nome
    }

    setNotas() {
        for(let i = 0; i < 3; i++){
        let notasAluno: number = leitor.questionFloat("Digite as notas deste aluno:")

        this.notas.push(notasAluno)
        }
    }

    getMedia() {
        let n1: number = this.notas[0]
        let n2: number = this.notas[1]
        let n3: number = this.notas[2]
        let media: number = (n1 + n2 + n3) /3

        console.log(`A media das notas do aluno foi: ${media}`)
        

    }
}