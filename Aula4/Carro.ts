export class Carro{
    consumo: number
    marca: String
    modelo: String
    ano: number
    combustivel: number 

    constructor(consumo: number, marca:String, modelo:String, ano:number){
        this.consumo = consumo
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.combustivel = 0
    }

    viajar(km: number){
        let viagem = this.combustivel - (km / this.consumo)
        if(viagem <= 0){
            console.log("Não é possivel fazer essa viagem abasteça seu carro!")
        }
        else {
            this.combustivel = viagem
            console.log(`Restaram ${this.combustivel} litros de gasolina`);
        }
    }

    abastecer(gasolina: number){
        this.combustivel += gasolina
        console.log(`Seu tanque está com ${this.combustivel} litros de gasolina`)
    }

    checarTanque(){
        console.log(`Seu tanque está com ${this.combustivel} litros de gasolina`)
    }
    
    getValues(): void{
        console.log(`Seu carro faz: ${this.consumo} por litro de gasolina. `);
        console.log(`A marca do seu carro e: ${this.marca}.`);
        console.log(`O modelo do seu carro e: ${this.modelo}`);
        console.log(`O ano do seu carro é: ${this.ano}`);
    }

}