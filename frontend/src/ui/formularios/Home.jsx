import '../../estilos/home.css'

export default function Home(props){
        async function fetchAbrirCaixa() {

        if (window.confirm("Deseja abrir o caixa?")){
        await fetch('http://localhost:4000/abrirCaixa',{method:"POST"})
        .then(resposta=>resposta.json())
        .catch(error =>{
            alert(error)
        });
            alert("Caixa aberto")
            document.getElementById("botao").disabled = true;
        }
    }

    async function fetchFecharCaixa() 
    {
        if (window.confirm("Deseja fechar o caixa?"))
        {
            await fetch('http://localhost:4000/fecharCaixa/1', {method:"PUT"})
            .then(resposta => resposta.json())
            .catch(error => {
                alert(error)
            });
            alert("Caixa fechado")
            document.getElementById("botao2").disabled = true;
        }
    }

    return(
        <div className="cabecalho">
            <div className="div">
                    <a className="aa1" href="/eventos">Tabela de Eventos</a>
                    <a className="aa" href="/Produtos">Tabela de Produtos</a>
                    <a className="aa" href="/escoteiros">Tabela de Escoteiros</a>
                    <a className="aa" href="/recebermensalidade">Mensalidades</a>
                    <button id="botao" className="aa" onClick={() => fetchAbrirCaixa()}>
                        Abrir caixa
                    </button>
                    <button id="botao2" className="aa" onClick={() => fetchFecharCaixa()}>
                        Fechar caixa
                    </button>
            </div>
        </div>
    );
}