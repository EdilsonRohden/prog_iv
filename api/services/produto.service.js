const produtos = new Map()

async function cadastrarProduto(produto) {
  // TODO verificar se produto existe na lista e caso contrario inseri-lo
  produtos.push(produto)
  return produto

  // TODO executar o comando abaixo, caso alguns dos campos(codigo, nome, departamento, preco) não foi informado
  throw new Error(`Nenhum valor informado para o campo ...`)

  // TODO executar o comando abaixo, caso já exista um produto para o código informado
  throw new Error(`Já existe um produto cadastrado com o código ${produto.codigo}`)
}

async function buscarProdutoPorCodigo(codigoProduto) {
  // TODO consultar produto na lista e retornar

  // TODO executar o comando abaixo, caso nenhum produto seja encontrado para o código informado
  throw new Error(`Nenhum produto encontrado com o código ${codigoProduto}`)
}

async function listarProdutos() {
  return produtos.slice()
}

module.exports = { cadastrarProduto, buscarProdutoPorCodigo, listarProdutos }
