const Evento = require('../Entidades/Escoteiro')
const db = require('../Database.js')

module.exports = {

    async listarEventos(request, response) {
        const con = await db.conecta()
        let lista = []
        let novo = new Evento(null,null,null,null,null,null,null,null,null)
        lista = await novo.listar(db)
        
        return response.json(lista)
    }

    
}