const Mensalidade = require('../Entidades/Mensalidade')
const db = require('../Database.js')

module.exports = 
{
    async ReceberMensalidade(request, response){
        const mensalidade = {...request.params}
        const data = date.getDate();
        const con = await db.conecta()
        let novo = await new Mensalidade().buscarId(mensalidade.id,db)
        novo.setdataPag(data)
        //console.log(novo)
        await novo.alterar(db) 
        return response.json(novo)
    },

    async listarContasEscoteiro(request, response){
        const mensalidade = {...request.body}
        const con = await db.conecta()
        let novo = new Mensalidade(null,null,null, mensalidade.idEscoteiro)
        await novo.listarContasEscoteiro(novo.getidEscoteiro(),db)
        return response.json(novo)
    },

    async listarContas(request, response){
        const mensalidade = {...request.body}
        const con = await db.conecta()
        let novo = new Mensalidade(mensalidade.id, null,null,null)
        await novo.listarContas(novo.getid(),db)
        return response.json(novo)
    }
}