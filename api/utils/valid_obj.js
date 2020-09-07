module.exports = (obj) => {
  for (const value in obj) {
    if (!obj[value]) {
      throw new Error(`Nenhum valor informado para o campo: ${value}`)
    }
  }
}
