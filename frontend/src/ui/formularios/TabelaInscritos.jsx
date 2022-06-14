import { Table } from "react-bootstrap";

export default function TabelaInscritos(props){
    return(
        <div>
        <h3>Inscritos:</h3>
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {props.inscritos.map((inscricao)=>{
                        return (
                            <tr key={inscricao.Escoteiro.data[0].idescoteiro}>
                                <td>{inscricao.Escoteiro.data[0].idescoteiro}</td>
                                <td>{inscricao.Escoteiro.data[0].nome}</td>
                            </tr>)
                    })}
                </tbody>    
        </Table>
       </div>
    );
}