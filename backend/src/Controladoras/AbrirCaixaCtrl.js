const Caixa = require('../Entidades/Caixa')
const db = require('../Database.js')

module.exports = 
{
    async AbrirCaixa(request, response){
        const caixa = {...request.params}
        const data = date.getDate();
        const con = await db.conecta()
        let novo = await new Caixa()//.buscarId(caixa.id,db)
        novo.setdata(data)
        novo.setvalor(0)
        novo.setstatus(1)
        await novo.gravar(db) 
        return response.json(novo)
    }

}