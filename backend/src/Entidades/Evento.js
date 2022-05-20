const EventoDAO = require('../DAO/EventoDAO')


class Evento {

    constructor(id,nomeEvent,descricao,rua,bairro,cidade,num,data,respevento){
        this.id = id;
        this.nomeEvent = nomeEvent;
        this.descricao = descricao;
        this.rua=rua;
        this.bairro=bairro;
        this.cidade=cidade;
        this.num=num;
        this.data=data;
        this.respevento=respevento;
    }


    getid(){
        return this.id;
    }

    setid(novoId){
        this.id = novoId;
    }

    getnomeEvent(){
        return this.nomeEvent;
    }

    setnomeEvent(novoNome){
        this.nomeEvent = novoNome;
    }

    getdescricao(){
        return this.descricao;
    }

    setdescricao(desc){
        this.descricao = desc;
    }

    
    getrua(){
        return this.rua;
    }

    setrua(rua){
        this.rua = rua;
    }

     
    getbairro(){
        return this.bairro;
    }

    setbairro(bairro){
        this.bairro = bairro;
    }

    getcidade(){
        return this.cidade;
    }

    setcidade(cidade){
        this.cidade = cidade;
    }

    getnum(){
        return this.num;
    }

    setnum(num){
        this.num = num;
    }


    getdata(){
        return this.data;
    }

    setdata(data){
        this.data = data;
    }

    getrespevento(){
        return this.respevento;
    }

    setrespevento(respevento){
        this.respevento = respevento;
    }

    async gravar(db){
        const resp=await new EventoDAO().gravar(this,db);
        this.id=resp.lastId; 
    }

    async alterar(db){
        await new EventoDAO().alterar(this,db)
    }

    async excluir(db){
        await new EventoDAO().deletar(this,db)
    }

    async buscarId(id,db){
        const result = await new EventoDAO().listarId(id,db)
        let obj = new Evento(result.data[i].id, result.data[0].nomeevento, result.data[0].descricao, result.data[0].rua, result.data[0].bairro, result.data[0].cidade, result.data[0].num, result.data[0].data, result.data[0].resevento)
        return obj
    }

    async listar(db){
        const result = await new EventoDAO().listar(db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new Evento(result.data[i].id, result.data[i].nomeevento, result.data[i].descricao, result.data[i].rua, result.data[i].bairro, result.data[i].cidade, result.data[i].num, result.data[i].data, result.data[i].resevento))
        }
        return lista
    }


}
module.exports = Evento;