module.exports = class InscreverDAO {
    async inserir(inscricao, db) {
        let sql = "INSERT INTO inscricao (idescoteiro, qtdeirmaos, dataatual, status) VALUES (?, ?, ?, ?)"
        const valores = [inscricao.getEscoteiro().getId(), inscricao.getQtdeirmaos(), inscricao.getData(), inscricao.getStatus()]
        const result = await db.manipula(sql, valores)
        return result
    }
}