/*import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


const localRecursos = 'http://localhost:4000/mensalidade';

export default function Cadastromensalidades(props){
    const [mensalidade,setmensalidade] = useState(props.mensalidade);
    const [formValidado, setFormValidado] = useState(false);

    function manipularSubmissaoDados(e){
        const formulario = e.currentTarget;
        alert(formulario.checkValidity());
        if (formulario.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
        }else{
            props.onGravar(mensalidade);
        }

        setFormValidado(true);
    }

       
    function manipularMudanca(e)
    {
        const componente = e.target;
        const valor = componente.value;
        const nome = componente.name;
        setmensalidade({...mensalidade,[nome]:valor});
    }

    function verificaNome(e){
        const componente = e.target;
        const texto = componente.value;
        if (texto.length < 4)
        {
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        }
        else{
            componente.setCustomValidity("");
        }
    }

    function verificaDescricao(e){
        const componente = e.target;
        const texto = componente.value;
        if (texto.length < 6)
        {
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        }
        else{
            componente.setCustomValidity("");
        }
    }

    function verificaNum(e){
        const componente = e.target;
        if(isNaN(Number(componente.value))){
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        }
        else{
            componente.setCustomValidity("");
        }
    }

    function verificaCodigo(e){
        const componente = e.target;
        if(isNaN(Number(componente.value))){
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        }
        else{
            componente.setCustomValidity("");
        }
    }


    return(
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissaoDados} method="get" action="#">
                <fieldset className="border bg-light p-5 m-2">
                    <h3>Cadastro de mensalidades:</h3>
                    <p>*Todos os campos são obrigatórios</p>
                    <Row className="m-3">
                        <Col xs={12} md={3}>
                            <Form.Label>Código:</Form.Label>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Control 
                            type="text" 
                            id="id" 
                            name="id"
                            value={mensalidade.id}
                            onChange={manipularMudanca}
                            onBlur={verificaCodigo} disabled/>
                            <Form.Control.Feedback type="invalid">
                                Código inválido.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col xs={12} md={3}>
                            <Form.Label>Nome:</Form.Label>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Control 
                            type="text" 
                            id="nomeProd" 
                            name="nomeProd" 
                            placeholder="Digite o nome do mensalidade"
                            value={mensalidade.nomeProd}
                            onChange={manipularMudanca}
                            onBlur={verificaNome}
                            />
                            <Form.Control.Feedback type="invalid">
                                O nome do mensalidade deve ter pelo menos 4 caracteres.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col xs={12} md={3}>
                            <Form.Label>Preço de custo:</Form.Label>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Control 
                            type="number" 
                            id="precoCusto" 
                            name="precoCusto" 
                            value={mensalidade.precoCusto}
                            onChange={manipularMudanca}
                            onBlur={verificaNum}/>
                            <Form.Control.Feedback type="invalid">
                                Valor inválido.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col xs={12} md={3}>
                            <Form.Label>Preço de venda:</Form.Label>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Control 
                            type="number" 
                            id="precoVenda" 
                            name="precoVenda" 
                            value={mensalidade.precoVenda}
                            onChange={manipularMudanca}
                            onBlur={verificaNum}/>
                            <Form.Control.Feedback type="invalid">
                                Valor inválido.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col xs={12} md={3}>
                            <Form.Label>Quantidade em estoque:</Form.Label>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Control 
                            type="number" 
                            id="qtdEstoque" 
                            name="qtdEstoque" 
                            min={0}
                            value={mensalidade.qtdEstoque}
                            onChange={manipularMudanca}
                            onBlur={verificaNum}/>
                            <Form.Control.Feedback type="invalid">
                                Quantidade inválida.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Row className="m-3">
                        <Col xs={12} md={{offset:5}}>
                            <Button variant="success" type="submit">Cadastrar</Button>
                        </Col>
                    </Row>
                </fieldset>
            </Form>
        </Container>
    );
}*/