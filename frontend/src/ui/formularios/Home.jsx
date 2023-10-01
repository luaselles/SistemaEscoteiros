import '../../estilos/home.css'
import { UncontrolledExample } from '../../components/carousel'


export default function Home(props) {

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

    // window.setInterval(gerarAutomatico, 180000)

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
    }

    return (

        <div class="container mb-2">
            <UncontrolledExample></UncontrolledExample>

            <div class="row mt-5">
                <div class="col-3">
                    <div class="card">

                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <div className="row">
                                <div className="col-10">
                                    <h5 class="card-title">Eventos</h5>
                                </div>
                                <div className="col-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78866b" class="bi bi-calendar-plus" viewBox="0 0 16 16">
                                        <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                    </svg>
                                </div>
                            </div>
                            <p class="card-text">Confira tudo sobre os <b>eventos</b> dos escoteiros.</p>
                            <a href="/eventos" class="btn btn-primary">

                                Tabela de Eventos</a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <div className="row">
                                <div className="col-10">
                                    <h5 class="card-title">Produtos</h5>
                                </div>
                                <div className="col-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78866b" class="bi bi-bag" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg>
                                </div>
                            </div>

                            <p class="card-text">Confira tudo sobre os <b>produtos</b> dos escoteiros.</p>
                            <a href="/Produtos" class="btn btn-primary">Tabela de Produtos</a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <div className="row">
                                <div className="col-10">
                                    <h5 class="card-title">Escoteiros</h5>

                                </div>
                                <div className="col-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78866b" class="bi bi-person-add" viewBox="0 0 16 16">
                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                        <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                                    </svg>
                                </div>
                            </div>
                            <p class="card-text">Confira tudo sobre os <b>escoteiros</b> cadastrados.</p>
                            <a href="/escoteiros" class="btn btn-primary">Tabela de Escoteiros</a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <div className="row">
                                <div className="col-10">
                                    <h5 class="card-title">Mensalidades</h5>
                                </div>
                                <div className="col-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78866b" class="bi bi-wallet2" viewBox="0 0 16 16">
                                        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                                    </svg>
                                </div>
                            </div>
                            <p class="card-text">Confira tudo sobre as <b>mensalidades</b>.</p>
                            <a href="/recebermensalidade" class="btn btn-primary">Receber mensalidades</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="cabecalho">
        //     <div className="div">
        //         <a className="aa" href="/Produtos">Tabela de Produtos</a>
        //         <a className="aa" href="/escoteiros">Tabela de Escoteiros</a>
        //         <a className="aa" href="/recebermensalidade">Receber mensalidades</a>
        //         <button id="botao" className="aa" onClick={() => fetchAbrirCaixa()}>
        //             Abrir caixa
        //         </button>
        //         <button id="botao1" className="aa" onClick={() => gerenciarMensalidades()}>
        //             Gerar Mensalidades
        //         </button>
        //     </div>
        //     <div>
        //         <h1>
        //             Example heading
        //             <Badge bg="secondary" as={Button}>
        //                 New
        //             </Badge>
        //         </h1>
        //     </div>
        // </div>
    );
}