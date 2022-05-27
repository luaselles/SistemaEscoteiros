module.exports = class CaixaeventoDAO {

    async gravar(caixa, db) {
        let sql = "INSERT INTO caixaevento (idevento, valor) VALUES (?, ?)"
        const valores = [caixa.getIdevento(), caixa.getValor()]
        const result = await db.manipula(sql, valores)
        return result
    }

    async alterar(caixa, db) {
        let sql = "UPDATE caixaevento SET valor = ? WHERE id = ?"
        const valores = [caixa.getValor(), caixa.getId()]
        const result = await db.manipula(sql, valores);
        return result
    }

    async excluir(caixa, db) {
        let sql = "DELETE FROM caixaevento WHERE id = ?"
        const valor = [caixa.getId()]
        const result = await db.manipula(sql, valor)
        console.log(result)
        return result
    }

    async listar(db) {
        const sql = "SELECT * FROM caixaevento"
        const result = await db.consulta(sql, null);
        return result;
    }

    async listarId(id, db) {
        const sql = "SELECT * from caixaevento where id = ?"
        const valores = [id]
        const result = await db.consulta(sql, valores);
        return result;
    }

}