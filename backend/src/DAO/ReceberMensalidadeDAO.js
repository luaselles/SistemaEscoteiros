module.exports = class ProdutoDAO{

    //constructor(id,valor,dataPag,dataVen,idEscoteiro)

    async gravar(mensalidade, db) {
        let sql = "INSERT INTO mensalidade (valor, dataPag, dataVen, idEscoteiro) " +
            "VALUES (?, ?, ?, ?)"
        const valores = [mensalidade.getvalor(), mensalidade.getdataPag(), mensalidade.getdataVen(), mensalidade.getidEscoteiro()]
        const result = await db.manipula(sql, valores)
        return result
    }

    async alterar(mensalidade, db) {
        let sql = "UPDATE mensalidade SET valor = ?, dataPag = ?, dataVen = ?, idEscoteiro = ? WHERE id = ?"
        const valores = [mensalidade.getvalor(), mensalidade.getdataPag(), mensalidade.getdataVen(), mensalidade.getidEscoteiro(), mensalidade.getid()]
        const result = await db.manipula(sql, valores);
        return result
    }

    async excluir(mensalidade, db) {
        let sql = "DELETE FROM mensalidade WHERE id = ?"
        const valor = [mensalidade.getid()]
        const result = await db.manipula(sql, valor)
        console.log(result)
        return result
    }

    async listar(db) {
        const sql = "SELECT * FROM mensalidade"
        const result = await db.consulta(sql, null);   
        return result;
    }

    async listarId(id,db){
        const sql = "SELECT * from mensalidade where id = ?"
        const valores = [id]
        const result = await db.consulta(sql,valores);
        return result;
    }

}