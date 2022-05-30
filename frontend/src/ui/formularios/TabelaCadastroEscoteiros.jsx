import { Table, Button } from "react-bootstrap";
import { IconeEdicao, IconeExclusao } from "../icones/icones";

export default function TabelaCadastroEscoteiros(props){
    return(
        <div>
        <h3>Escoteiros:</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Cpf</th>
                    <th>Registro</th>
                    <th>Telefone</th>
                    <th>Seção</th>
                </tr>
            </thead>
            <tbody>
                {props.escoteiros.map((escoteiro)=>{
                    return (
                        <tr key={escoteiro.idescoteiro}>
                            <td>{escoteiro.idescoteiro}</td>
                            <td>{escoteiro.nome}</td>
                            <td>{escoteiro.cpf}</td>
                            <td>{escoteiro.registro}</td>
                            <td>{escoteiro.telefone}</td>
                            <td>{escoteiro.secao}</td>
                            <td>
                                <Button variant="outline-primary" onClick={()=>{props.atualizarEscoteiro(escoteiro)}}><IconeEdicao/></Button>{' '}
                                <Button variant="outline-danger" onClick={()=>{props.deletarEscoteiro(escoteiro)}}><IconeExclusao/></Button>
                                <Button variant="outline-primary" onClick={()=>{props.GerarMensalidade(escoteiro.idescoteiro)}}>Gerar mensalidade</Button>
                                <Button variant="outline-primary" onClick={()=>{props.CancelarInscricao(escoteiro.idescoteiro)}}>Cancelar Inscrição</Button>
                            </td>
                        </tr>)
                })}
            </tbody>    
        </Table>
        </div>
    );
}