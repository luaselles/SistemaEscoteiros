import { useState, useEffect } from "react";

import CadastroEventos from "./CadastroEventos";
import TabelaCadastroEventos from "./TabelaCadastroEventos";
import { Button, Spinner, Modal, Form } from "react-bootstrap";

const localRecursos = 'http://localhost:4000/evento'


export default function ControladoraCadastroEventos(props) {
    const [show, setShow] = useState(false);
    const [mostrarTabela, setMostrarTabela] = useState(true);
    const [eventos, setEventos] = useState([]);

    const [foiCarregado, setFoiCarregado] = useState(false);
    console.log();
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
        if (window.confirm("Deseja excluir o item?")){
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

    function atualizarValor(evento) {
        setShow(true)
        return (<div><Modal show={show} onHide={() => setShow(false)}>
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
              <Button variant="danger" onClick={() => {var quantia = document.getElementById("input").value; evento.valor = (evento.valor - quantia); setShow(false)}}>
                Debitar
              </Button>
              <Button variant="primary" onClick={() => {var quantia = document.getElementById("input").value; evento.valor = (evento.valor + quantia); setShow(false)}}>
                Creditar
              </Button>
            </Modal.Footer>
          </Modal></div>);
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

                    {mostrarTabela ? <TabelaCadastroEventos eventos={eventos} atualizarValor={atualizarValor} atualizarEvento={atualizarEvento} deletarEvento={deletarEvento} /> :
                        <CadastroEventos onGravar={gravarEvento} evento={atualizandoEvento} />}

                    <Button onClick={() => setMostrarTabela(!mostrarTabela)}>
                        Cadastrar
                    </Button>
                </div>

            );
        }
}