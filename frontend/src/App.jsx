import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { PaginaHome, PaginaProduto, PaginaEvento, PaginaCaixaevento, PaginaEscoteiro,PaginaRealizarInscricao,PaginaInscritos, PaginaReceberMensalidades, PaginaCaixa, Pagina404 } from './ui/Paginas'

import 'bootstrap/dist/css/bootstrap.min.css'
import TabelaCadastroMensalidades from './ui/formularios/TabelaCadastroMensalidades';

export default function App(props){
    return(
        <div>
            <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<PaginaHome/>}/>
                        <Route path="/produtos" element={<PaginaProduto/>}/>
                        <Route path="/eventos" element={<PaginaEvento/>}/>
                        <Route path="/caixaeventos" element={<PaginaCaixaevento/>}/>
                        <Route path="/escoteiros" element={<PaginaEscoteiro/>}/>
                        <Route path="/realizarinscricao" element={<PaginaRealizarInscricao/>}/>
                        <Route path="/inscritos" element={<PaginaInscritos/>}/>  
                        <Route path="/recebermensalidade" element={<PaginaReceberMensalidades/>}/>
                        <Route path="/abrirCaixa" element={<PaginaCaixa/>}/>
                        <Route component={Pagina404}/>
                    </Routes>
            </BrowserRouter>          
        </div>
    );
}