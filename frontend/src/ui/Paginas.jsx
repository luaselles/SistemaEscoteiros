
import { Pagina } from "../templates/ui/Pagina";
import ControladoraCadastroProdutos from "./formularios/ControladoraCadastroProdutos";
import ControladoraCadastroEventos from "./formularios/ControladoraCadastroEventos";
import ControladoraCadastroCaixaeventos from "./formularios/ControladoraCadastroCaixaeventos";
import ControladoraCadastroEscoteiros from "./formularios/ControladoraCadastroEscoteiros";
import ControladoraMensalidades from "./formularios/ControladoraMensalidades";
import ControladoraInscritos from "./formularios/ControladoraInscritos";
import Home from "./formularios/Home";
import RealizarInscricao from "./formularios/RealizarInscricao";
import GerarMensalidade from "./formularios/GerarMensalidade";
import ReceberMensalidades from "./formularios/ReceberMensalidadades"
import TabelaCadastroMensalidades from "./formularios/TabelaCadastroMensalidades";
import TabelaMensalidades from "./formularios/TabelaMensalidades";

import { Button, Spinner, Modal, Form } from "react-bootstrap";
 
export function PaginaHome(props){
    
    return(
        <Pagina>
           <Home/>
        </Pagina>
                   
    );
}

export function PaginaProduto(props){

    function manipulaSubmissaoDados(e){
        e.preventDefault();
    }

    return(
        <Pagina>
            <ControladoraCadastroProdutos/>
        </Pagina>
    );
}

export function PaginaEvento(props){

    function manipulaSubmissaoDados(e){
        e.preventDefault();
    }

    return(
        <Pagina>
            <ControladoraCadastroEventos/>
        </Pagina>
    );
}

export function PaginaCaixaevento(props){

    function manipulaSubmissaoDados(e){
        e.preventDefault();
    }

    return(
        <Pagina>
            <ControladoraCadastroCaixaeventos/>
        </Pagina>
    );
}

export function PaginaEscoteiro(props){

    function manipulaSubmissaoDados(e){
        e.preventDefault();
    }

    return(
        <Pagina>
            <ControladoraCadastroEscoteiros/>
        </Pagina>
    );
}
export function PaginaInscritos(props){

    function manipulaSubmissaoDados(e){
        e.preventDefault();
    }

    return(
        <Pagina>
            <ControladoraInscritos/>
        </Pagina>
    );
}
export function PaginaGerarMensalidade(props){

    function manipulaSubmissaoDados(e){
        e.preventDefault();
    }

    return(
        <Pagina>
            <GerarMensalidade/>
        </Pagina>
    );
}


export function PaginaRealizarInscricao(props){

    function manipulaSubmissaoDados(e){
        e.preventDefault();
    }

    return(
        <Pagina>
            <RealizarInscricao/>
        </Pagina>
    );
}


export function PaginaReceberMensalidades(props){

    return(
        
        <Pagina>
            <ControladoraMensalidades/>
        </Pagina>
    );
}


export function PaginaCaixa(props){

    function manipulaSubmissaoDados(e){
        e.preventDefault();
    }

    async function fetchAbrirCaixa() {
        //const localRecursos = 'http://localhost:4000/caixa';
        if (window.confirm("Deseja abrir o caixa?")){
        await fetch('http://localhost:4000/abrirCaixa',{method:"POST"})
        .then(resposta=>resposta.json())
        .catch(error =>{
            alert(error)
        });
        alert("Caixa aberto")
        }
    }

    return(
        <Button onClick={() => fetchAbrirCaixa()}>
           Abrir caixa
        </Button>
    );
}

export function Pagina404(props){
    return(
        <Pagina>
            <h1>Opss!! Página não existe!</h1>
        </Pagina>
    );
}

