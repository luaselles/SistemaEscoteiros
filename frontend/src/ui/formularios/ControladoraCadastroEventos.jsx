import { useState, useEffect } from "react";

import CadastroEventos from "./CadastroEventos";
import TabelaCadastroEventos from "./TabelaCadastroEventos";
import { Button, Spinner, Modal, Form } from "react-bootstrap";

const localRecursos = 'http://localhost:4000/evento'


export default function ControladoraCadastroEventos(props) {
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

                    {mostrarTabela ? <TabelaCadastroEventos eventos={eventos} atualizarEvento={atualizarEvento} deletarEvento={deletarEvento} /> :
                        <CadastroEventos onGravar={gravarEvento} evento={atualizandoEvento} />}

                    <Button onClick={() => setMostrarTabela(!mostrarTabela)}>
                        Cadastrar
                    </Button>
                    <Button href="/caixaeventos">
                        Caixas Eventos
                    </Button>
                </div>

            );
        }
}