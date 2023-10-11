import * as leitor from "readline-sync"

export class Calculadora {
    n1: number
    n2: number
    setValores() {
        let n1 = leitor.questionFloat("Digite o primeiro numero:") 
        let n2 = leitor.questionFloat("Digite o segundo numero:") 
        this.n1 = n1
        this.n2 = n2
       
    }

    getMais():number {
        return this.n1 + this.n2
    }

    getMenos():number {
        return this.n1 - this.n2
    }
    
    getMultiplicar():number { 
        return this.n1 * this.n2
    }
    
    getDividir():number {
        return this.n1 / this.n2
    }
}