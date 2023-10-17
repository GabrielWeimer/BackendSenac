"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(consumo, marca, modelo, ano) {
        this.consumo = consumo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.combustivel = 0;
    }
    Carro.prototype.viajar = function (km) {
        var viagem = this.combustivel - (km / this.consumo);
        if (viagem <= 0) {
            console.log("Não é possivel fazer essa viagem abasteça seu carro!");
        }
        else {
            this.combustivel = viagem;
            console.log("Restaram ".concat(this.combustivel, " litros de gasolina"));
        }
    };
    Carro.prototype.abastecer = function (gasolina) {
        this.combustivel += gasolina;
        console.log("Seu tanque est\u00E1 com ".concat(this.combustivel, " litros de gasolina"));
    };
    Carro.prototype.checarTanque = function () {
        console.log("Seu tanque est\u00E1 com ".concat(this.combustivel, " litros de gasolina"));
    };
    Carro.prototype.getValues = function () {
        console.log("Seu carro faz: ".concat(this.consumo, " por litro de gasolina. "));
        console.log("A marca do seu carro e: ".concat(this.marca, "."));
        console.log("O modelo do seu carro e: ".concat(this.modelo));
        console.log("O ano do seu carro \u00E9: ".concat(this.ano));
    };
    return Carro;
}());
exports.Carro = Carro;
