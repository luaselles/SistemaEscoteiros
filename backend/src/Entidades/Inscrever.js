const InscreverDAO = require('../DAO/InscreverDAO')
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

}
module.exports = Inscrever;