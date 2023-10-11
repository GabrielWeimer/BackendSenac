import { Aluno } from "./notas";
import * as leitor from "readline-sync"

function main(): void {
    cadastro()
}

function cadastro (){
    let nome = leitor.question("Insira o nome do aluno:")
    let aluno1 = new Aluno(nome)
    console.log(`Aluno criado com sucesso!`)
    aluno1.setNotas()
    aluno1.getMedia()
    return aluno1

}

main()






