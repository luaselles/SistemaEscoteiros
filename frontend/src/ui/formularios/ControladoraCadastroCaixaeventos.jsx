import { useState, useEffect } from "react";

import TabelaCaixaeventos from "./TabelaCaixaeventos";
import { Button, Spinner, Modal, Form } from "react-bootstrap";

const localRecursos = 'http://localhost:4000/caixaevento'


export default function ControladoraCadastroCaixaeventos(props) {
    const [show, setShow] = useState(false);
    const [credito, setCredito] = useState(false);
    const [debito, setDebito] = useState(false);
    const [mostrarTabela, setMostrarTabela] = useState(true);
    const [caixaeventos, setCaixaeventos] = useState([]);

    const [foiCarregado, setFoiCarregado] = useState(false);
    console.log();
    const [erro, setErro] = useState(null);
    const [estaAtualizando, setEstaAtualizando] = useState(false);
    const [atualizandoCaixavento, setAtualizandoCaixavento] = useState({
        id: 0,
        idevento: 0,
        valor: 0
    });

    function buscarCaixaeventos() {
        fetch(localRecursos, { method: "GET" })
            .then(resposta => resposta.json())
            .then(dados => {
                setFoiCarregado(true);
                setCaixaeventos(dados);
            },
                error => {
                    setFoiCarregado(true);
                    setErro(error);
                });

    }

    function gravarCaixaeventos(Caixaevento) {
        if (!estaAtualizando) {
            fetch(localRecursos, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Caixaevento)
            })
                .then(resposta => resposta.json())
        } else {
            fetch(localRecursos, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Caixaevento)
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

    function atualizarCaixaevento(quantia) {
        console.log(quantia);
        if(credito)
            atualizandoCaixavento.valor = (atualizandoCaixavento.valor + quantia);
        if(debito)
            atualizandoCaixavento.valor = (atualizandoCaixavento.valor - quantia);

        fetch(localRecursos, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(atualizandoCaixavento)
        })
        setCredito(false)
        setDebito(false)
        setShow(false)
    }

    function atualizarValor(Caixaevento) {
        setShow(true);
        setAtualizandoCaixavento(Caixaevento)
        console.log(atualizandoCaixavento)
    }

    useEffect(() => {
        buscarCaixaeventos();
    }, [caixaeventos]);

    if (erro) {
        return <div><p>Erro ao buscar caixa eventos : {erro.message}</p></div>
    } else
        if (!foiCarregado) {
            return <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando Caixa Eventos'...</span>
                </Spinner>
            </div>
        } else {

            return (
                <div>
                    <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>Insira o valor à ser Debitado ou Creditado.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control
                            id="input"
                            type="text"
                            placeholder="Valor"
                            autoFocus
                        />
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Fechar
                    </Button>
                    <Button variant="danger" onClick={() => {setDebito(true); atualizarCaixaevento(document.getElementById("input").value)}}>
                        Debitar
                    </Button>
                    <Button variant="success" onClick={() => {setCredito(true); atualizarCaixaevento(document.getElementById("input").value)}}>
                        Creditar
                    </Button>
                    </Modal.Footer>
                </Modal>

                    {mostrarTabela ? <TabelaCaixaeventos caixaeventos={caixaeventos} atualizarValor={atualizarValor}/> :
                     <></>}
                    
                    <Button onClick={() => setMostrarTabela(!mostrarTabela)}>
                        Cadastrar
                    </Button>
                </div>

            );
        }
}