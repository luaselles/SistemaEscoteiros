const EscoteiroDAO = require('../DAO/EscoteiroDAO')
class Escoteiro {

    constructor(idescoteiro, nome, cpf, registro, telefone, secao) {
        this.idescoteiro = idescoteiro;
        this.nome = nome;
        this.cpf = cpf;
        this.registro = registro;
        this.telefone = telefone;
        this.secao = secao;
    }

    getIdescoteiro() {
        return this.idescoteiro;
    }
    setIdescoteiro(novoIdescoteiro) {
        this.idescoteiro = novoIdescoteiro;
    }

    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }

    getCpf() {
        return this.cpf;
    }
    setCpf(novoCpf) {
        this.cpf = novoCpf;
    }

    getRegistro() {
        return this.registro;
    }
    setRegistro(novoRegistro) {
        this.registro = novoRegistro;
    }

    getTelefone() {
        return this.telefone;
    }
    setTelefone(novoTelefone) {
        this.telefone = novoTelefone;
    }

    getSecao() {
        return this.secao;
    }
    setSecao(novaSecao) {
        this.secao = novaSecao;
    }

    async gravar(db) {
        const resp = await new EscoteiroDAO().gravar(this, db);
        this.idescoteiro = resp.lastId;
    }

    async alterar(db) {
        await new EscoteiroDAO().alterar(this, db)
    }

    async excluir(db) {
        await new EscoteiroDAO().deletar(this, db)
    }

    async buscarIdescoteiro(idescoteiro, db) {
        const result = await new EscoteiroDAO().listarId(idescoteiro, db)
        let obj = new Escoteiro(result.data[0].idescoteiro, result.data[0].nome, result.data[0].cpf, result.data[0].registro, result.data[0].telefone, result.data[0].secao)
        return obj
    }

    async listar(db) {
        const result = await new EscoteiroDAO().listar(db)
        let lista = []
        for (let i = 0; i < result.data.length; i++) {
            lista.push(new Escoteiro(result.data[i].idescoteiro, result.data[i].nome, result.data[i].cpf, result.data[i].registro, result.data[i].telefone, result.data[i].secao))
        }
        return lista
    }

}
module.exports = Escoteiro;