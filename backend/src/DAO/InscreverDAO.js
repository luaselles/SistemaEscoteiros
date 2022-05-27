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

    async listarNaoInscritas(status,db){
        const sql = "SELECT * from inscrever where status = ?"
        const valores = [status]
        const result = await db.consulta(sql,valores);
        return result;
    }

    async listarIdInscricao(id,db){
        const sql = "SELECT * from inscrever where idinscricao = ?"
        const valores = [id]
        console.log(valores)
        const result = await db.consulta(sql,valores);
        return result;
    }

    async listarn(db){
        const sql = "Selecy * from inscrever as i inner join escoteiro where i.idescoteiro != e.idescoteiro"
        const valores = null
        const result = await db.consulta(sql,valores)
        return result
    }
}