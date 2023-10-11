import * as leitor from "readline-sync"

function main(){
    let nomeUsuario: String
    let sistema: string
    nomeUsuario = leitor.question("Digite o seu nome de usuario:")
    sistema = leitor.question("Digite o seu sistema operacional:")

    console.log(displayAlertMessage(sistema, nomeUsuario));
    
}
main()


function displayAlertMessage(a,b){
    console.log(`There's a new sign-in request on ${a} for your Google Account ${b}`);
}