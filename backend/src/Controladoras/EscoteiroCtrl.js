const Escoteiro = require('../Entidades/Escoteiro')
const db = require('../Database.js')

module.exports = {

    async listarId(request, response) {
        const escoteiro = { ...request.params }
        const con = await db.conecta()
        let novo = new Escoteiro(escoteiro.idescoteiro, null, null, null, null, null)
        await novo.listarId(novo.getIdescoteiro(), db)
        return response.json(novo)
    },

    async listarEscoteiros(request, response) {
        const con = await db.conecta()
        let lista = []
        let novo = new Escoteiro(null, null, null, null, null, null)
        lista = await novo.listar(db)
        return response.json(lista)
    },

    async gravarEscoteiro(request, response) {
        const escoteiro = { ...request.body }
        const con = await db.conecta()
        let novo = new Escoteiro(null, escoteiro.nome, escoteiro.cpf, escoteiro.registro, escoteiro.telefone, escoteiro.secao)
        await novo.gravar(db)
        return response.json(novo)
    },

    async alterarEscoteiro(request, response) {
        const escoteiro = { ...request.body }
        const con = await db.conecta()
        let novo = new Escoteiro(escoteiro.idescoteiro, escoteiro.nome, escoteiro.cpf, escoteiro.registro, escoteiro.telefone, escoteiro.secao)
        await novo.alterar(db)
        return response.json(novo)
    },

    async excluirEscoteiro(request, response) {
        const escoteiro = { ...request.params }
        const con = await db.conecta()
        let novo = new Escoteiro(escoteiro.idescoteiro, null, null, null, null, null)
        await novo.excluir(db)
        return response.json(novo)
    },



}