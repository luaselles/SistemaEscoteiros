const ProdutoDAO = require('../DAO/ProdutoDAO')
class Produto {

    constructor(id,nomeProd,descricao,precoCusto,precoVenda,qtdEstoque){
        this.id = id;
        this.nomeProd = nomeProd;
        this.descricao = descricao;
        this.precoCusto=precoCusto;
        this.precoVenda=precoVenda;
        this.qtdEstoque=qtdEstoque;
    }

    getid(){
        return this.id;
    }

    setid(novoId){
        this.id = novoId;
    }

    getnomeProd(){
        return this.nomeProd;
    }

    setnomeProd(novoNome){
        this.nomeProd = novoNome;
    }

    getdescricao(){
        return this.descricao;
    }

    setdescricao(desc){
        this.descricao = desc;
    }

    getprecoCusto(){
        return this.precoCusto;
    }

    setprecoCusto(novoPrecoCusto){
        this.precoCusto = novoPrecoCusto;
    }

     
    getprecoVenda() {
        return this.precoVenda;
    }

    setprecoVenda(novoPrecoVenda){
        this.precoVenda = novoPrecoVenda;
    }

    getqtdEstoque(){
        return this.qtdEstoque;
    }

    setqtdEstoque(novaQtd){
        this.cidaqtdEstoquede = novaQtd;
    }

    async gravar(db){
        const resp=await new ProdutoDAO().gravar(this,db);
        this.id=resp.lastId; 
    }

    async alterar(db){
        await new ProdutoDAO().alterar(this,db)
    }

    async excluir(db){
        await new ProdutoDAO().excluir(this,db)
    }

    async buscarId(id,db){
        const result = await new ProdutoDAO().listarId(id,db)
        let obj = new Produto(result.data[i].id, result.data[0].nomeProd, result.data[0].descricao, result.data[0].precoCusto, result.data[0].precoVenda, result.data[0].qtdEstoque)
        return obj
    }

    async listar(db){
        const result = await new ProdutoDAO().listar(db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new Produto(result.data[i].id, result.data[i].nomeProd, result.data[i].descricao, result.data[i].precoCusto, result.data[i].precoVenda, result.data[i].qtdEstoque))
        }
        return lista
    }


}
module.exports = Produto;