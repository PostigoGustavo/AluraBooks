let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivros()
const elementoParaInserirLivros = document.getElementById('livros')

async function getBuscarLivros() {
    const response = await fetch(endpointDaAPI)
    livros = await response.json()
    let livrosComDesconto = aplicarDesconto(livros)
    console.log(livros)
    exibirLivrosNaTela(livrosComDesconto)
}

