"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var nomeUsuario;
    var sistema;
    nomeUsuario = leitor.question("Digite o seu nome de usuario:");
    sistema = leitor.question("Digite o seu sistema operacional:");
    console.log(displayAlertMessage(sistema, nomeUsuario));
}
main();
function displayAlertMessage(a, b) {
    console.log("There's a new sign-in request on ".concat(a, " for your Google Account ").concat(b));
}
