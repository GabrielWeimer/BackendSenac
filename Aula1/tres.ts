import * as leitor from "readline-sync"

function main() {
    let adulto = leitor.questionInt("Insira a quantidade de adultos que estao na festa:")
    let crianca = leitor.questionInt("Insira a quantidade de criancas que estao na festa:")
    console.log(`The total party size is:`,calculo(crianca, adulto));
    

}

function calculo(adulto, crianca): Number {
    return adulto + crianca
}

main()