const CaixaeventoDAO = require('../DAO/CaixaeventoDAO')

class Caixaevento {

    constructor(id, idevento, valor) {
        this.id = id;
        this.idevento = idevento;
        this.valor = valor;
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

    async gravar(db) {
        const resp = await new CaixaeventoDAO().gravar(this, db);
        this.id = resp.lastId;
    }

    async alterar(db) {
        await new CaixaeventoDAO().alterar(this, db)
    }

    async excluir(db) {
        await new CaixaeventoDAO().excluir(this, db)
    }

    async buscarId(id, db) {
        const result = await new CaixaeventoDAO().listarId(id, db)
        let obj = new Caixaevento(result.data[0].id, result.data[0].idevento, result.data[0].valor)
        return obj
    }

    async listar(db) {
        const result = await new CaixaeventoDAO().listar(db)
        let lista = []
        for (let i = 0; i < result.data.length; i++) {
            lista.push(new Caixaevento(result.data[i].id, result.data[i].idevento, result.data[i].valor))
        }
        return lista
    }
}
module.exports = Caixaevento;