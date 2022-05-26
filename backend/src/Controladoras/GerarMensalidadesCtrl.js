const Mensalidade = require('../Entidades/Mensalidade')
const Inscrever = require('../Entidades/Inscrever')
const db = require('../Database.js')

module.exports = 
{
    async GerarMensalidade(request, response){
        const mensalidade = {...request.params}

        if(mensalidade)
        {

        }
        const data = date.getDate();
        const con = await db.conecta()
        let novo = await new Mensalidade().buscarId(mensalidade.id,db)
        novo.setdataPag(data)
        await novo.alterar(db) 
        return response.json(novo)
    },
}
