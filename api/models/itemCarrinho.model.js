const isValid = require('../utils/valid_obj')

class ItemCarrinho {
  constructor(data) {
    this.codigoProduto = data.codigoProduto
    this.quantidade = data.quantidade
    this.valor = data.valor
  }
  isValid() {
    // caso nao tenha sido informado alguns dos campos, entao retornar a exececao abaixo
    isValid(this)
  }
}

module.exports = ItemCarrinho
