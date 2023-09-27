import '../../estilos/home.css'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

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
    function teste() {
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

    return (

        <div class="container">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-plus-fill" viewBox="0 0 16 16">
                                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0z" />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
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