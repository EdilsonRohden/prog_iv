const products = new Map()

async function cadastrarProduto(produto) {
  // TODO executar o comando abaixo, caso alguns dos campos(codigo, nome, departamento, preco) não foi informado
  produto.isValid()

  // TODO verificar se produto existe na lista e caso contrario inseri-lo
  // TODO executar o comando abaixo, caso já exista um produto para o código informado
  addProduct(product)
}

async function buscarProdutoPorCodigo(codigoProduto) {
  // Consulta a lista e caso exista retorna o produto
  if (products.has(codigoProduto)) {
    return products.get(codigoProduto)
  }
  // TODO executar o comando abaixo, caso nenhum produto seja encontrado para o código informado
  throw new Error(`Nenhum produto encontrado com o código ${codigoProduto}`)
}

async function listarProdutos() {
  return products.values
}

function addProduct(product) {
  if (products.get(product.codigo)) {
    throw new Error(`Já existe um produto cadastrado com o código ${produto.codigo}`)
  }
  products.set(product.codigo, product)
}

module.exports = { cadastrarProduto, buscarProdutoPorCodigo, listarProdutos }
