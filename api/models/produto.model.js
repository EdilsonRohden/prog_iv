class Produto {
  constructor(data) {
    this.codigo = data?.codigo
    this.nome = data?.nome
    this.departamento = data?.departamento
    this.preco = data?.preco
  }
}

module.exports = Produto
