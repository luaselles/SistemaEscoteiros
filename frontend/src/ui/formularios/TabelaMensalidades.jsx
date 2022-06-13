import { Table, Button } from "react-bootstrap";
import { IconeEdicao, IconeExclusao } from "../icones/icones";
import '../../estilos/tabela.css'

export default function TabelaMensalidades(props){
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
                            <td>{mensalidade.idEscoteiro}</td>
                            <td>{mensalidade.idEscoteiro}</td>
                            <td>{mensalidade.idinscricao}</td>
                            <td>
                                <Button variant="outline-primary" /*onClick={()=>{props.atualizarProduto(produto)}}*/>Receber</Button>{' '}
                                <Button variant="outline-danger" /*onClick={()=>{props.deletarProduto(produto)}}*/>Extornar</Button>
                            </td>
                        </tr>)
                })}
            </tbody>    
        </Table>
        </div>
    );
}