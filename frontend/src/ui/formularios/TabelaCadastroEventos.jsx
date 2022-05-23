import { Table, Button } from "react-bootstrap";
import { IconeEdicao, IconeExclusao } from "../icones/icones";

export default function TabelaCadastroEventos(props){
    return(
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
                                <Button variant="outline-primary" onClick={()=>{props.atualizarEvento(evento)}}><IconeEdicao/></Button>{' '}
                                <Button variant="outline-danger" onClick={()=>{props.deletarEvento(evento)}}><IconeExclusao/></Button>
                            </td>
                        </tr>)
                })}
            </tbody>    
        </Table>
    );
}