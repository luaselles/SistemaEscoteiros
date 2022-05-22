const Produto = require('../Entidades/Produto')
const db = require('../Database.js')

module.exports = {

    /*constructor(id,nomeProd,descricao,precoCusto,precoVenda,qtdEstoque){*/

    async listarId(request, response){
        const produto = {...request.body}
        const con = await db.conecta()
        let novo = new Produto(produto.id,null,null,null,null,null)
        await novo.listarId(novo.getid(),db)
        return response.json(novo)
    },

    async listarProdutos(request, response) {
        const con = await db.conecta()
        let lista = []
        let novo = new Produto(null,null,null,null,null,null)
        lista = await novo.listar(db)
        
        return response.json(lista)
    },

    async gravarProduto(request, response) {
        const produto =  {...request.body}
        const con = await db.conecta()
        let novo = new Produto(null,produto.nomeProd,produto.descricao,produto.precoCusto,produto.precoVenda,produto.qtdEstoque)   
        await novo.gravar(db)    
        console.log(response.json(novo))    
        return response.json(novo)
    },

    async alterarProduto(request, response) {
        const produto =  {...request.body}
        const con = await db.conecta()
        let novo = new Produto(produto.id,produto.nomeProd,produto.descricao,produto.precoCusto,produto.precoVenda,produto.qtdEstoque) 
        await novo.alterar(db)        
        return response.json(novo)
    },

    async excluirProduto(request, response) {
        const produto =  {...request.params}
        const con = await db.conecta()
        let novo = new Produto(produto.id,null,null,null,null,null)
        await novo.excluir(db)   
        return response.json(novo)
    },

}