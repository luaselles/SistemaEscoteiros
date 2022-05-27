const Inscrever = require('../Entidades/Inscrever')
const Escoteiro = require('../Entidades/Escoteiro')
const db = require('../Database.js')

module.exports = {
//0 não ativo (sem mensalidade)
//1 ativo (com mensalidade)
    async InscreverEscoteiro(request, response){
        const inscrever = {...request.body}
        console.log(inscrever)
        const con = await db.conecta()
        let novoEsco = await new Escoteiro().buscarIdescoteiro(inscrever.idescoteiro,db)
        const timeElapsed = Date.now();
        const dataatual = new Date(timeElapsed);
        let novoInsc = new Inscrever(null,novoEsco,inscrever.qtdeirmaos,dataatual,0)
        await novoInsc.inserir(db)
        return response.json(novoInsc)
    },

    async buscarId(request, response) {
        const inscrever = { ...request.params }
        console.log(inscrever)
        const con = await db.conecta()
        let novo = new Inscrever(inscrever.idinscricao, null, null, null, null)
        await novo.buscarIdinscricao(novo.getIdInscricao(), db)
        return response.json(novo)
    },

    async listarPorStatus(request, response){
        console.log("papi")
        const inscrever = {...request.params}
        const con = await db.conecta()
        let lista = []
        let novo = new Inscrever(null,null,null,null,inscrever.status)
        lista = await novo.listarnaoinscritos(novo.getStatus(),db)
        console.log(lista)
        return response.json(lista)
    },

    async listarn(request,response){
        const con = await db.conecta()
        let lista = []
        let novo = new Inscrever(null,null,null,null,null)
        lista = await novo.listarnaoinscritos(novo.getStatus(),db)
        console.log(lista)
        return response.json(lista)
    }
}