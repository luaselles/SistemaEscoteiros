import { useState, useEffect } from "react";
;
import TabelaMensalidades from "./TabelaMensalidades";
import { Button, Spinner } from "react-bootstrap";

const localRecursos = 'http://localhost:4000/mensalidade';

export default function ControladoraMensalidades(props) {
    const [mostrarTabela, setMostrarTabela] = useState(true);
    const [mensalidade, setMensalidade] = useState([]);

    const [foiCarregado, setFoiCarregado] = useState(false);

    const [erro, setErro] = useState(null);
    const [estaAtualizando, setEstaAtualizando] = useState(false);
    const [atualizandoEscoteiro, setAtualizandoEscoteiro] = useState({
        id: 0,
        valor: 0,
        dataPag: "",
        dataVen: "",
        idEscoteiro: 0,
        idinscricao: 0
    });

    function buscarMensalidades() {
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

    function gravarMensalidade(mensalidade) {
        if (!estaAtualizando) {
            fetch(localRecursos, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mensalidade)
            })
                .then(resposta => resposta.json())
        } else {
            fetch(localRecursos, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mensalidade)
            })
                .then(resposta => resposta.json())
                .then(retorno => {
                    if (retorno.resultado) {
                        alert('Mensalidade atualizado com sucesso!');
                    }
                    else {
                        alert('Não foi possível atualizar a mensalidade!');
                    }
                    setEstaAtualizando(false);
                });
        }
    }

    function atualizarMensalidade(mensalidade) {
        setEstaAtualizando(true);
        setAtualizandoEscoteiro(mensalidade);
        setMostrarTabela(false);
    }
    
    function ReceberMensalidade(id)
    {
        fetch("http://localhost/4000/recebermensalidade/"+ id, { method: "PUT" })
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
    }, [mensalidades]);

    if (erro)
        return <div><p>Erro ao buscar mensalidade : {erro.message}</p></div>
    else 
        if (!foiCarregado) {
            return <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando mensalidades'...</span>
                </Spinner>
            </div>
        } else {

            return (
                <div>
                    <TabelaMensalidades escoteiros={escoteiros} atualizarMensalidade={atualizarMensalidade} ReceberMensalidade={ReceberMensalidade}/>
                </div>

            );
        }
}