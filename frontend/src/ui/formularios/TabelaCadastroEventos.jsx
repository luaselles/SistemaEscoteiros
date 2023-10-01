import { Button, Modal, Table } from "react-bootstrap";
import { useState } from "react";

import { IconeEdicao, IconeExclusao, IconeDinheiro, IconeLista, IconeExibir, IconeExcluir } from "../icones/icones";
import evento1 from '../../imagens/evento1.png';

export default function TabelaCadastroEventos(props) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({ responsavel: '', rua: '', bairro: '', cidade: '', numero: '', data: '' });

    function formatData(data) {
        const novaData = new Date(data);
        novaData.toLocaleString('pt-BR');
        return novaData.getDate() + '/' + novaData.getMonth() + '/' + novaData.getFullYear();
    }

    return (
        <div className="container mb-2 mt-2">
            <div className="card">
                <div className="m-3">
                    <h1 className="display-6">Informações sobre Eventos</h1>
                    <p className="lead">
                        Informações, sobre eventos, data endereço entre outros.
                    </p>
                    <hr />
                    <div className="row">
                        {props.eventos.map((evento) => {
                            return (
                                <div className="col">
                                    <div className="card cardEvento" >
                                        <img src={evento1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{evento.nomeEvent}</h5>
                                            <p className="card-text">{evento.descricao}</p>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <Button onClick={() => {
                                                    setData({
                                                        responsavel: evento.respevento,
                                                        rua: evento.rua,
                                                        bairro: evento.bairro,
                                                        cidade: evento.cidade,
                                                        numero: evento.num,
                                                        data: formatData(evento.data)
                                                    })
                                                    setShow(true)
                                                }}><IconeExibir /></Button>
                                                <Button onClick={() => { props.atualizarValor(evento) }}><IconeDinheiro /></Button>{' '}
                                                <Button onClick={() => { props.mostrarExtrato(evento) }}><IconeLista /></Button>{' '}
                                                <Button onClick={() => { props.atualizarEvento(evento) }}><IconeEdicao /></Button>{' '}
                                                <Button onClick={() => { props.deletarEvento(evento) }}><IconeExclusao /></Button>
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
                    <Modal.Title>Detalhes do Evento:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="col">Data</th>
                                <th scope="col">Responsável</th>
                            </tr>
                            <tr>
                                <td>{data.data}</td>
                                <td>{data.responsavel}</td>
                            </tr>
                            <tr>
                                <th scope="col">Rua</th>
                                <th scope="col">Bairro</th>
                            </tr>
                            <tr>
                                <td>{data.rua}</td>
                                <td>{data.bairro}</td>
                            </tr>
                            <tr>
                                <th scope="col">Cidade</th>
                                <th scope="col">Número</th>
                            </tr>
                            <tr>
                                <td>{data.cidade}</td>
                                <td>{data.numero}</td>
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