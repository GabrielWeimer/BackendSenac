function main () {
    let numero1: Number
    let numero2: Number
    let numero3: Number

    numero1 = 5
    numero2 = 3
    numero3 = 10

    console.log("Soma:" ,somar(numero1, numero2, numero3));
    console.log("Subtração:" ,subtrair(numero1, numero2, numero3));
    console.log("Multiplicação:" ,multiplicar(numero1, numero2, numero3));
    console.log("Divisão:" ,dividir(numero1, numero2, numero3));
    
}
main()

function somar(numero1, numero2, numero3): Number{
    return numero1 + numero2 + numero3
}

function subtrair(numero1, numero2, numero3): Number {
    return numero1 - numero2 - numero3
}

function multiplicar(numero1, numero2, numero3): Number {
    return numero1 * numero2 * numero3
}

function dividir(numero1, numero2, numero3): Number {
    return numero1 / numero2 / numero3
}