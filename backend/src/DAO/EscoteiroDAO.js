module.exports = class EscoteiroDAO {

    async gravar(escoteiro, db) {
        let sql = "INSERT INTO escoteiro (nome, cpf, registro, telefone, secao) VALUES (?, ?, ?, ?, ?, ?, ?)"
        const valores = [escoteiro.getNome(), escoteiro.getCpf(), escoteiro.getRegistro(), escoteiro.getTelefone(), escoteiro.getSecao()]
        const result = await db.manipula(sql, valores)
        return result
    }

    async alterar(escoteiro, db) {
        let sql = "UPDATE escoteiro SET nome = ?, cpf = ?, registro = ?, telefone = ?, secao = ? WHERE idescoteiro = ?"
        const valores = [escoteiro.getNome(), escoteiro.getCpf(), escoteiro.getRegistro(), escoteiro.getTelefone(), escoteiro.getSecao(), escoteiro.getIdescoteiro()]
        const result = await db.manipula(sql, valores);
        return result
    }

    async excluir(escoteiro, db) {
        let sql = "DELETE FROM escoteiro WHERE idescoteiro = ?"
        const valor = [escoteiro.getIdescoteiro()]
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
        const sql = "SELECT * from escoteiro where idescoteiro = ?"
        const valores = [id]
        console.log(valores)
        const result = await db.consulta(sql, valores);
        return result;
    }

    async listarIdInscricao(id,db){
        const sql = "SELECT * from inscrever where idinscricao = ?"
        const valores = [id]
        console.log(valores)
        const result = await db.consulta(sql,valores);
        return result;
    }

    async listarNaoInscritas(status,db){
        const sql = "SELECT * from inscricao where status = ?"
        const valores = [status]
        const result = await db.consulta(sql,valores);
        return result;
    }
}
