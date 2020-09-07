const TotalCarrinho = require('./totalCarrinho.model')

class Carrinho {
  constructor() {
    this.items = new Map()
    this.total = new TotalCarrinho()
  }

  add(itemCarrinho) {
    itemCarrinho.isValid()
    this._addOrSum(itemCarrinho)
    this.total.increment(itemCarrinho.quantidade * itemCarrinho.valor)
  }

  totalize(formaDePagamento) {
    if (formaDePagamento == 'BOLETO') {
      this.total.discount()
    }
    return this.total
  }

  remove(itemCarrinho) {
    itemCarrinho.isValid()
    this._removeOrDecrement(itemCarrinho)
  }

  _removeOrDecrement(itemCarrinho) {
    if (!this.items.has(itemCarrinho.codigoProduto)) {
      return
    }
    const item = this.items.get(itemCarrinho.codigoProduto)
    if (item.quantidade <= itemCarrinho.quantidade) {
      this.total.decrement(item.quantidade * item.valor)
      this.items.delete(itemCarrinho.codigoProduto)
      return
    }
    item.quantidade -= itemCarrinho.quantidade
    this.total.decrement(itemCarrinho.quantidade * itemCarrinho.valor)
  }

  _addOrSum(itemCarrinho) {
    if (this.items.has(itemCarrinho.codigoProduto)) {
      this.items.get(itemCarrinho.codigoProduto).quantidade += itemCarrinho.quantidade
      return
    }
    this.items.set(itemCarrinho.codigoProduto, itemCarrinho)
  }
}

module.exports = Carrinho
