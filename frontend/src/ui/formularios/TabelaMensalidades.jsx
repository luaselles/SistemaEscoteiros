import { Table, Button } from "react-bootstrap";
import '../../estilos/tabela.css'

export default function TabelaMensalidades(props) {

    async function fetchReceberMensalidade(mensalidade) {

        const timeElapsed = Date.now();
        const data = new Date(timeElapsed);

        if (data.toISOString() <= mensalidade.dataVen) {
            if (mensalidade.dataPag === null) {
                if (window.confirm("Receber mensalidade de id " + mensalidade.id + "?")) {
                    await fetch('http://localhost:4000/recebermensalidade/' + mensalidade.id, { method: "PUT" })
                        .then(resposta => resposta.json())
                        .catch(error => {
                            alert(error)
                        });
                    alert("Mensalidade recebida!")
                }
            }
            else
                alert("Mensalidade já foi paga!")
        }
        else
            alert("Impossível receber mensalidade vencida!")
    }

    async function fetchEstornarMensalidade(mensalidade) {

        if (mensalidade.dataPag !== null) {
            if (window.confirm("Estornar mensalidade de id " + mensalidade.id + "?")) {
                await fetch('http://localhost:4000/estornarmensalidade/' + mensalidade.id, { method: "PUT" })
                    .then(resposta => resposta.json())
                    .catch(error => {
                        alert(error)
                    });
                alert("Mensalidade estornada!")
            }
        }
        else
            alert("Não é possível estornar mensalidade não paga!")
    }

    return (
        <div>
            <h3>Mensalidades:</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Valor</th>
                        <th>Data Pagamento</th>
                        <th>Data vencimento</th>
                        <th>Código escoteiro</th>
                        <th>Nome escoteiro</th>
                        <th>Código inscrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.mensalidades.map((mensalidade) => {
                        return (
                            <tr key={mensalidade.id}>
                                <td>{mensalidade.id}</td>
                                <td>{mensalidade.valor}</td>
                                <td>{mensalidade.dataPag}</td>
                                <td>{mensalidade.dataVen}</td>
                                <td>{mensalidade.idEscoteiro}</td>
                                <td>{mensalidade.idEscoteiro}</td>
                                <td>{mensalidade.idinscricao}</td>
                                <td>
                                    <Button id="botaoR" variant="outline-primary" onClick={() => fetchReceberMensalidade(mensalidade)}>Receber</Button>{' '}
                                    <Button id="botaoE" variant="outline-danger" onClick={() => fetchEstornarMensalidade(mensalidade)}>Estornar</Button>
                                </td>
                            </tr>)
                    })}
                </tbody>
            </Table>
        </div>
    );
}