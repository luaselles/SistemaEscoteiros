const CaixaDAO = require('../DAO/CaixaDAO')
class Caixa {

    constructor(valor,data,status){
        this.valor = valor;
        this.data = data;
        this.status=status;
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

    async buscarId(data,db){
        const result = await new CaixaDAO().listarId(data,db)
        let obj = new Caixa(result.data[0].valor, result.data[i].data, result.data[0].status)
        return obj
    }

    async listar(db){
        const result = await new CaixaDAO().listar(db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new Caixa(result.data[i].valor, result.data[i].data, result.data[i].status))
        }
        return lista
    }
}
module.exports = Caixa;