import { Table, Button } from "react-bootstrap";
import { IconeEdicao, IconeExclusao } from "../icones/icones";
import '../../estilos/tabela.css'

export default function TabelaMensalidades(props){

    async function fetchReceberMensalidade(mensalidade) {
        
        if (window.confirm("Receber mensalidade?")){
        await fetch('http://localhost:4000/recebermensalidade/'+mensalidade.id,{method:"PUT"})
        .then(resposta=>resposta.json())
        .catch(error =>{
            alert(error)
        });
            alert("Teste 123")
        }
    }
/*<Button variant="outline-primary" onClick={()=>{props.ReceberMensalidadee(mensalidade.id)}}>Receber</Button>{' '}
*/


    return(
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
                {props.mensalidades.map((mensalidade)=>{
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
                                <Button variant="outline-primary"  onClick={() => fetchReceberMensalidade(mensalidade)}>Receber</Button>{' '}
                                <Button variant="outline-danger" /*onClick={()=>{props.deletarProduto(produto)}}*/>Estornar</Button>
                            </td>
                        </tr>)
                })}
            </tbody>    
        </Table>
        </div>
    );
}