const Caixa = require('../Entidades/Caixa.js')
const db = require('../Database.js');

module.exports = 
{
    async AbrirCaixa(request, response){
        const caixa = {...request.params}
        const timeElapsed = Date.now();
        const data = new Date(timeElapsed);
        const con = await db.conecta()
        let novo = await new Caixa()
        novo.setdata(data)
        novo.setvalor(0)
        novo.setstatus(1)
        console.log(novo)
        await novo.gravar(db) 
        return response.json(novo)
    },

    async FecharCaixa(request, response)
    {
        const caixa = {...request.params};
        const atual = buscarId(caixa.getid(), db);
        const dataFechamento = new Date(Date.now());
        atual.setdataFechamento(dataFechamento);
        atual.setstatus(0);
        await atual.alterar(db) 
        return response.json(atual)
    },

    async listarCaixa(request, response) {
        const con = await db.conecta()
        let lista = []
        let novo = new Caixa(null,null,null,null,null,null)
        lista = await novo.listar(db)
        
        return response.json(lista)
    },
}