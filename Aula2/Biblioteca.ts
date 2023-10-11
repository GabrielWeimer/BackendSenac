export class Livro {
    titulo: String
    autor: String
    anoPublicacao: Number

    constructor(titulo: String, autor: String, anoPublicacao: Number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }

    obterDetalhes() {
        console.log(`Titulo: ${this.titulo} | Autor: ${this.autor} | Ano de publicacao: ${this.anoPublicacao}`)
        
    }
    

}   


