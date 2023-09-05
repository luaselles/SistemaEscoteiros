import { Cabecalho } from './Cabecalho'
import { Menu } from './Menu'
import { Rodape } from './Rodape'
import { UncontrolledExample } from '../../components/carousel'
import '../../estilos/principal.css'

export function Pagina(props) {
    return (
        <div>
            <Cabecalho titulo="G.E. Guayporé" />
            <div className="corpo">
                {/* <aside>
                    <Menu itens={[{ rotulo: "Home", url: "/" },
                    { rotulo: "Produtos", url: "/produtos" },
                    { rotulo: "Eventos", url: "/eventos" },
                    { rotulo: "Escoteiros", url: "/escoteiros" },
                    { rotulo: "Inscritos", url: "/inscritos" },
                    { rotulo: "Receber Mensalidade", url: "/recebermensalidade" }]} />
                </aside> */}
                <div className="conteudo">
                    <UncontrolledExample></UncontrolledExample>

                    {/* {props.children} */}
                </div>
            </div>
            <Rodape />
        </div>
    );
}