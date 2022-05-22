import { useState, useEffect } from "react";


const localRecursos = 'http://localhost:4000/inscreverescoteiro'

export default function InscreverEscoteiros(props) {
    const [escoteiro, setEscoteiro] = useState([]);

    const [foiCarregado, setFoiCarregado] = useState(false);
    console.log();
    const [erro, setErro] = useState(null);
    const [estaAtualizando, setEstaAtualizando] = useState(false);
    const [atualizandoEvento, setAtualizandoEvento] = useState({
        idescoteiro: 0,
        nomeEscoteiro: "",
        status: 1
    });

    function buscarEscoteiros() {
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

    useEffect(() => {
        buscarEscoteiros();
    }, [escoteiros]);

    if (erro) {
        return <div><p>Erro ao buscar escoteiros : {erro.message}</p></div>
    } else
        if (!foiCarregado) {
            return <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando Escoteiros Cadastrados'...</span>
                </Spinner>
            </div>
        } else {

            return (
                <div>

                    {mostrarTabela ? <TabelaCadastroEventos eventos={eventos} atualizarEvento={atualizarEvento} deletarEvento={deletarEvento} /> :
                        <CadastroEventos onGravar={gravarEvento} evento={atualizandoEvento} />}

                    <Button onClick={() => setMostrarTabela(!mostrarTabela)}>
                        Voltar
                    </Button>
                </div>

            );
        }



}