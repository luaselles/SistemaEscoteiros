const Caixaevento = require('../Entidades/Caixaevento')
const Evento = require('../Entidades/Evento')
const db = require('../Database.js')

module.exports = {
    async listarCaixaevento(request, response) {
        const con = await db.conecta()
        let lista = []
        let novo = new Caixaevento(null, null, null)
        lista = await novo.listar(db)
        return response.json(lista)
    },

    async gravarCaixaevento(request, response) {
        const caixaevento = { ...request.body }
        const con = await db.conecta()
        let novo = new Caixaevento(caixaevento.id, caixaevento.idevento, caixaevento.valor)
        await novo.gravar(db)
        console.log(response.json(novo))
        return response.json(novo)
    },

    async alterarCaixaevento(request, response) {
        const caixaevento = { ...request.body }
        const con = await db.conecta()
        let novo = new Caixaevento(caixaevento.id, caixaevento.idevento, caixaevento.valor)
        await novo.alterar(db)
        return response.json(novo)
    },
}