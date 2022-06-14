/*import { Table, Button } from "react-bootstrap";
import { IconeEdicao, IconeExclusao, IconeDinheiro } from "../icones/icones";

const localRecursos = 'http://localhost:4000/mensalidade';

export default function TabelaCadastroMensalidades(props){
    return(
        <div>
        <h3>Mensalidades:</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Valor</th>
                    <th>Data pagamento</th>
                    <th>Data vencimento</th>
                    <th>Escoteiro</th>
                    <th>Id inscrição</th>
                    <th>Cidade</th>
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
                            <td>{mensalidade.escoteiro.idescoteiro}</td>
                            <td>{mensalidade.inscricao.idinscricao}</td>
                            <td>
                                <Button variant="outline-success" onClick={()=>{props.ReceberMensalidade(mensalidade.id)}}>Receber mensalidade</Button>{' '}
                            </td>
                        </tr>)
                })}
            </tbody>    
        </Table>
        </div>
    );
}*/