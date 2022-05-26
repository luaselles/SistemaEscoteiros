
import { Pagina } from "../templates/ui/Pagina";
import ControladoraCadastroProdutos from "./formularios/ControladoraCadastroProdutos";
import ControladoraCadastroEventos from "./formularios/ControladoraCadastroEventos";
import ControladoraCadastroEscoteiros from "./formularios/ControladoraCadastroEscoteiros";
import Home from "./formularios/Home";
import InscreverEscoteiros from "./formularios/InscreverEscoteiros";
import TabelaCadastroMensalidades from "./formularios/TabelaCadastroMensalidades";

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

export function PaginaInscreverEscoteiros(props){

    function manipulaSubmissaoDados(e){
        e.preventDefault();
    }

    return(
        <Pagina>
            <InscreverEscoteiros/>
        </Pagina>
    );
}

export function PaginaMensalidades(props){

    function manipulaSubmissaoDados(e){
        e.preventDefault();
    }

    return(
        <Pagina>
            <cadMensalidade/>
        </Pagina>
    );
}

export function Pagina404(props){
    return(
        <Pagina>
            <h1>Opss!! Página não existe!</h1>
        </Pagina>
    );
}

