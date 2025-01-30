function aplicarDesconto(livros) {
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco * 0.8}
    })
    return livrosComDesconto
}