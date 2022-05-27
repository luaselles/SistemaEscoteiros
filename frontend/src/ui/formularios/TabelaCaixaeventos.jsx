import { Table, Button } from "react-bootstrap";
import { IconeDinheiro } from "../icones/icones";

export default function TabelaCadastroCaixaeventos(props){
    return(
        <div>
        <h3>Caixas Eventos:</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Código Evento</th>
                    <th>Valor</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {props.caixaeventos.map((caixaevento)=>{
                    return (
                        <tr key={caixaevento.id}>
                            <td>{caixaevento.id}</td>
                            <td>{caixaevento.idevento}</td>
                            <td>{caixaevento.valor}</td>
                            <td>
                                <Button variant="outline-success" onClick={()=>{props.atualizarValor(caixaevento)}}><IconeDinheiro/></Button>
                            </td>
                        </tr>)
                })}
            </tbody>    
        </Table>
        </div>
    );
}