const Inscrever = require('../Entidades/Inscrever')
const Escoteiro = require('../Entidades/Escoteiro')
const db = require('../Database.js')

module.exports = {

    async InscreverEscoteiro(request, response){
        const inscrever = {...request.body}
        const con = await db.conecta()
        console.log(inscrever)
        let novoEsco = await new Escoteiro().buscarId(inscrever.Escoteiro,db)
        let novoInsc = new Inscrever().buscarId(null,novoEsco,inscrever.qtdeirmaos,inscrever.dataatual,inscrever.status)
        novoEsco.setStatus(1)
        await novoEsco.alterar(db) 
        await novoInsc.inserir(db)
        return response.json(novoInsc)
    }
}