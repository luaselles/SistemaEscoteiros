const Escoteiro = require('../Entidades/Escoteiro')
const db = require('../Database.js')

module.exports = {

    async InscreverEscoteiro(request, response){
        const escoteiro = {...request.params}
        const con = await db.conecta()
        console.log(escoteiro.idescoteiro)
        let novo = await new Escoteiro().buscarId(escoteiro.id,db)
        novo.setstatus(1)
        await novo.alterar(db) 
        return response.json(novo)
    },

    async listarPorStatus(request, response){
        const escoteiro = {...request.params}
        const con = await db.conecta()
        let lista = []
        let novo = new Escoteiro(null,null,escoteiro.status)
        lista = await novo.listarnaoinscritos(novo.getstatus(),db)
        console.log(lista)
        return response.json(lista)
    }

}