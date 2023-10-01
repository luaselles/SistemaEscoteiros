module.exports = class EventoDAO {

    async gravar(evento, db) {
        let sql = "INSERT INTO evento (nomeevento, descricao, rua, bairro, cidade, num, data, resevento) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        const valores = [evento.getnomeEvent(), evento.getdescricao(), evento.getrua(), evento.getbairro(), evento.getcidade(), evento.getnum(), evento.getdata(), evento.getrespevento()]
        const result = await db.manipula(sql, valores)
        return result
    }

    async alterar(evento, db) {
        let sql = "UPDATE evento SET nomeevento = ?, descricao = ?, rua = ?, bairro = ?, cidade = ?, num = ?, data = ?, resevento = ? WHERE id = ?"
        const valores = [evento.getnomeEvent(), evento.getdescricao(), evento.getrua(), evento.getbairro(), evento.getcidade(), evento.getnum(), evento.getdata(), evento.getrespevento(), evento.getid()]
        const result = await db.manipula(sql, valores);
        return result
    }

    async excluir(evento, db) {
        let sql = "DELETE FROM evento WHERE id = ?"
        const valor = [evento.getid()]
        const result = await db.manipula(sql, valor)
        return result
    }

    async listar(db) {
        const sql = "SELECT * FROM evento"
        const result = await db.consulta(sql, null);
        return result;
    }

    async listarId(id, db) {
        const sql = "SELECT * from evento where id = ?"
        const valores = [id]
        const result = await db.consulta(sql, valores);
        return result;
    }

}