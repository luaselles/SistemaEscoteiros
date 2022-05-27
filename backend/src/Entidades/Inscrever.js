const InscreverDAO = require('../DAO/InscreverDAO')
const EscoteiroDAO = require('../DAO/EscoteiroDAO')
class Inscrever {

    constructor(idinscricao, Escoteiro, qtdeirmaos, dataatual,status) {
        this.idinscricao = idinscricao;
        this.Escoteiro = Escoteiro;
        this.qtdeirmaos = qtdeirmaos;
        this.dataatual = dataatual;
        this.status = status;
    }

    getIdInscricao() {
        return this.idinscricao;
    }
    setIdInscricao(novoIdInscricao) {
        this.idinscricao = novoIdInscricao;
    }

    getEscoteiro() {
        return this.Escoteiro;
    }
    setEscoteiro(novoIdEscoteiro) {
        this.Escoteiro = novoIdEscoteiro;
    }

    getQtdeirmaos() {
        return this.qtdeirmaos;
    }
    setQtdeirmaos(novoQtdeirmaos) {
        this.qtdeirmaos = novoQtdeirmaos;
    }

    getData() {
        return this.dataatual;
    }
    setData(novoData) {
        this.dataatual = novoData;
    }

    getStatus() {
        return this.status;
    }
    setStatus(novoStatus) {
        this.status = novoStatus;
    }

    async inserir(db) {
        const resp = await new InscreverDAO().inserir(this, db);
        this.idinscricao = resp.lastId;
    }

    async buscarIdinscricao(idinscricao, db) {
        console.log(idinscricao)
        const result = await new InscreverDAO().buscarId(idinscricao, db)
        let obj = new Inscrever(result.data[0].idinscricao, result.data[0].Escoteiro, result.data[0].qtdeirmaos, result.data[0].dataatual, result.data[0].status)
        return obj
    }

    async listarnaoinscritos(status,db) {
        const result = await new InscreverDAO().listarNaoInscritas(status,db)
        let lista = []
        console.log(result)
        for (let i = 0; i < result.data.length; i++) {
            lista.push(new Inscrever(result.data[i].idinscricao, await new EscoteiroDAO().listarId(result.data[i].idescoteiro,db) , result.data[i].qtdeirmaos, result.data[i].dataatual, result.data[i].status))
        }
        return lista
    }

    async listarn(db){
        const result = await new InscreverDAO().listarn(db)
        let lista = []
        console.log(result)
        for (let i = 0; i < result.data.length; i++) {
            lista.push(new Inscrever(result.data[i].idinscricao, await new EscoteiroDAO().listarId(result.data[i].idescoteiro,db) , result.data[i].qtdeirmaos, result.data[i].dataatual, result.data[i].status))
        }
        return lista
    }

    async alterar(db){
        await new InscreverDAO().alterar(this, db)
    }

    async listarIdEscoteiro(id,db){
        const result = await new InscreverDAO().listarIdEscoteiro(id, db)
        let obj = new Inscrever(result.data[0].idinscricao, result.data[0].Escoteiro, result.data[0].qtdeirmaos, result.data[0].dataatual, result.data[0].status)
        return obj
    }
}
module.exports = Inscrever;