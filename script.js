const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const tituloProdutoTamanho = document.getElementById('titulo-produto-tamanho')
const tituloProdutoCor = document.getElementById('titulo-produto-cor')
const nomeCorSelecionada = document.getElementById('nome-cor-selecionada')

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
}

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
}

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanho = ['41 mm', '45 mm']
const miniaturaImagens = [
    document.getElementById('0-imagem-miniatura'),
    document.getElementById('1-imagem-miniatura'),
    document.getElementById('2-imagem-miniatura') 
]

let imagemSelecionada = 1 
let tamanhoSelecionado = 1
let corSelecionada = 1

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    imagemSelecionada = idOpcaoSelecionada.charAt(0)
    imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg'
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'
}

function trocarTamanho() {
    // atualizar variável tamanhoSelecionado
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0)

    // mudar o conteúdo do título do produto
    tituloProdutoTamanho.innerText = opcoesTamanho[tamanhoSelecionado]

    //mudar o tamanho da imagem de acordo com o tamanho selecionado
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena')
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}

function trocarCor() {
    // atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
    corSelecionada = idOpcaoSelecionada.charAt(0)

    // trocar título da página
    tituloProdutoCor.innerText = opcoesCores[corSelecionada].nome
    
    // trocar nome da cor
    nomeCorSelecionada.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome

    // trocar imagens das miniaturas exibidas
    for (let i = 0; i < miniaturaImagens.length; i++) {
        miniaturaImagens[i].src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + i + '.jpeg'
    }

    // trocar imagem principal
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'

    // atualizar variável imagemSelecionada

}