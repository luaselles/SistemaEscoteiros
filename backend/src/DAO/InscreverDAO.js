module.exports = class InscreverDAO {
    async inserir(inscricao, db) {
        let sql = "INSERT INTO inscrever (idescoteiro, qtdeirmaos, dataatual, status) VALUES (?, ?, ?, ?)"
        const valores = [inscricao.getEscoteiro().getIdescoteiro(), inscricao.getQtdeirmaos(), inscricao.getData(), inscricao.getStatus()]
        const result = await db.manipula(sql, valores)
        return result
    }
}