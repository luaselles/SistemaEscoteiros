module.exports = class MensalidadeDAO {

    //constructor(id,valor,dataPag,dataVen,idEscoteiro)

    async gravar(mensalidade, db) {
        let sql = "INSERT INTO mensalidade (valor, dataPag, dataVen, idEscoteiro, idinscricao) " +
            "VALUES (?, ?, ?, ?, ?)"
        const valores = [mensalidade.getvalor(), mensalidade.getdataPag(), mensalidade.getdataVen(), mensalidade.getidEscoteiro(), mensalidade.getidInscricao()]
        const result = await db.manipula(sql, valores)
        return result
    }

    async alterar(mensalidade, db) {
        let sql = "UPDATE mensalidade SET valor = ?, dataPag = ?, dataVen = ?, idEscoteiro = ?, idinscricao = ? WHERE id = ?"
        const valores = [mensalidade.getvalor(), mensalidade.getdataPag(), mensalidade.getdataVen(), mensalidade.getidEscoteiro(), mensalidade.getidInscricao(), mensalidade.getid()]
        const result = await db.manipula(sql, valores);
        return result
    }

    async excluir(mensalidade, db) {
        let sql = "DELETE FROM mensalidade WHERE id = ?"
        const valor = [mensalidade.getid()]
        const result = await db.manipula(sql, valor)
        return result
    }

    async listar(db) {
        const sql = "SELECT * FROM mensalidade"
        const result = await db.consulta(sql, null);
        return result;
    }

    async listarId(id, db) {
        const sql = "SELECT * from mensalidade where id = ?"
        const valores = [id]
        const result = await db.consulta(sql, valores);
        return result;
    }

    async listarContasEscoteiro(idEscoteiro, db) {
        const sql = "SELECT * from mensalidade where idEscoteiro = ?"
        const valores = [idEscoteiro]
        const result = await db.consulta(sql, valores);
        return result;
    }
}