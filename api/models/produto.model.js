class Produto {
  constructor(data) {
    this.codigo = data?.codigo
    this.nome = data?.nome
    this.departamento = data?.departamento
    this.preco = data?.preco
  }

  isValid() {
    for (const value in this) {
      if (!this[value]) {
        throw new Error(`Nenhum valor informado para o campo ${value}`)
      }
    }
  }
}

module.exports = Produto
