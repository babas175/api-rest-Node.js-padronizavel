const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor')
const Sequelize = require('sequelize')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)