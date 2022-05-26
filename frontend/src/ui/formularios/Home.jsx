import '../../estilos/home.css'


export default function Home(props){
    return(
        <div className="cabecalho">
        <div className="div">
                <a className="aa1" href="/eventos">Tabela de Eventos</a>
                <a className="aa" href="/Produtos">Tabela de Produtos</a>
                <a className="aa" href="/escoteiros">Tabela de Escoteiros</a>
                <a className="aa" href="/inscreverescoteiro">Inscrever Escoteiros</a>
                <a className="aa" href="/recebermensalidade">Mensalidades</a>
        </div>
    </div>
    );
}