const EscoteiroDAO = require('../DAO/EscoteiroDAO')
class Escoteiro {

    constructor(idescoteiro,nomeEscoteiro,status){
        this.idescoteiro = idescoteiro;
        this.nomeEscoteiro = nomeEscoteiro;
        this.status = status;
    }


    getidescoteiro(){
        return this.idescoteiro;
    }

    setidescoteiro(novoId){
        this.idescoteiro = novoId;
    }

    getnomeEscoteiro(){
        return this.nomeEscoteiro;
    }

    setnomeEscoteiro(novoNome){
        this.nomeEscoteiro = novoNome;
    }

    getstatus(){
        return this.status;
    }

    setstatus(status){
        this.status = status;
    }

    async alterar(db){
        await new EscoteiroDAO().alterar(this,db)
    }

    async buscarId(id,db){
        const result = await new EscoteiroDAO().listarId(id,db)
        let obj = new Escoteiro(result.data[i].idescoteiro, result.data[0].nomeescoteiro, result.data[0].status)
        return obj
    }

    async listarnaoinscritos(db){
        const result = await new EscoteiroDAO().listarNaoInscritas(db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new Escoteiro(result.data[i].idescoteiro, result.data[i].nomeescoteiro, result.data[i].status))
        }
        return lista
    }
}