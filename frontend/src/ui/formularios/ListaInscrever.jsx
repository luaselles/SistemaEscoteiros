import { Table, Button } from "react-bootstrap";
import { IconeEdicao, IconeExclusao } from "../icones/icones";
import { useState,useEffect } from "react";
import { Button, Col, Container, form, Row } from "react-bootstrap";

export default function TabelaCadastroEscoteiros(props){
    const [lista, setlista] = useState([])
    useEffect(() => {
        fetchInscreverescoteiros()
    }, [])

    async function fetchInscreverescoteiros() {
        
        await fetch('http://localhost:4000/inscrevern',{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setlista(dados);
        }, 
        error =>{
            
        });
        console.log(lista)
    }

    async function Inscrever(idescoteiro){
        let escoteiro = {cod:idescoteiro}
        await fetch('http://localhost:4000/inscrever',{method:"POST",
                                headers:{'Content-Type':'application/json'},
                                body:JSON.stringify(escoteiro)
            })
            .catch(e=>alert(e))  
    }
    return(
        <div>
        <h3>Escoteiros:</h3>
        <Container>
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
                                <Button variant="outline-primary" onClick={()=>{Inscrever(escoteiro.idescoteiro)}}>Inscrever</Button>
                            </td>
                        </tr>)
                })}
            </tbody>    
        </Table>
        </Container>
        </div>
    );
}