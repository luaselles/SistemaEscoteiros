const CaixaDAO = require('../DAO/CaixaDAO')
class Mensalidade {

    constructor(id,valor,data,status){
        this.id = id;
        this.valor = valor;
        this.data = data;
        this.status=status;
    }

    getid(){
        return this.id;
    }

    setid(novoId){
        this.id = novoId;
    }

    getvalor(){
        return this.valor;
    }

    setvalor(novoValor){
        this.valor = novoValor;
    }

    getdata(){
        return this.data;
    }

    setdata(novadata){
        this.data = novadata;
    }

    getstatus(){
        return this.status;
    }

    setstatus(novostatus){
        this.status = novostatus;
    }


    async gravar(db){
        const resp=await new CaixaDAO().gravar(this,db);
        this.id=resp.lastId; 
    }

    async alterar(db){
        await new CaixaDAO().alterar(this,db)
    }

    async excluir(db){
        await new CaixaDAO().excluir(this,db)
    }

    async buscarId(id,db){
        const result = await new CaixaDAO().listarId(id,db)
        let obj = new Caixa(result.data[i].id, result.data[0].valor, result.data[0].data, result.data[0].status)
        return obj
    }

    async listar(db){
        const result = await new CaixaDAO().listar(db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new Caixa(result.data[i].id, result.data[i].valor, result.data[i].data, result.data[i].status))
        }
        return lista
    }
}
module.exports = Caixa;