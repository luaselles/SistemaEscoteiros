import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const localRecursos = 'http://localhost:4000/inscrever';

export default function RealizarInscricao(props) {
    const location = useLocation();
    const navigate = useNavigate();

    let escoteiro = {idescoteiro: location.state.id, nome: location.state.nome, cpf: location.state.cpf, qtdeirmaos: 0, secao: location.state.secao} 

    function cancelar(e)
    {
        navigate('/')
       
    }

    function mudanca(e)
    {
        const componente = e.target;
        const valor = componente.value;
        escoteiro.qtdeirmaos=valor;
    }

    function Inscrever(e)
    {
        e.preventDefault()
        fetch(localRecursos, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(escoteiro)
        })
            .then(resposta => resposta.json())
            .then(dados=>{ 
                alert('Inscrição realizada')
                navigate('/')
            }).catch(e=>{
                alert('Não e possivel inscrever novamente')
                
            });
                
    }

    return(
        <Container>
        <Form  onSubmit={Inscrever}>
            <fieldset className="border bg-light p-5 m-2">
                <h3>Inscrição de Escoteiros:</h3>
                <Row className="m-3">
                        <Col xs={12} md={3}>
                            <Form.Label>Código:</Form.Label>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Control
                                type="text"
                                id="id"
                                name="id"
                                value={location.state.id} disabled />
                        </Col>
                </Row>
                <Row className="m-3">
                    <Col xs={12} md={3}>
                        <Form.Label>Nome Completo:</Form.Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form.Control
                            type="text"
                            id="nome"
                            name="nome"
                            value={location.state.nome} disabled/>  
                    </Col>
                </Row>
                <Row className="m-3">
                    <Col xs={12} md={3}>
                        <Form.Label>Cpf:</Form.Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form.Control
                            type="text"
                            id="cpf"
                            name="cpf"
                            value={location.state.cpf}  disabled />
                    </Col>
                </Row>
                <Row className="m-3">
                    <Col xs={12} md={3}>
                        <Form.Label>Seção:</Form.Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form.Control
                            type="text"
                            id="secao"
                            name="secao"  
                            value={location.state.secao}  disabled/>
                    </Col>
                </Row>
                <Row className="m-3">
                    <Col xs={12} md={3}>
                        <Form.Label>Qtde de Irmãos:</Form.Label>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form.Control
                            type="number"
                            id="qtde"
                            name="qtde"  
                            defaultValue={0}
                            min="0"
                            max="15"/>
                    </Col>
                </Row>
                    
                    <Row className="m-3">
                        <Col xs={12} md={{ offset: 3 }}>
                            <Button onClick={mudanca} variant="success" type="submit">Inscrever</Button> 
                            &nbsp; <Button onClick={cancelar} variant="danger" type="button">Cancelar</Button>
                        </Col>
                        
                    </Row>
                </fieldset>
                </Form>
        </Container>
    );
}