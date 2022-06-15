const CaixaeventoDAO = require('../DAO/CaixaeventoDAO')

class Caixaevento {

    constructor(id, idevento, valor, descricao, data, operacao) {
        this.id = id;
        this.idevento = idevento;
        this.valor = valor;
        this.descricao = descricao;
        this.data = data;
        this.operacao = operacao;
    }

    getId() {
        return this.id;
    }

    setId(novoId) {
        this.id = novoId;
    }

    getIdevento() {
        return this.idevento;
    }

    setIdevento(novoIdevento) {
        this.idevento = novoIdevento;
    }

    getValor() {
        return this.valor;
    }

    setValor(novoValor) {
        this.valor = novoValor;
    }

    getDescricao() {
        return this.descricao;
    }

    setDescricao(novaDescricao) {
        this.descricao = novaDescricao;
    }

    getData() {
        return this.data;
    }

    setData(novaData) {
        this.data = novaData;
    }

    getOperacao() {
        return this.operacao;
    }

    setOperacao(novaOperacao) {
        this.operacao = novaOperacao;
    }

    async gravar(db) {
        const resp = await new CaixaeventoDAO().gravar(this, db);
    }
    
    async listarIdevento(id, db) {
        const result = await new CaixaeventoDAO().listarIdevento(id, db)
        let lista = []
        for (let i = 0; i < result.data.length; i++) {
            lista.push(new Caixaevento(result.data[i].id, result.data[i].idevento, result.data[i].valor, result.data[i].descricao, result.data[i].data, result.data[i].operacao))
        }
        return lista
    }
}
module.exports = Caixaevento;