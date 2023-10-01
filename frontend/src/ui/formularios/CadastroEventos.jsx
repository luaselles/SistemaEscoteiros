import { useState } from "react";
import { Form } from "react-bootstrap";
import evento1 from '../../imagens/evento1.png';

const localRecursos = 'http://localhost:4000/evento'

export default function CadastroEventos(props) {
    const [evento, setEvento] = useState(props.evento);
    const [formValidado, setFormValidado] = useState(false);

    function manipularSubmissaoDados(e) {
        const formulario = e.currentTarget;
        alert(formulario.checkValidity());
        if (formulario.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            props.onGravar(evento);
        }

        setFormValidado(true);
    }

    function manipularMudanca(e) {
        const componente = e.target;
        const valor = componente.value;
        const nome = componente.name;
        setEvento({ ...evento, [nome]: valor });
    }

    function verificaNome(e) {
        const componente = e.target;
        const texto = componente.value;
        if (texto.length < 4) {
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        }
        else {
            componente.setCustomValidity("");
        }
    }

    function verificaDescricao(e) {
        const componente = e.target;
        const texto = componente.value;
        if (texto.length < 6) {
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        }
        else {
            componente.setCustomValidity("");
        }
    }

    function verificaCodigo(e) {
        const componente = e.target;
        if (isNaN(Number(componente.value))) {
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        }
        else {
            componente.setCustomValidity("");
        }
    }

    return (
        <div class="container mb-2">
            <div class="mt-2 mb-2">
                <div class="row">
                    <div className="col-4">
                        <figure class="figure">
                            <img src={evento1} class="figure-img img-fluid rounded" alt="..." />
                        </figure>
                    </div>
                    <div className="col-4">
                        <figure class="figure">
                            <img src={evento1} class="figure-img img-fluid rounded" alt="..." />
                        </figure>
                    </div>
                    <div className="col-4">
                        <figure class="figure">
                            <img src={evento1} class="figure-img img-fluid rounded" alt="..." />
                        </figure>
                    </div>
                </div>
            </div>
            <div class="card">
                <div className="m-3">
                    <h1 class="display-6">Cadastre seu evento:</h1>
                    <p class="lead">
                        *Todos os campos são obrigatórios
                    </p>
                    <hr />
                    <Form noValidate validated={formValidado} onSubmit={manipularSubmissaoDados} method="get" action="#">
                        <div className="row">
                            <div className="col-4">
                                <label class="form-label lead">Código:</label>
                                <input class="form-control"
                                    type="text"
                                    id="id"
                                    name="id"
                                    value={evento.id}
                                    onChange={manipularMudanca}
                                    onBlur={verificaCodigo} disabled />
                                <Form.Control.Feedback type="invalid">
                                    Código inválido.
                                </Form.Control.Feedback>
                            </div>
                            <div className="col-8">
                                <label class="form-label lead">Responsável:</label>
                                <input class="form-control"
                                    type="text"
                                    id="respevento"
                                    name="respevento"
                                    placeholder="Nome do Responsável"
                                    value={evento.respevento}
                                    onChange={manipularMudanca}
                                    onBlur={verificaNome}
                                    required />
                                <div class="invalid-feedback" type="invalid">
                                    O nome do responsável deve ter pelo menos 4 caracteres.
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-4">
                                <label class="form-label lead">Data do Evento:</label>
                                <input class="form-control"
                                    type="date"
                                    id="data"
                                    name="data"
                                    placeholder="Digite a Data do Evento"
                                    value={evento.data}
                                    onChange={manipularMudanca}
                                    onBlur={verificaNome}
                                    required />
                            </div>
                            <div className="col-4">
                                <label class="form-label lead">Nome do Evento:</label>
                                <input class="form-control"
                                    type="text"
                                    id="nomeEvent"
                                    name="nomeEvent"
                                    placeholder="Digite o Nome do Evento"
                                    value={evento.nomeEvent}
                                    onChange={manipularMudanca}
                                    onBlur={verificaNome}
                                    required />
                                <div class="invalid-feedback" type="invalid">
                                    O nome do evento deve ter pelo menos 4 caracteres.
                                </div>
                            </div>
                            <div className="col-4">
                                <label class="form-label lead">Rua do Evento:</label>
                                <input class="form-control"
                                    type="text"
                                    id="rua"
                                    name="rua"
                                    placeholder="Digite a Rua do Evento"
                                    value={evento.rua}
                                    onChange={manipularMudanca}
                                    onBlur={verificaDescricao}
                                    required></input>
                                <div class="invalid-feedback" type="invalid">
                                    O endereço do evento deve ter pelo menos 6 caracteres.
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-2">
                                <label class="form-label lead">Bairro do Evento:</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    id="bairro"
                                    name="bairro"
                                    placeholder="Bairro"
                                    value={evento.bairro}
                                    onChange={manipularMudanca}
                                    onBlur={verificaDescricao}
                                    required></input>
                                <div class="invalid-feedback" type="invalid">
                                    O Bairro do evento deve ter pelo menos 6 caracteres.
                                </div>
                            </div>
                            <div className="col-2">
                                <label class="form-label lead">N° do endereço:</label>
                                <input
                                    class="form-control"
                                    type="number"
                                    id="num"
                                    name="num"
                                    placeholder="Número do Endereço"
                                    value={evento.num}
                                    onChange={manipularMudanca}
                                    required></input>

                            </div>
                            <div className="col-4">
                                <label class="form-label lead">Cidade do Evento:</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    id="cidade"
                                    name="cidade"
                                    placeholder="Digite a Cidade do Evento"
                                    value={evento.cidade}
                                    onChange={manipularMudanca}
                                    onBlur={verificaDescricao}
                                    required></input>
                                <div class="invalid-feedback" type="invalid">
                                    A cidade do evento deve ter pelo menos 6 caracteres.
                                </div>
                            </div>
                            <div className="col-4">
                                <label class="form-label lead">Descrição do Evento:</label>
                                <textarea class="form-control"
                                    type="text"
                                    id="descricao"
                                    name="descricao"
                                    placeholder="Digite a Descrição do Evento"
                                    value={evento.descricao}
                                    onChange={manipularMudanca}
                                    required rows="3"></textarea>
                                <div class="invalid-feedback" type="invalid">
                                    A descrição do evento deve ter pelo menos 6 caracteres.
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