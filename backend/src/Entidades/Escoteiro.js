const EscoteiroDAO = require('../DAO/EscoteiroDAO')
class Escoteiro {

    constructor(id, nome, cpf, registro, telefone, secao, status) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.registro = registro;
        this.telefone = telefone;
        this.secao = secao;
        this.status = status;
    }

    getId() {
        return this.id;
    }
    setId(novoId) {
        this.id = novoId;
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

    getStatus() {
        return this.status;
    }
    setStatus(novoStatus) {
        this.status = novoStatus;
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
        console.log(result)
        let obj = new Escoteiro(result.data[0].id, result.data[0].nome, result.data[0].cpf, result.data[0].registro, result.data[0].telefone, result.data[0].secao)
        return obj
    }

    async listar(db) {
        const result = await new EscoteiroDAO().listar(db)
        let lista = []
        for (let i = 0; i < result.data.length; i++) {
            lista.push(new Escoteiro(result.data[i].id, result.data[i].nome, result.data[i].cpf, result.data[i].registro, result.data[i].telefone, result.data[i].secao))
        }
    }

    async listarnaoinscritos(status,db){
        const result = await new EscoteiroDAO().listarNaoInscritas(status,db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new Escoteiro(result.data[i].id, result.data[i].nome, result.data[i].cpf, result.data[i].registro, result.data[i].telefone, result.data[i].secao, result.data[i].status))
        }
        return lista
    }

}
module.exports = Escoteiro;