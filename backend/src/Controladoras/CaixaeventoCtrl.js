const Caixaevento = require('../Entidades/Caixaevento')
const db = require('../Database.js')

module.exports = {
    async listarCaixaeventoId(request, response) {
        const evento = { ...request.params }
        const con = await db.conecta()
        let lista = []
        let novo = new Caixaevento(null, evento.id, null, null, null, null)
        lista = await novo.listarIdevento(evento.id, db)
        return response.json(lista)
    },

    async gravarCaixaevento(request, response) {
        const caixaevento = { ...request.body }
        const con = await db.conecta()
        let novo = new Caixaevento(caixaevento.id, caixaevento.idevento, caixaevento.valor, caixaevento.descricao, caixaevento.data, caixaevento.operacao)
        await novo.gravar(db)
        return response.json(novo)
    },

}