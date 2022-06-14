import { Table, Button } from "react-bootstrap";
import { IconeEdicao, IconeExclusao, IconeDinheiro, IconeLista } from "../icones/icones";

export default function TabelaCadastroEventos(props){
    return(
        <div>
        <h3>Eventos:</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome Evento</th>
                    <th>Nome Responsável</th>
                    <th>Descrição</th>
                    <th>Rua</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>n°</th>
                    <th>Data</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {props.eventos.map((evento)=>{
                    return (
                        <tr key={evento.id}>
                            <td>{evento.id}</td>
                            <td>{evento.nomeEvent}</td>
                            <td>{evento.respevento}</td>
                            <td>{evento.descricao}</td>
                            <td>{evento.rua}</td>
                            <td>{evento.bairro}</td>
                            <td>{evento.cidade}</td>
                            <td>{evento.num}</td>
                            <td>{evento.data}</td>
                            <td>
                                <Button variant="outline-success" onClick={()=>{props.atualizarValor(evento)}}><IconeDinheiro/></Button>{' '}
                                <Button variant="outline-info" onClick={()=>{props.mostrarExtrato(evento)}}><IconeLista/></Button>{' '}
                                <Button variant="outline-primary" onClick={()=>{props.atualizarEvento(evento)}}><IconeEdicao/></Button>{' '}
                                <Button variant="outline-danger" onClick={()=>{props.deletarEvento(evento)}}><IconeExclusao/></Button>
                            </td>
                        </tr>)
                })}
            </tbody>    
        </Table>
        </div>
    );
}