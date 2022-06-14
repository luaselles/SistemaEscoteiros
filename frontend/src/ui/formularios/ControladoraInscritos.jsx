import { useState, useEffect } from "react";

import TabelaInscritos from "./TabelaInscritos";
import { Button, Spinner, Modal, Form } from "react-bootstrap";


const localRecursos = 'http://localhost:4000/inscrever/status/0';

export default function ControladoraInscritos(props) {

    const [mostrarTabela, setMostrarTabela] = useState(true);
    const [inscritos, setinscritos] = useState([]);

    const [foiCarregado,setFoiCarregado] = useState(false);
    const [erro, setErro] = useState(null);
    
    function buscarinscritos(){
        fetch(localRecursos,{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setFoiCarregado(true);
            setinscritos(dados);
        }, 
        error =>{
            setFoiCarregado(true);
            setErro(error);
        });
    }

    useEffect(()=>{
        buscarinscritos();
    },[inscritos]);


    if(erro){
        return <div><p>Erro ao buscar inscritos : {erro.message}</p></div>
    }else if(!foiCarregado){
        return <div>
                  <Spinner animation="border" role="status">
                     <span className="visually-hidden">Carregando inscritos'...</span>
                  </Spinner>
               </div>
    }else{
        return (
            <div>
                <TabelaInscritos inscritos={inscritos}/> 
            </div>

        );
    }
}
