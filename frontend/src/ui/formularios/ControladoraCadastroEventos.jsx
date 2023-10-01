import { useState, useEffect } from "react";

import CadastroEventos from "./CadastroEventos";
import TabelaCadastroEventos from "./TabelaCadastroEventos";
import { Button, Spinner, Modal, Form, Table } from "react-bootstrap";

const localRecursos = 'http://localhost:4000/evento'
const localRecursosCaixaevento = 'http://localhost:4000/caixaevento'


export default function ControladoraCadastroEventos(props) {
    const [mostrarTabela, setMostrarTabela] = useState(true);
    const [eventos, setEventos] = useState([]);

    const [foiCarregado, setFoiCarregado] = useState(false);
    const [erro, setErro] = useState(null);
    const [estaAtualizando, setEstaAtualizando] = useState(false);
    const [atualizandoEvento, setAtualizandoEvento] = useState({
        id: 0,
        nomeEvent: "",
        descricao: "",
        rua: "",
        bairro: "",
        cidade: "",
        num: 0,
        data: "",
        respevento: ""
    });

    function buscarEventos() {
        fetch(localRecursos, { method: "GET" })
            .then(resposta => resposta.json())
            .then(dados => {
                setFoiCarregado(true);
                setEventos(dados);
            },
                error => {
                    setFoiCarregado(true);
                    setErro(error);
                });

    }

    function gravarEvento(evento) {
        if (!estaAtualizando) {
            fetch(localRecursos, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(evento)
            })
                .then(resposta => resposta.json())
        } else {
            fetch(localRecursos, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(evento)
            })
                .then(resposta => resposta.json())
                .then(retorno => {
                    if (retorno.resultado) {
                        /*alert('Evento atualizado com sucesso!');*/
                    }
                    else {
                        /* alert('Não foi possível atualizar o Evento!');*/
                    }
                    setEstaAtualizando(false);
                });
        }
    }

    function deletarEvento(evento) {
        if (window.confirm("Deseja excluir o item?")) {
            fetch(localRecursos + "/" + evento.id, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
            })
                .then(resposta => resposta.json())
                .then(retorno => {
                    if (retorno.resultado) {

                    }
                    else {

                    }
                    setEstaAtualizando(false);
                });
        }
    }

    function atualizarEvento(evento) {
        setEstaAtualizando(true);
        setAtualizandoEvento(evento);
        setMostrarTabela(false);
    }


    const [show, setShow] = useState(false);
    const [showex, setShowex] = useState(false);
    const [caixaeventos, setCaixaeventos] = useState([]);
    const [caixaevento, setCaixaevento] = useState({
        id: 0,
        idevento: 0,
        valor: "",
        descricao: "",
        data: "",
        operacao: ""
    });

    function atualizarCaixaevento() {
        fetch(localRecursosCaixaevento, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(caixaevento)
        })
        setShow(false)
    }

    function atualizarValor(evento) {
        var data = new Date();
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        setCaixaevento({ id: 0, idevento: evento.id, valor: "", descricao: "", data: ano + '-' + mes + '-' + dia, operacao: "" });
        setShow(true);
    }

    function mostrarExtrato(evento) {
        fetch(localRecursosCaixaevento + "/" + evento.id, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })
            .then(resposta => resposta.json())
            .then(retorno => setCaixaeventos(retorno))
        setShowex(true);
    }

    function renderTabela() {
        var credito = 0
        var debito = 0
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Operação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {caixaeventos.map((caixa) => {
                            if (caixa.operacao == 'C')
                                credito = credito + parseFloat(caixa.valor)
                            else
                                debito = debito + parseFloat(caixa.valor)
                            return (
                                <tr key={caixa.id}>
                                    <td>{caixa.data}</td>
                                    <td>{caixa.descricao}</td>
                                    <td>{caixa.valor}</td>
                                    <td>{caixa.operacao}</td>
                                </tr>)
                        })}
                    </tbody>
                </Table>
                <p>Subtotal creditado = R${credito}</p>
                <p>Subtotal debitado = R${debito}</p>
                <p>Total do caixa = R${(credito - debito)}</p>
            </>
        )
    }

    useEffect(() => {
        buscarEventos();
    }, [eventos]);

    if (erro) {
        return <div><p>Erro ao buscar eventos : {erro.message}</p></div>
    } else
        if (!foiCarregado) {
            return <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando Eventos'...</span>
                </Spinner>
            </div>
        } else {

            return (
                <div>
                    <Modal show={showex} onHide={() => setShowex(false)} renderTabela={renderTabela}>
                        <Modal.Header closeButton>
                            <Modal.Title>Extrato do caixa de evento:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {renderTabela()}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowex(false)}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Insira o valor à ser Debitado ou Creditado.</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Valor</Form.Label>
                                    <Form.Control
                                        id="valor"
                                        type="text"
                                        placeholder="Valor"
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control
                                        id="descricao"
                                        type="text"
                                        placeholder="Descrição"
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShow(false)}>
                                Fechar
                            </Button>
                            <Button variant="danger" onClick={() => { caixaevento.valor = document.getElementById("valor").value; caixaevento.descricao = document.getElementById("descricao").value; caixaevento.operacao = "D"; atualizarCaixaevento(); }}>
                                Debitar
                            </Button>
                            <Button variant="success" onClick={() => { caixaevento.valor = document.getElementById("valor").value; caixaevento.descricao = document.getElementById("descricao").value; caixaevento.operacao = "C"; atualizarCaixaevento(); }}>
                                Creditar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {mostrarTabela ? <TabelaCadastroEventos eventos={eventos} atualizarEvento={atualizarEvento} deletarEvento={deletarEvento} atualizarValor={atualizarValor} mostrarExtrato={mostrarExtrato} /> :
                        <CadastroEventos onGravar={gravarEvento} evento={atualizandoEvento} />}


                    <div class="row">
                        <div class="col-10"></div>
                        <div class="col-2 mb-2">
                            <Button onClick={() => setMostrarTabela(!mostrarTabela)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-plus" viewBox="0 0 16 16">
                                    <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg>
                                <span class="p-1">Novo</span>
                            </Button>
                        </div>
                    </div>

                </div>

            );
        }
}