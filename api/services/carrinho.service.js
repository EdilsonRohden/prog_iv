const Carrinho = require('../models/carrinho.model')

const mapCarrinhos = new Map() // utilizem um map de (idCarrinho, List<ItemCarrinho>)

async function incluirItemCarrinho(idCarrinho, itemCarrinho) {
  itemCarrinho.isValid()

  verifyIdCarrinho(idCarrinho)

  if (!mapCarrinhos.has(idCarrinho)) {
    mapCarrinhos.set(idCarrinho, new Carrinho())
  }

  mapCarrinhos.get(idCarrinho).add(itemCarrinho)
  return mapCarrinhos.get(idCarrinho)
}

async function removerItemCarrinho(idCarrinho, itemCarrinho) {
  isThereACartWithId(idCarrinho)
  mapCarrinhos.get(idCarrinho).remove(itemCarrinho)
  return mapCarrinhos.get(idCarrinho)
}

async function totalizarCarrinho(idCarrinho, formaPagamento) {
  isThereACartWithId(idCarrinho)
  return mapCarrinhos.get(idCarrinho).totalize(formaPagamento)
}

function isThereACartWithId(idCarrinho) {
  verifyIdCarrinho(idCarrinho)
  if (!mapCarrinhos.has(idCarrinho)) {
    throw new Error(`Não existe nenhum carrinho com id: ${idCarrinho}`)
  }
}

function verifyIdCarrinho(idCarrinho) {
  if (!idCarrinho) {
    throw new Error('Id do carrinho não informado!')
  }
}

module.exports = { incluirItemCarrinho, removerItemCarrinho, totalizarCarrinho }
