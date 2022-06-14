import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { IconeEdicao, IconeExclusao } from "../icones/icones";

export default function TabelaCadastroEscoteiros(props){

    const [isDisabled, setIsDisabled] = useState(false);
    const [isCarry, setCarry] = useState(false);
   

    async function desabilitarbutton(escoteiro)
    {
        await fetch('http://localhost:4000/inscrever/'+escoteiro.idescoteiro,{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{ 
            console.log(dados)
            setIsDisabled(true)
        }).catch(e=>{
            props.RealizarInscricao(escoteiro)
        });
        
    } 

    function setarBotoes(escoteiro){
        if(!isCarry){
            desabilitarbutton(escoteiro)
            setCarry(true)
        }
    }


    return(
        <div>
        <h3>Escoteiros Cadastrados:</h3>
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
                        <tr onLoad={setarBotoes(escoteiro)} key={escoteiro.idescoteiro}>
                            <td>{escoteiro.idescoteiro}</td>
                            <td>{escoteiro.nome}</td>
                            <td>{escoteiro.cpf}</td>
                            <td>{escoteiro.registro}</td>
                            <td>{escoteiro.telefone}</td>
                            <td>{escoteiro.secao}</td>
                            <td>
                                <Button variant="outline-primary" onClick={()=>{props.atualizarEscoteiro(escoteiro)}}><IconeEdicao/></Button>{' '}
                                <Button variant="outline-danger" onClick={()=>{props.deletarEscoteiro(escoteiro)}}><IconeExclusao/></Button>
                                <Button variant="outline-primary" onClick={()=>{ desabilitarbutton(escoteiro)}} disabled={isDisabled} >Inscrever Escoteiro</Button>
                                <Button variant="outline-primary" onClick={()=>{props.CancelarInscricao(escoteiro.idescoteiro)}}>Cancelar Inscrição</Button>
                            </td>
                        </tr>
                        )
                })}
            </tbody>    
        </Table>
        </div>
    );
}