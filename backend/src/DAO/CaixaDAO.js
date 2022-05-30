module.exports = class CaixaDAO{

    async gravar(caixa, db) {
        let sql = "INSERT INTO caixa (valor, data, datafechamento, status) " +
                  "VALUES (?, ?, ?, ?)"
        const valores = [caixa.getvalor(), caixa.getdata(), caixa.getdataFechamento(), caixa.getstatus()]
        const result = await db.manipula(sql, valores)
        return result
    }

    async alterar(caixa, db) {
        let sql = "UPDATE caixa SET valor = ?, data = ?, datafechamento = ?, status = ? WHERE id = ?"
        const valores = [caixa.getvalor(), caixa.getdata(), caixa.getdataFechamento(), caixa.getstatus(), caixa.getid()]
        const result = await db.manipula(sql, valores);
        return result
    }

    async excluir(caixa, db) {
        let sql = "DELETE FROM caixa WHERE id = ?"
        const valor = [caixa.getid()]
        const result = await db.manipula(sql, valor)
        console.log(result)
        return result
    }

    async listar(db) {
        const sql = "SELECT * FROM caixa"
        const result = await db.consulta(sql, null);   
        return result;
    }

    async listarId(id,db){
        const sql = "SELECT * from caixa where id = ?"
        const valores = [id]
        const result = await db.consulta(sql,valores);
        return result;
    }

}