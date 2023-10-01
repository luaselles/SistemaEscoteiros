import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import CadastroEscoteiros from "./CadastroEscoteiros";
import TabelaCadastroEscoteiros from "./TabelaCadastroEscoteiros";
import { Button, Spinner } from "react-bootstrap";

const localRecursos = 'http://localhost:4000/escoteiro';

export default function ControladoraCadastroEscoteiros(props) {
    const navigate = useNavigate();


    const [mostrarTabela, setMostrarTabela] = useState(true);
    const [escoteiros, setEscoteiros] = useState([]);

    const [foiCarregado, setFoiCarregado] = useState(false);

    const [erro, setErro] = useState(null);
    const [estaAtualizando, setEstaAtualizando] = useState(false);
    const [atualizandoEscoteiro, setAtualizandoEscoteiro] = useState({
        idescoteiro: 0,
        nome: "",
        cpf: "",
        registro: "",
        telefone: "",
        secao: ""
    });

    function buscarEscoteiros() {
        fetch(localRecursos, { method: "GET" })
            .then(resposta => resposta.json())
            .then(dados => {
                setFoiCarregado(true);
                setEscoteiros(dados);
            },
                error => {
                    setFoiCarregado(true);
                    setErro(error);
                });
    }

    function gravarEscoteiro(escoteiro) {
        if (!estaAtualizando) {
            fetch(localRecursos, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(escoteiro)
            })
                .then(resposta => resposta.json())
        } else {
            fetch(localRecursos, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(escoteiro)
            })
                .then(resposta => resposta.json())
                .then(retorno => {
                    if (retorno.resultado) {
                        alert('Escoteiro atualizado com sucesso!');
                    }
                    else {
                        alert('Não foi possível atualizar o Escoteiro!');
                    }
                    setEstaAtualizando(false);
                });
        }
    }




    function deletarEscoteiro(escoteiro) {
        if (window.confirm("Deseja excluir o item?")) {
            fetch(localRecursos + "/" + escoteiro.idescoteiro, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
            })
                .then(resposta => resposta.json())
                .then(retorno => {
                    if (retorno.resultado) {
                        alert('Escoteiro Excluido com sucesso!');
                    }
                    else {
                        alert('Não foi possível excluir o Escoteiro!');
                    }
                    setEstaAtualizando(false);
                });
        }
    }

    function atualizarEscoteiro(escoteiro) {
        setEstaAtualizando(true);
        setAtualizandoEscoteiro(escoteiro);
        setMostrarTabela(false);
    }

    function RealizarInscricao(escoteiro) {

        navigate('/realizarinscricao', { state: { id: escoteiro.idescoteiro, nome: escoteiro.nome, cpf: escoteiro.cpf, secao: escoteiro.secao } })
    }

    function GerarMensalidade(id) {
        fetch("http://localhost/4000/gerarmensalidade/" + id, { method: "POST" })
            .then(resposta => resposta.json())
            .then(dados => {
                setFoiCarregado(true);
                setEscoteiros(dados);
            },
                error => {
                    setFoiCarregado(true);
                    setErro(error);
                });
    }

    async function CancelarInscricao(id) {
        alert(id)
        await fetch("http://localhost/4000/cancelarInscricao/" + id, { method: "DELETE" })
            .then(resposta => resposta.json())
            .then(retorno => {
                if (retorno.resultado) {
                    alert('Inscrição cancelada com sucesso!');
                }
                else {
                    alert('Não foi possível cancelar a inscrição!');
                }
            });
    }

    useEffect(() => {
        buscarEscoteiros();
    }, [escoteiros]);

    if (erro)
        return <div><p>Erro ao buscar escoteiros : {erro.message}</p></div>
    else
        if (!foiCarregado) {
            return <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando Escoteiros'...</span>
                </Spinner>
            </div>
        } else {

            return (
                <div>

                    {mostrarTabela ? <TabelaCadastroEscoteiros escoteiros={escoteiros} atualizarEscoteiro={atualizarEscoteiro} deletarEscoteiro={deletarEscoteiro} GerarMensalidade={GerarMensalidade} CancelarInscricao={CancelarInscricao} RealizarInscricao={RealizarInscricao} /> :
                        <CadastroEscoteiros onGravar={gravarEscoteiro} escoteiro={atualizandoEscoteiro} />}

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