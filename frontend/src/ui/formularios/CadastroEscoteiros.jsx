import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import escoteiro1 from '../../imagens/escoteiro1.png';


export default function CadastroEscoteiros(props) {
    const [escoteiro, setEscoteiro] = useState(props.escoteiro);
    const [formValidado, setFormValidado] = useState(false);

    function manipularSubmissaoDados(e) {
        const formulario = e.currentTarget;
        alert(formulario.checkValidity());
        if (formulario.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            props.onGravar(escoteiro);
        }

        setFormValidado(true);
    }


    function manipularMudanca(e) {
        const componente = e.target;
        const valor = componente.value;
        const nome = componente.name;
        setEscoteiro({ ...escoteiro, [nome]: valor });
    }

    function verificaCodigo(e) {
        const componente = e.target;
        if (isNaN(Number(componente.value))) {
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        } else {
            componente.setCustomValidity("");
        }
    }

    function verificaNome(e) {
        const componente = e.target;
        const texto = componente.value;
        if (texto.length < 4) {
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        } else {
            componente.setCustomValidity("");
        }
    }

    function verificaRegistro(e) {
        const componente = e.target;
        const texto = componente.value;
        if (texto.length < 7) {
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        } else {
            componente.setCustomValidity("");
        }
    }


    function verificaTelefone(e) {
        const componente = e.target;
        const texto = componente.value;
        if (texto.length < 11) {
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        } else {
            componente.setCustomValidity("");
        }
    }

    function verificaSecao(e) {
        const componente = e.target;
        const texto = componente.value;
        if (texto.length < 5) {
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        } else {
            componente.setCustomValidity("");
        }
    }

    return (
        <div class="container mb-2">
            <div class="mt-2 mb-2">
                <div class="row">
                    <div className="col-4">
                        <figure class="figure">
                            <img src={escoteiro1} class="figure-img img-fluid rounded" alt="..." />
                        </figure>
                    </div>
                    <div className="col-4">
                        <figure class="figure">
                            <img src={escoteiro1} class="figure-img img-fluid rounded" alt="..." />
                        </figure>
                    </div>
                    <div className="col-4">
                        <figure class="figure">
                            <img src={escoteiro1} class="figure-img img-fluid rounded" alt="..." />
                        </figure>
                    </div>
                </div>
            </div>
            <div class="card">
                <div className="m-3">
                    <h1 class="display-6">Cadastre o escoteiro:</h1>
                    <p class="lead">
                        *Todos os campos são obrigatórios
                    </p>
                    <hr />
                    <Form noValidate validated={formValidado} onSubmit={manipularSubmissaoDados} method="get" action="#">
                        <div className="row">
                            <div className="col-3">
                                <label class="form-label lead">Código:</label>
                                <input class="form-control"
                                    type="text"
                                    id="id"
                                    name="id"
                                    value={escoteiro.idescoteiro}
                                    onChange={manipularMudanca}
                                    onBlur={verificaCodigo} disabled />
                                <Form.Control.Feedback type="invalid">
                                    Código inválido.
                                </Form.Control.Feedback>
                            </div>
                            <div className="col-3">
                                <label class="form-label lead">Nome Completo:</label>
                                <input class="form-control"
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    placeholder="Digite o nome completo"
                                    value={escoteiro.nome}
                                    onChange={manipularMudanca}
                                    onBlur={verificaNome}
                                    required />
                            </div>
                            <div className="col-3">
                                <label class="form-label lead">CPF:</label>
                                <input class="form-control"
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    placeholder="Digite o cpf"
                                    value={escoteiro.cpf}
                                    onChange={manipularMudanca}
                                    required />
                                <div class="invalid-feedback" type="invalid">
                                    CPF obrigatório.
                                </div>
                            </div>
                            <div className="col-3">
                                <label class="form-label lead">Registro Escoteiro:</label>
                                <input class="form-control"
                                    type="text"
                                    id="registro"
                                    name="registro"
                                    placeholder="Digite o registro escoteiro"
                                    value={escoteiro.registro}
                                    onChange={manipularMudanca}
                                    onBlur={verificaRegistro}
                                    required></input>
                                <div class="invalid-feedback" type="invalid">
                                    O registro deve ter pelo menos 7 caracteres.
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6">
                                <label class="form-label lead">Telefone:</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    id="telefone"
                                    name="telefone"
                                    placeholder="Digite o telefone para contato"
                                    value={escoteiro.telefone}
                                    onChange={manipularMudanca}
                                    onBlur={verificaTelefone}
                                    required></input>
                                <div class="invalid-feedback" type="invalid">
                                    O telefone deve ser um número.
                                </div>
                            </div>
                            <div className="col-6">
                                <label class="form-label lead">Seção:</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    id="secao"
                                    name="secao"
                                    placeholder="Digite a seção do escoteiro"
                                    value={escoteiro.secao}
                                    onChange={manipularMudanca}
                                    onBlur={verificaSecao}
                                    required></input>
                                <div class="invalid-feedback" type="invalid">
                                    A seção deve ter pelo menos 5 caracteres.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary" variant="success" type="submit">Cadastrar</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}