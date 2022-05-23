const EscoteiroDAO = require('../DAO/EscoteiroDAO')


class Escoteiro {

    constructor(id, nome, cpf, registro, telefone, secao) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.registro = registro;
        this.telefone = telefone;
        this.secao = secao;
    }

    get id() {
        return this.id;
    }
    set id(novoId) {
        this.id = novoId;
    }

    get nome() {
        return this.nome;
    }
    set nome(novoNome) {
        this.nome = novoNome;
    }

    get cpf() {
        return this.cpf;
    }
    set cpf(novoCpf) {
        this.cpf = novoCpf;
    }

    get registro() {
        return this.registro;
    }
    set registro(novoRegistro) {
        this.registro = novoRegistro;
    }

    get telefone() {
        return this.telefone;
    }
    set telefone(novoTelefone) {
        this.telefone = novoTelefone;
    }

    get secao() {
        return this.secao;
    }
    set secao(novaSecao) {
        this.secao = novaSecao;
    }

    async gravar(db) {
        const resp = await new EscoteiroDAO().gravar(this, db);
        this.id = resp.lastId;
    }

    async alterar(db) {
        await new EscoteiroDAO().alterar(this, db)
    }

    async excluir(db) {
        await new EscoteiroDAO().deletar(this, db)
    }

    async buscarId(id, db) {
        const result = await new EscoteiroDAO().listarId(id, db)
        let obj = new Escoteiro(result.data[i].id, result.data[0].nome, result.data[0].cpf, result.data[0].registro, result.data[0].telefone, result.data[0].secao)
        return obj
    }

    async listar(db) {
        const result = await new EscoteiroDAO().listar(db)
        let lista = []
        for (let i = 0; i < result.data.length; i++) {
            lista.push(new Escoteiro(result.data[i].id, result.data[i].nome, result.data[i].cpf, result.data[i].registro, result.data[i].telefone, result.data[i].secao,))
        }
        return lista
    }

}
module.exports = Escoteiro;