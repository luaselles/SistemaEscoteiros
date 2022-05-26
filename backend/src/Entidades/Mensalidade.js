const MensalidadeDAO = require('../DAO/MensalidadeDAO')
class Mensalidade {

    constructor(id,valor,dataPag,dataVen,idEscoteiro,idinscricao){
        this.id = id;
        this.valor = valor;
        this.dataPag = dataPag;
        this.dataVen=dataVen;
        this.idEscoteiro=idEscoteiro;
        this.idinscricao=idinscricao;
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

    getdataPag(){
        return this.dataPag;
    }

    setdataPag(novadataPag){
        this.dataPag = novadataPag;
    }

    getdataVen(){
        return this.dataVen;
    }

    setdataVen(novadataVen){
        this.dataVen = novadataVen;
    }

     
    getidEscoteiro() {
        return this.idEscoteiro;
    }

    setidEscoteiro(novoidEscoteiro){
        this.idEscoteiro = novoidEscoteiro;
    }

    getidInscricao() {
        return this.idinscricao;
    }

    setidInscricao(novoidInsc){
        this.idinscricao = novoidInsc;
    }

    async gravar(db){
        const resp=await new MensalidadeDAO().gravar(this,db);
        this.id=resp.lastId; 
    }

    async alterar(db){
        await new MensalidadeDAO().alterar(this,db)
    }

    async excluir(db){
        await new MensalidadeDAO().excluir(this,db)
    }

    async buscarId(id,db){
        const result = await new MensalidadeDAO().listarId(id,db)
        let obj = new Mensalidade(result.data[i].id, result.data[0].valor, result.data[0].dataPag, result.data[0].dataVen, result.data[0].idEscoteiro, result.data[0].idinscricao)
        return obj
    }

    async listar(db){
        const result = await new MensalidadeDAO().listar(db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new Mensalidade(result.data[i].id, result.data[i].valor, result.data[i].dataPag, result.data[i].dataVen, result.data[i].idEscoteiro, result.data[i].idinscricao))
        }
        return lista
    }
}
module.exports = Mensalidade;