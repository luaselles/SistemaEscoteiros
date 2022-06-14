import '../../estilos/home.css'

export default function Home(props){

    async function fetchAbrirCaixa() {

        const timeElapsed = Date.now();
        const data = new Date(timeElapsed);

        if (window.confirm("Deseja abrir o caixa?")) {
            await fetch('http://localhost:4000/abrirCaixa', { method: "POST" })
                .then(resposta => resposta.json())
                .catch(error => {
                    alert(error)
                });
            //setInterval(teste,86400000);
            alert("Caixa aberto (" + data + ")")
            document.getElementById("botao").disabled = true;
            
        }
    }


    window.setInterval(gerarAutomatico,180000)

    async function gerenciarMensalidades() {

        const timeElapsed = Date.now();
        const data = new Date(timeElapsed);

        if (window.confirm("Deseja Gerar Mensalidades aos Inscritos?")) {
            await fetch('http://localhost:4000/gerarmensalidade', { method: "GET" })
                .then(resposta => resposta.json())
                .catch(error => {
                    alert(error)
                });
            alert("Mensalidades Geradas (" + data + ")")
            document.getElementById("botao1").disabled = true;
        }
    }
    function teste(){
        document.getElementById("botao").disabled = false;
    }
    async function gerarAutomatico() {
        
        const timeElapsed = Date.now();
        const data = new Date(timeElapsed);
        
            await fetch('http://localhost:4000/gerarmensalidade', { method: "GET" })
                .then(resposta => resposta.json())
                .catch(error => {
                    alert(error)
                });
            alert("Mensalidades Geradas (" + data + ") estabelecida")
            document.getElementById("botao1").disabled = true;
     
        /*if (window.confirm("Deseja Gerar Mensalidades aos Inscritos?")) {
            await fetch('http://localhost:4000/gerarmensalidade', { method: "GET" })
                .then(resposta => resposta.json())
                .catch(error => {
                    alert(error)
                });
            alert("Mensalidades Geradas (" + data + ")")
            document.getElementById("botao1").disabled = true;
        }*/
        console.log(data)
    }

    return(
        <div className="cabecalho">
            <div className="div">
                    <a className="aa1" href="/eventos">Tabela de Eventos</a>
                    <a className="aa" href="/Produtos">Tabela de Produtos</a>
                    <a className="aa" href="/escoteiros">Tabela de Escoteiros</a>
                    <a className="aa" href="/recebermensalidade">Receber mensalidades</a>
                    <button id="botao" className="aa" onClick={() => fetchAbrirCaixa()}>
                        Abrir caixa
                    </button>
                    <button id="botao1" className="aa" onClick={() => gerenciarMensalidades()}>
                        Gerar Mensalidades
                    </button>
            </div>
        </div>
    );
}