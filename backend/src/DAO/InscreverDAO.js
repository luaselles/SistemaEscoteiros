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

    async buscarIdEscoteiro(id, db) {
        const sql = "SELECT * from inscrever where idescoteiro = ?"
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
        const sql = "SELECT * FROM escoteiro e WHERE NOT EXISTS (SELECT * FROM inscrever i WHERE e.idescoteiro = i.idescoteiro)"
        const valores = null
        const result = await db.consulta(sql,valores)
        return result
    }

    async alterar(inscricao,db){
        const sql = "UPDATE inscrever SET idescoteiro = ?, qtdeirmaos = ?, dataatual = ?, status = ? where idinscricao = ? "
        const valores = [inscricao.Escoteiro[0].idescoteiro, inscricao.getQtdeirmaos(), inscricao.getData(), inscricao.getStatus(), inscricao.getIdInscricao()]
        const result = await db.manipula(sql, valores)
        
        return result
    }

    async listarIdEscoteiro(id,db){
        const sql = "SELECT * from inscrever where idescoteiro = ?"
        const valores = [id]
        console.log(valores)
        const result = await db.consulta(sql,valores);
        return result;
    }

    async excluir(id,db){
        let sql = "DELETE FROM inscrever WHERE idinscricao = ?"
        const valor = [id]
        const result = await db.manipula(sql, valor)
        return result
    }
}