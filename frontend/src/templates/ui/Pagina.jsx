import { Cabecalho } from './Cabecalho'
import { Rodape } from './Rodape'
import '../../estilos/principal.css'

export function Pagina(props) {
    return (
        <div>
            <Cabecalho titulo="G.E. Guayporé" />
            <div className="corpo">
                <div className="conteudo">
                    {props.children}
                </div>
            </div>
            <Rodape />
        </div>
    );
}