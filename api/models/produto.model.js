const isValid = require('../utils/valid_obj')
class Produto {
  constructor(data) {
    this.codigo = data.codigo
    this.nome = data.nome
    this.departamento = data.departamento
    this.preco = data.preco
  }

  isValid() {
    isValid(this)
  }
}

module.exports = Produto
