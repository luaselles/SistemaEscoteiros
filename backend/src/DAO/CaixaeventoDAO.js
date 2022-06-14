module.exports = class CaixaeventoDAO {

    async gravar(caixa, db) {
        let sql = "INSERT INTO caixaevento (idevento, valor, descricao, data, operacao) VALUES (?, ?, ?, ?, ?)"
        const valores = [caixa.getIdevento(), caixa.getValor(), caixa.getDescricao(), caixa.getData(), caixa.getOperacao()]
        const result = await db.manipula(sql, valores)
        return result
    }

    async listarIdevento(id, db) {
        const sql = "SELECT * FROM caixaevento WHERE idevento = ? ORDER BY data"
        const valores = [id]
        const result = await db.consulta(sql, valores);
        return result;
    }

}