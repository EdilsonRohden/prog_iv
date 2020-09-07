const isValid = require('../utils/valid_obj')

class TotalCarrinho {
  constructor() {
    this.valorBruto = 0
    this.desconto = 0
    this.valorLiquido = 0
  }
  increment(value) {
    this.valorBruto += value
    this.valorLiquido = this.valorBruto
  }
  decrement(value) {
    this.valorBruto -= value
    this.valorLiquido = this.valorBruto
  }
  discount() {
    this.desconto = this.valorBruto * 0.05
    this.valorLiquido = this.valorBruto - this.desconto
  }
  isValid() {
    isValid(this)
  }
}

module.exports = TotalCarrinho
