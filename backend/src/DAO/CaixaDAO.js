module.exports = class CaixaDAO {

    async gravar(caixa, db) {
        let sql = "INSERT INTO caixa (valor, data, status) " +
            "VALUES (?, ?, ?)"
        const valores = [caixa.getvalor(), caixa.getdata(), caixa.getstatus()]
        const result = await db.manipula(sql, valores)
        return result
    }

    async alterar(caixa, db) {
        let sql = "UPDATE caixa SET valor = ? WHERE data = ?"
        const valores = [caixa.getvalor(), caixa.getdata()]
        const result = await db.manipula(sql, valores);
        return result
    }

    async excluir(caixa, db) {
        let sql = "DELETE FROM caixa WHERE data = ?"
        const valor = [caixa.getdata()]
        const result = await db.manipula(sql, valor)
        return result
    }

    async listar(db) {
        const sql = "SELECT * FROM caixa"
        const result = await db.consulta(sql, null);
        return result;
    }

    async listarId(id, db) {
        const sql = "SELECT * from caixa where data = ?"
        const valores = [id]
        const result = await db.consulta(sql, valores);
        return result;
    }

}