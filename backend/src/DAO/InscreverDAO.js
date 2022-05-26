module.exports = class InscreverDAO {
    async inserir(inscricao, db) {
        let sql = "INSERT INTO inscrever (idescoteiro, qtdeirmaos, dataatual, status) VALUES (?, ?, ?, ?)"
        const valores = [inscricao.getEscoteiro().getIdescoteiro(), inscricao.getQtdeirmaos(), inscricao.getData(), inscricao.getStatus()]
        const result = await db.manipula(sql, valores)
        return result
    }

    async buscarId(id, db) {
        const sql = "SELECT * from inscrever where idinscricao = ?"
        const valores = [id]
        const result = await db.consulta(sql, valores);
        return result;
    }
}