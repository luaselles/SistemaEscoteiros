const Escoteiro = require('../Entidades/Escoteiro')
const db = require('../Database.js')

module.exports = {

    async InscreverEscoteiro(request, response){
        const escoteiro = {...request.params}
        const con = await db.conecta()
        console.log(escoteiro.id)
        let novo = await new Escoteiro().buscarId(escoteiro.id,db)
        novo.setstatus(1)
        await novo.alterar(db) 
        return response.json(novo)
    },

    async listarPorStatus(request, response){
        const escoteiro = {...request.body}
        const con = await db.conecta()
        let novo = new Escoteiro(null, null, null, null, null, null, escoteiro.status)
        await novo.listarPorStatus(novo.getstatus(),db)
        return response.json(novo)
    }

}