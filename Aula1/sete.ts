import * as leitor from "readline-sync"

function main() {
    let tempoHoje: Number
    let tempoOntem: Number

    tempoHoje = leitor.questionFloat("Quando tempo voce gastou hoje no celular:")
    tempoOntem = leitor.questionFloat("Quanto tempo voce gastou ontem no celular:")

    console.log("Voce gastou mais tempo hoje no celular do que ontem" ,timeSpent(tempoHoje, tempoOntem));

}
main()

function timeSpent(tempoHoje, tempoOntem) {
    return tempoHoje > tempoOntem
}