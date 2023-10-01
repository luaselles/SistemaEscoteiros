const Mensalidade = require('../Entidades/Mensalidade')
const Inscrever = require('../Entidades/Inscrever')
const Escoteiro = require('../Entidades/Escoteiro')
const db = require('../Database.js')

module.exports =
{
    async GerarMensalidade(request, response) {
        const con = await db.conecta()
        let valor
        let lista = []
        let novo = new Inscrever(null, null, null, null, 0)
        lista = await novo.listarnaoinscritos(novo.getStatus(), db)
        lista.map(async (ins) => {
            if (ins.getQtdeirmaos() === 0) {
                valor = 30;
            }
            else if (ins.getQtdeirmaos() === 1) {
                valor = 21;
            }
            else {
                valor = 15;
            }
            const timeElapsed = Date.now();
            const dataatual = new Date(timeElapsed);
            if (dataatual.getMonth() === 12) {
                dataatual.setMonth(1)
            }
            else {
                dataatual.setMonth(dataatual.getMonth() + 2)
            }
            let aleatorio = new Date(2022 + "-" + "0" + dataatual.getMonth() + "-" + "11")
            ins.setEscoteiro(ins.Escoteiro.data)
            ins.setStatus(1)
            ins.alterar(db)
            let novo = new Mensalidade(null, valor, null, aleatorio, ins.Escoteiro[0].idescoteiro, ins.getIdInscricao())
            //let novo = await new Mensalidade().buscarId(mensalidade.id,db)
            await novo.gravar(db)
            //return response.json(novo)
        })
        return response.json("sucesso")
    },

    async gravarMensalidade(request, response) {
        const mensalidade = { ...request.body }
        const con = await db.conecta()
        let novo = new Mensalidade(null, mensalidade.valor, null, mensalidade.dataVen, mensalidade.idEscoteiro, mensalidade.idinscricao)
        await novo.gravar(db)
        return response.json(novo)
    }


}
