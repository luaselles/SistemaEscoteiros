import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { PaginaHome, PaginaProduto, PaginaEvento, PaginaEscoteiro, PaginaInscreverEscoteiros, PaginaReceberMensalidades, PaginaCaixa, Pagina404 } from './ui/Paginas'

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
                        <Route path="/escoteiros" element={<PaginaEscoteiro/>}/>
                        <Route path="/inscrever" element={<PaginaInscreverEscoteiros/>}/>
                        <Route path="/recebermensalidade" element={<PaginaReceberMensalidades/>}/>
                        <Route path="/abrirCaixa" element={<PaginaCaixa/>}/>
                        <Route component={Pagina404}/>
                    </Routes>
            </BrowserRouter>          
        </div>
    );
}