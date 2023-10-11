import { Calculadora} from "./Calculadora";
import * as leitor from "readline-sync"

function main() {
    cadastro()
}

function cadastro(){
    let calculadora1 = new Calculadora()
    calculadora1.setValores()
    console.log("Adicao:", calculadora1.getMais())
    console.log("Subtracao:", calculadora1.getMenos())
    console.log("Multiplicacao:", calculadora1.getMultiplicar())
    console.log("Divisao:", calculadora1.getDividir())
}

main()