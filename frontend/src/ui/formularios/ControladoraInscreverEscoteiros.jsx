import { useState, useEffect } from "react";

import InscreverEscoteiros from "./InscreverEscoteiros";
import TabeladeCadastrados from "./TabeladeCadastrados";
import { Button, Spinner } from "react-bootstrap";

const localRecursos = 'http://localhost:4000/inscreverescoteiro'


export default function ControladoraInscreverEscoteiros(props) {
    const [mostrarTabela, setMostrarTabela] = useState(true);
    const [escoteiros, setEscoteiros] = useState([]);

    const [foiCarregado, setFoiCarregado] = useState(false);
    console.log();
    const [erro, setErro] = useState(null);
    const [estaAtualizando, setEstaAtualizando] = useState(false);
    const [atualizandoEvento, setAtualizandoEvento] = useState({
        idescoteiro: 0,
        nomeescoteiro: "",
        status: 0
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

    useEffect(() => {
        buscarEscoteiros();
    }, [escoteiros]);

    if (erro) {
        return <div><p>Erro ao buscar escoteiros : {erro.message}</p></div>
    } else
        if (!foiCarregado) {
            return <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando Escoteiros'...</span>
                </Spinner>
            </div>
        } else {

            return (
                <div>

                    {mostrarTabela ? <TabeladeCadastrados escoteiros={escoteiros} /> :
                        <InscreverEscoteiros/>}

                    <Button onClick={() => setMostrarTabela(!mostrarTabela)}>
                        Voltar
                    </Button>
                </div>

            );
        }
}