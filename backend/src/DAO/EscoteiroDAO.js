module.exports = class EscoteiroDAO{

    async alterar(escoteiro, db) {
        let sql = "UPDATE escoteiro SET nomeescoteiro = ?, status = ? WHERE idescoteiro = ?"
        const valores = [escoteiro.getnomeEscoteiro(), escoteiro.getstatus(), escoteiro.getidescoteiro()]
        const result = await db.manipula(sql, valores);
        return result
    }

    async listarId(id,db){
        const sql = "SELECT * from escoteiro where idescoteiro = ?"
        const valores = [id]
        const result = await db.consulta(sql,valores);
        return result;
    }

    async listarNaoInscritas(status,db){
        const sql = "SELECT * from escoteiro where status = 0"
        const valores = [escoteiro.getstatus()]
        const result = await db.consulta(sql,valores);
        return result;
    }
}
