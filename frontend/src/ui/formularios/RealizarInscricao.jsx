import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function RealizarInscricao(props) {
    const [escoteiro, setEscoteiro] = useState(props.escoteiro);
    function carregaradados(e)
    {

    }

    return(
        <Container>
        <Form  method="get" action="#">
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
                              disabled />
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
                            
                            disabled />
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
                            
                            disabled />
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
                            
                            disabled/>
                    </Col>
                </Row>
                    
                    <Row className="m-3">
                        <Col xs={12} md={{ offset: 3 }}>
                            <Button variant="success" type="submit">Inscrever</Button> 
                            &nbsp; <Button variant="danger" type="submit" >Cancelar</Button>
                        </Col>
                        
                    </Row>

                    <Row className="m-3">
                   
                        
                    </Row>
                </fieldset>
                </Form>
        </Container>
    );
}