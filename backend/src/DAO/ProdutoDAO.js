module.exports = class ProdutoDAO {

    async gravar(produto, db) {
        let sql = "INSERT INTO produto (nomeProd, descricao, precoCusto, precoVenda, qtdEstoque) " +
            "VALUES (?, ?, ?, ?, ?)"
        const valores = [produto.getnomeProd(), produto.getdescricao(), produto.getprecoCusto(), produto.getprecoVenda(), produto.getqtdEstoque()]
        const result = await db.manipula(sql, valores)
        return result
    }

    async alterar(produto, db) {
        let sql = "UPDATE produto SET nomeProd = ?, descricao = ?, precoCusto = ?, precoVenda = ?, qtdEstoque = ? WHERE id = ?"
        const valores = [produto.getnomeProd(), produto.getdescricao(), produto.getprecoCusto(), produto.getprecoVenda(), produto.getqtdEstoque(), produto.getid()]
        const result = await db.manipula(sql, valores);
        return result
    }

    async excluir(produto, db) {
        let sql = "DELETE FROM produto WHERE id = ?"
        const valor = [produto.getid()]
        const result = await db.manipula(sql, valor)
        return result
    }

    async listar(db) {
        const sql = "SELECT * FROM produto"
        const result = await db.consulta(sql, null);
        return result;
    }

    async listarId(id, db) {
        const sql = "SELECT * from produto where id = ?"
        const valores = [id]
        const result = await db.consulta(sql, valores);
        return result;
    }

}