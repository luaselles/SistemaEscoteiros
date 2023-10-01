import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IconeEdicao, IconeExclusao, IconeExcluir, IconeExibir, IconeInscrever, IconeCancelarInscricao } from "../icones/icones";

import escoteiro1 from '../../imagens/escoteiro1.png';


export default function TabelaCadastroEscoteiros(props) {


    const [show, setShow] = useState(false);
    const [data, setData] = useState({ cpf: '', registro: '', telefone: '', secao: '' });

    async function desabilitarbutton(escoteiro) {
        await fetch('http://localhost:4000/inscrever/' + escoteiro.idescoteiro, { method: "GET" })
            .then(resposta => resposta.json())
            .then(dados => {
                alert('Não e possivel inscrever novamente')
            }).catch(e => {
                props.RealizarInscricao(escoteiro)

            });
    }

    return (
        <div className="container mb-2 mt-2">
            <div className="card">
                <div className="m-3">
                    <h1 className="display-6">Informações sobre Escoteiros</h1>
                    <p className="lead">
                        Informações, sobre escoteiros, seção entre outros.
                    </p>
                    <hr />
                    <div className="row">
                        {props.escoteiros.map((escoteiro) => {
                            return (
                                <div className="col">
                                    <div className="card cardEvento" >
                                        <img src={escoteiro1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{escoteiro.nome}</h5>
                                            <p className="card-text">{escoteiro.nome}</p>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <Button onClick={() => {
                                                    setData({
                                                        cpf: escoteiro.cpf,
                                                        registro: escoteiro.registro,
                                                        telefone: escoteiro.telefone,
                                                        secao: escoteiro.secao,
                                                    })
                                                    setShow(true)
                                                }}><IconeExibir /></Button>
                                                <Button onClick={() => { props.atualizarEscoteiro(escoteiro) }}><IconeEdicao /></Button>
                                                <Button onClick={() => { props.deletarEscoteiro(escoteiro) }}><IconeExclusao /></Button>
                                                <Button onClick={() => { desabilitarbutton(escoteiro) }} ><IconeInscrever /></Button>
                                                <Button onClick={() => { props.CancelarInscricao(escoteiro.idescoteiro) }}><IconeCancelarInscricao /></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalhes do Escoteiro:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="col">CPF</th>
                                <th scope="col">Registro</th>
                            </tr>
                            <tr>
                                <td>{data.cpf}</td>
                                <td>{data.registro}</td>
                            </tr>
                            <tr>
                                <th scope="col">Telefone</th>
                                <th scope="col">Seção</th>
                            </tr>
                            <tr>
                                <td>{data.telefone}</td>
                                <td>{data.secao}</td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShow(false)}>
                        <IconeExcluir />  Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >

    );
}