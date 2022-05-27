import { Table } from "react-bootstrap";

export default function TabelaMensalidades(props){
    return(
        <div>
        <h3>Mensalidades:</h3>
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Valor</th>
                        <th>Data pagamento</th>
                        <th>Data vencimento</th>
                        <th>Id escoteiro</th>
                        <th>Id inscrição</th>
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
                                <td>{mensalidade.idinscricao}</td>
                            </tr>)
                    })}
                </tbody>    
        </Table>
       </div>
    );
}