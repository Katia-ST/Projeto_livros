const livros = require('./database')

// Pegar o input

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

// Se a resposta for SIM, mostra as categorias disponíveis e pergunta qual categoria ela quer

// Se a resposta for NÂO, mostra todos os livros em ordem crescente pela quantidade de páginas

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Moral', '/Produtividade', '/Romance policial', '/Estrategia', '/Medicina')

    const entradaCategoria = readline.question('Escolha uma categoria:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}