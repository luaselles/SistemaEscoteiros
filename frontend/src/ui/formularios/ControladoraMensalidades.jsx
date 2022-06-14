import { useState, useEffect } from "react";

import Cadastromensalidades from "./CadastroMensalidades";
import TabelaMensalidades from "./TabelaMensalidades";
import { Button, Spinner } from "react-bootstrap";

const localRecursos = 'http://localhost:4000/mensalidade';

export default function ControladoraMensalidades(props){
    const [mostrarTabela, setMostrarTabela] = useState(true);
    const [mensalidades, setmensalidades] = useState([]);

    const [foiCarregado,setFoiCarregado] = useState(false);

    const [erro, setErro] = useState(null);
    const [estaAtualizando, setEstaAtualizando] = useState(false);
    const [atualizandomensalidade,setAtualizandomensalidade] = useState({
        id:0,
        valor: 0,
        dataPag:"",
        dataVen:"",
        idEscoteiro:0,
        idinscricao:0,
    });

    function buscarmensalidades(){
        fetch(localRecursos,{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setFoiCarregado(true);
            setmensalidades(dados);
        }, 
        error =>{
            setFoiCarregado(true);
            setErro(error);
        });
    }

    function gravarmensalidade(mensalidade){
        if (!estaAtualizando){
            fetch(localRecursos,{method:"POST",
                                headers:{'Content-Type':'application/json'},
                                body:JSON.stringify(mensalidade)
            })
            .then(resposta=>resposta.json())
        }else{
            fetch(localRecursos,{method:"PUT",
                                 headers:{'Content-Type':'application/json'},
                                 body:JSON.stringify(mensalidade)
            })
            .then(resposta=>resposta.json())
            .then(retorno => {
                if (retorno.resultado){
                    alert('mensalidade atualizado com sucesso!');
                }
                else{
                    alert('Não foi possível atualizar o mensalidade!');
                }
                setEstaAtualizando(false);
            });
        }
    }

    function deletarmensalidade(mensalidade) {
        if (window.confirm("Deseja excluir o item?")){
        fetch(localRecursos + "/" + mensalidade.id, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        })
            .then(resposta => resposta.json())
            .then(retorno => {
                if (retorno.resultado) {
               
                }
                else {
                 
                }
                setEstaAtualizando(false);
            });
        }
    }
    function atualizarmensalidade(mensalidade) {
        setEstaAtualizando(true);
        setAtualizandomensalidade(mensalidade);
        setMostrarTabela(false);
    }

    useEffect(()=>{
        buscarmensalidades();
    },[mensalidades]);
    
    if(erro){
        return <div><p>Erro ao buscar mensalidades : {erro.message}</p></div>
    }else if(!foiCarregado){
        return <div>
                  <Spinner animation="border" role="status">
                     <span className="visually-hidden">Carregando mensalidades'...</span>
                  </Spinner>
               </div>
    }else{

        return (
            <div>
                <TabelaMensalidades mensalidades={mensalidades} atualizarmensalidade={atualizarmensalidade} deletarmensalidade={deletarmensalidade} />
            </div> 
            
                              
         );
    }
}