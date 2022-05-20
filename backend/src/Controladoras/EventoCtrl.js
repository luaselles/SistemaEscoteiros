const Evento = require('../Entidades/Evento')
const db = require('../Database.js')

module.exports = {

    async listarId(request, response){
        const evento = {...request.body}
        const con = await db.conecta()
        let novo = new Evento(evento.id,null,null,null,null,null,null,null,null)
        await novo.listarId(novo.getid(),db)
        return response.json(novo)
    },

    async listarEventos(request, response) {
        const con = await db.conecta()
        let lista = []
        let novo = new Evento(null,null,null,null,null,null,null,null,null)
        lista = await novo.listar(db)
        console.log(lista)
        return response.json(lista)
    },

    async gravarEvento(request, response) {
        const evento =  {...request.body}
        const con = await db.conecta()
        let novo = new Evento(null,evento.nomeEvent,evento.descricao,evento.rua,evento.bairro,evento.cidade,evento.num,evento.data,evento.respevento)
        await novo.gravar(db)        
        return response.json(novo)
    },

    async alterarEvento(request, response) {
        const evento =  {...request.body}
        const con = await db.conecta()
        let novo = new Evento(evento.id,evento.nomeEvent,evento.descricao,evento.rua,evento.bairro,evento.cidade,evento.num,evento.data,evento.respevento)
        await novo.alterar(db)        
        return response.json(novo)
    },

    async excluirEvento(request, response) {
        const evento =  {...request.body}
        const con = await db.conecta()
        let novo = new Evento(evento.id,null,null,null,null,null,null,null,null)
        await novo.excluir(db)   
        return response.json(novo)
    },

}