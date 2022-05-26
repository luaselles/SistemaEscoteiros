const Mensalidade = require('../Entidades/Mensalidade')
const Inscrever = require('../Entidades/Inscrever')
const Escoteiro = require('../Entidades/Escoteiro')
const db = require('../Database.js')

module.exports = 
{
    async GerarMensalidade(request, response){
        const mensalidade = {...request.params}
        let valor
        
        let esc = await new Escoteiro().buscarIdescoteiro(mensalidade.idEscoteiro,db)
        let ins = await new Inscrever().buscarIdinscricao(mensalidade.idinscricao,db)
        if(ins.getQtdeirmaos() === 1)
        {
            valor = 30;
        }
        else if(ins.getQtdeirmaos()  >  2)
        {
            valor = 21;
        }
        else 
        {
            valor = 15;
        }
        const timeElapsed = Date.now();
        const dataatual = new Date(timeElapsed);
        if(dataatual.getMonth() === 12)
        {
            dataatual.setMonth(01)
        }
        else
        {
            dataatual.setMonth(dataatual.getMonth() + 2)
        }
        let aleatorio = new Date(2022 +"-"+ "0"+dataatual.getMonth() +"-"+  "11")
        console.log(aleatorio)

        let novo = new Mensalidade(null,valor, null, aleatorio, esc,ins)
        const con = await db.conecta()
        //let novo = await new Mensalidade().buscarId(mensalidade.id,db)
        await novo.gravar(db)
        return response.json(novo)
    }, 

    async gravarMensalidade(request, response) {
        const mensalidade =  {...request.body}
        const con = await db.conecta()
        let novo = new Mensalidade(null,mensalidade.valor,null,mensalidade.dataVen,mensalidade.idEscoteiro,mensalidade.idinscricao)   
        await novo.gravar(db)    
        console.log(novo)    
        return response.json(novo)
    }


}
