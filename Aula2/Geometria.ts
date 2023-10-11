export class Circulo {
    raio: number
    
    constructor (raio:number) {
        this.raio = raio
    }

    getCalculo():number {
        return Math.PI * this.raio * this.raio
    }   

}

export class Triangulo {
    base: number
    altura: number

    constructor (base:number, altura:number) {
        this.base = base
        this.altura = altura
    }

    getCalculo():number {
        return this.base * this.altura / 2
    }

}

export class Retangulo {
    base:number
    altura:number

    constructor (base:number, altura:number) {
        this.base = base
        this.altura = altura
    }
    
    getCalculo():number {
        return this.base * this.altura
    }
    
}