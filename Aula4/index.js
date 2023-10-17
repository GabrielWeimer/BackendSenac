"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var leitor = require("readline-sync");
var menu = true;
var carroEscolhido;
var camaro = new Carro_1.Carro(8, "Chevrolet", "Camaro", 2019);
var corsa = new Carro_1.Carro(15, "Chevrolet", "Corsa", 1999);
var fusca = new Carro_1.Carro(10, "Volkswagen", "Fusca", 1980);
var monza = new Carro_1.Carro(13, "Chevrolet", "Monza", 1990);
var lancer = new Carro_1.Carro(11, "Mitsubishi", "Lancer Evolution", 2020);
var civic = new Carro_1.Carro(13, "Honta", "Civic", 2018);
var corolla = new Carro_1.Carro(12, "Toyota", "Corolla", 2020);
var up = new Carro_1.Carro(12, "Ford", "UP", 2017);
var focus = new Carro_1.Carro(12, "Ford", "Focus", 2012);
var vectra = new Carro_1.Carro(10, "Chevrolet", "Vectra", 2005);
var carro = [camaro, corsa, fusca, monza, lancer, civic, corolla, up, focus, vectra];
while (menu) {
    var option = leitor.questionInt("Selecione uma opção: \n1 - Ver base de dados \n2 - Escolher carro \n3 - Sair \n:");
    switch (option) {
        case 1:
            console.log(carro);
            break;
        case 2:
            var nome = leitor.question("Digite o nome do carro: ");
            for (var i = 0; i < carro.length; i++) {
                if (nome === carro[i].modelo.toLowerCase()) {
                    carroEscolhido = carro[i];
                    carroEscolhido.getValues();
                }
            }
            var menu2 = true;
            while (menu2) {
                var opt = leitor.questionInt("1 - Abastecer \n2 - Viajar \n3 - Voltar ao menu principal \n:");
                switch (opt) {
                    case 1:
                        var gasolina = leitor.questionInt("Qual a quantidade de gasolina? ");
                        carroEscolhido.abastecer(gasolina);
                        break;
                    case 2:
                        var kms = leitor.questionInt("Qual a distancia você vai percorrer, em kms ");
                        carroEscolhido.viajar(kms);
                        break;
                    case 3:
                        console.log("Retornando ao menu principal!");
                        menu2 = false;
                        break;
                }
            }
            break;
        case 3:
            console.log("Saindo do sistema");
            menu = false;
            break;
    }
}
