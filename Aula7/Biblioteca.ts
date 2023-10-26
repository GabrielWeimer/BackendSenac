import * as leitor from "readline-sync"

class Livro {
    id: number
    titulo: string
    autor: string
    anoPublicacao: number
    quantidadeDisponivel: number
    constructor(id: number, titulo: string, autor: string, anoPublicacao: number, quantidadeDisponivel: number) {
        this.id = id
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.quantidadeDisponivel = quantidadeDisponivel
    }
}

class Usuario {
    id: number
    nome: string
    email: string
    livrosEmprestados: Array<Livro>
    constructor(id: number, nome: string, email: string) {
        this.id = id
        this.nome = nome
        this.email = email
        this.livrosEmprestados = []
    }
}

interface Biblioteca{
    cadastrarLivro()

    cadastrarUsuario()

    emprestarLivro()

    devolverLivro()

    consultarLivrosDisponiveis()

}

export class SistemaBiblioteca implements Biblioteca{
    usuarios: Array<Usuario>
    livros: Array<Livro>

    constructor(){
        this.usuarios = []
        this.livros = []
    }

    cadastrarLivro(): void {
        let menu = true
        while(menu){
            let idLivro: number =  leitor.questionInt("Informe o ID do livro: ")
            let titulo: string =  leitor.question("Informe o título: ")
            let autor: string =  leitor.question("Informe o autor: ")
            let anoPublicacao: number =  leitor.questionInt("Informe o ano de publicação: ")
            let quantidadeDisponivel: number =  leitor.questionInt("Qual a quantidade disponível? ")
            
            let livro: Livro = new Livro(idLivro, titulo, autor, anoPublicacao, quantidadeDisponivel)
            
            if (livro) {
                this.livros.push(livro)
                console.log("Livro cadastrado com sucesso!!")
                menu = false
            } else {
                console.log("Ocorreu algum erro, tente novamente!")
            }

        }
    }

    cadastrarUsuario(): void {
        let menu = true
        while(menu){
            let idUsuario:  number = leitor.questionInt("Informe o ID do usuário: ")
            let nome:       string = leitor.question("Informe o nome: ")
            let email:      string = leitor.question("Informe o email: ")
    
            let usuario: Usuario = new Usuario(idUsuario, nome, email)
    
            if (usuario) {
                this.usuarios.push(usuario)
                console.log("Usuário cadastrado com sucesso!!");
                menu = false
            } else {
                console.log("Ocorreu algum erro, tente novamente!");
            }
        }
    }

    emprestarLivro(): void {
        this.usuarios.forEach(user =>{
            console.log(`Identificador: [${user.id}] - Nome: ${user.nome}`);
        })

        let iduser: number = leitor.questionInt("Insira o ID do usuário: ")
        
        let findUsuario: number = this.usuarios.findIndex(u => u.id === iduser)
        
        this.livros.forEach(book =>{
            console.log(`Identificador: [${book.id} - Título: ${book.titulo}]`);
        })

        let idbook: number = leitor.questionInt("Insira o ID do livro: ")

        let findLivro: number = this.livros.findIndex(l => l.id === idbook)

        if (findLivro && findUsuario) {

            if (this.usuarios[findUsuario].livrosEmprestados.length < 3 && this.livros[findLivro].quantidadeDisponivel > 0) {

                console.log(`Livro ${this.livros[findLivro].titulo} emprestado para ${this.usuarios[findUsuario].nome} com sucesso!`);
                this.livros[findLivro].quantidadeDisponivel -= 1
                this.usuarios[findUsuario].livrosEmprestados.push(this.livros[findLivro])
                
            } else if (this.livros[findLivro].quantidadeDisponivel <= 0) {
                
                console.log(`Livro indisponível`);
                
            } else {

                console.log(`Quantidade de livros emprestados excedida.`);

            }

        }
    }

    devolverLivro(): void {
        this.usuarios.forEach(user =>{
            console.log(`Identificador: [${user.id}] - Nome: ${user.nome}`);
        })

        let iduser: number = leitor.questionInt("Insira o ID do usuário: ")

        let findUsuario: number = this.usuarios.findIndex(u => u.id === iduser)

        this.usuarios[findUsuario].livrosEmprestados.forEach(books =>{
            console.log(`Identificador: [${books.id} - Título: ${books.titulo}]`);
        })

        let idbook: number = leitor.questionInt("Insira o ID do livro para devolução: ")

        let findLivro: number = this.livros.findIndex(l => l.id === idbook)

        if (findLivro && findUsuario) {

            this.usuarios[findUsuario].livrosEmprestados.splice(findLivro, 1)
            this.livros[findLivro].quantidadeDisponivel += 1
            console.log(`Livro devolvido com sucesso`);

        } else if (!findLivro) {
    
            console.log(`Livro não encontrado`);
    
        } 
    }

    consultarLivrosDisponiveis(): void {

        this.livros.forEach(books => {
            console.log(`Livro: ${books.titulo}`);
            console.log(`Autor: ${books.autor}`);
            console.log(`Ano de Publicação: ${books.anoPublicacao}`);
            console.log(`Quantidade disponível: ${books.quantidadeDisponivel}\n`);
        })

    }
}