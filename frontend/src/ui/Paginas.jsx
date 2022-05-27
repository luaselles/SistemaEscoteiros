
import { Pagina } from "../templates/ui/Pagina";
import ControladoraCadastroProdutos from "./formularios/ControladoraCadastroProdutos";
import ControladoraCadastroEventos from "./formularios/ControladoraCadastroEventos";
import ControladoraCadastroEscoteiros from "./formularios/ControladoraCadastroEscoteiros";
import Home from "./formularios/Home";
import GerarMensalidade from "./formularios/GerarMensalidade";
import ListaInscrever from "./formularios/ListaInscrever";
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

export function PaginaListaInscrever(props){

    function manipulaSubmissaoDados(e){
        e.preventDefault();
    }

    return(
        <Pagina>
            <ListaInscrever/>
        </Pagina>
    );
}

export function PaginaReceberMensalidades(props){

    function manipulaSubmissaoDados(e){
        e.preventDefault();
    }

    return(
        <Pagina>
            <TabelaMensalidades/>
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

