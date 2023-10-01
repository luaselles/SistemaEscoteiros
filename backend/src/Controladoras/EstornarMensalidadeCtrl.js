const Mensalidade = require('../Entidades/Mensalidade')
const db = require('../Database.js')
const Caixa = require('../Entidades/Caixa')

module.exports =
{

    async EstornarMensalidade(request, response) {
        const mensalidade = { ...request.params }
        const con = await db.conecta()
        const timeElapsed = Date.now();
        const data = new Date(timeElapsed);
        let novo = await new Mensalidade().buscarId(mensalidade.id, db)
        let novoc = await new Caixa().buscarId(data, db)
        novoc.setvalor(novoc.valor - novo.valor)
        await novoc.alterar(db)
        novo.setdataPag("NULL")
        await novo.alterar(db)
        return response.json(novo)
    },

    async listarContasEscoteiro(request, response) {
        const mensalidade = { ...request.body }
        const con = await db.conecta()
        let novo = new Mensalidade(null, null, null, mensalidade.idEscoteiro, null)
        await novo.listarContasEscoteiro(novo.getidEscoteiro(), db)
        return response.json(novo)
    },

    async listarContas(request, response) {
        const con = await db.conecta()
        let lista = []
        let novo = new Mensalidade(null, null, null, null, null, null)
        lista = await novo.listar(db)

        return response.json(lista)
    },

    async gravarMensalidade(request, response) {
        const mensalidade = { ...request.body }
        const con = await db.conecta()
        let novo = new Mensalidade(null, mensalidade.valor, null, mensalidade.dataVen, mensalidade.idEscoteiro, mensalidade.idinscricao)
        await novo.gravar(db)
        return response.json(novo)
    }
}