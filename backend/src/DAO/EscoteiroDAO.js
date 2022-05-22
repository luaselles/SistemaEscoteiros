module.exports = class EscoteiroDAO{

    async listarNaoInscritas(id,db){
        const sql = "SELECT * from escoteiro where status = 0"
        const valores = [escoteiro.getstatus()]
        const result = await db.consulta(sql,valores);
        return result;
    }
}
