module.exports = class EscoteiroDAO {

    async gravar(escoteiro, db) {
        let sql = "INSERT INTO escoteiro (nome, cpf, registro, telefone, secao, stauts) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        const valores = [escoteiro.getNome(), escoteiro.getCpf(), escoteiro.getRegistro(), escoteiro.getTelefone(), escoteiro.getSecao(), escoteiro.getStatus()]
        const result = await db.manipula(sql, valores)
        return result
    }

    async alterar(escoteiro, db) {
        let sql = "UPDATE escoteiro SET nome = ?, cpf = ?, registro = ?, telefone = ?, secao = ?, status = ? WHERE id = ?"
        const valores = [escoteiro.getNome(), escoteiro.getCpf(), escoteiro.getRegistro(), escoteiro.getTelefone(), escoteiro.getSecao(), escoteiro.getStatus(), escoteiro.getId()]
        const result = await db.manipula(sql, valores);
        return result
    }

    async excluir(escoteiro, db) {
        let sql = "DELETE FROM escoteiro WHERE id = ?"
        const valor = [escoteiro.getId()]
        const result = await db.manipula(sql, valor)
        console.log(result)
        return result
    }

    async listar(db) {
        const sql = "SELECT * FROM escoteiro"
        const result = await db.consulta(sql, null);
        return result;
    }

    async listarId(id, db) {
        const sql = "SELECT * from escoteiro where id = ?"
        const valores = [id]
        console.log(valores)
        const result = await db.consulta(sql, valores);
        return result;
    }

    async listarNaoInscritas(status,db){
        const sql = "SELECT * from escoteiro where status = ?"
        const valores = [status]
        const result = await db.consulta(sql,valores);
        return result;
    }
}
