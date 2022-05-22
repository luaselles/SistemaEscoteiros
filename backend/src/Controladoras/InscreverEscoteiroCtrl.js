const Escoteiro = require('../Entidades/Escoteiro')
const db = require('../Database.js')

module.exports = {

    async InscreverEscoteiro(request, response){
        const escoteiro = {...request.params}
        const con = await db.conecta()
        let novo = await new Escoteiro().InscreverEscoteiro(escoteiro.id,db)
        novo.setstatus(1)
        await novo.alterar(db) 
        return response.json(novo)
    }

}