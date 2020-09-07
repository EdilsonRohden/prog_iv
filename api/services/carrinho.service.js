const TotalCarrinho = require('../models/totalCarrinho.model.js');

const mapCarrinhos = new Map() // utilizem um map de (idCarrinho, List<ItemCarrinho>)

async function incluirItemCarrinho(idCarrinho, itemCarrinho){
    // TODO se carrinho nao existe, entao incluir novo carrinho no mapCarrinhos
    // Se carrinho ja contem o intem, entao adicionar a quantidade
    // caso contrario, inserir intem no carrinho

    // caso nao tenha sido informado alguns dos campos, entao retornar a exececao abaixo
    throw new Error(`Nenhum valor informado para o campo ...`)
}

async function removerItemCarrinho(idCarrinho, itemCarrinho){
    // TODO se carrinho nao existe, entao retornar o erro abaixo
    throw new Error(`Não existe nenhum carrinho com o id ${idCarrinho}`)


    // Diminuir a quantidade informada da quantidade do item adicionada ao carrinho
    // Caso a quantidade ficar zerada, entao remover item do carrinho
}

async function totalizarCarrinho(idCarrinho, formaPagamento){
    // TODO se carrinho nao existe, entao retornar o erro abaixo
    throw new Error(`Não existe nenhum carrinho com o id ${idCarrinho}`)

    // TODO Totalizar os itens do carrinho e aplicar desconto se forma de pagamento for Boleto
    // retornar object TotalCarrinho

    return new TotalCarrinho({
        valorBruto: 110, 
        desconto: 10,
        valorLiquido: 99
    })
}

module.exports = {incluirItemCarrinho, removerItemCarrinho, totalizarCarrinho}
