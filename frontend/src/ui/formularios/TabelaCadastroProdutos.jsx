import { Table, Button, Modal } from "react-bootstrap";
import { IconeEdicao, IconeExclusao, IconeDinheiro, IconeLista, IconeExibir, IconeExcluir } from "../icones/icones";
import { useState } from "react";

import '../../estilos/tabela.css'
import evento1 from '../../imagens/evento1.png';


export default function TabelaCadastroProdutos(props) {

    const [show, setShow] = useState(false);
    const [data, setData] = useState({ nomeProd: '', precoCusto: '', precoVenda: '', qtdEstoque: '' });

    return (
        <div className="container mb-2 mt-2">
            <div className="card">
                <div className="m-3">
                    <h1 className="display-6">Informações sobre Produtos</h1>
                    <p className="lead">
                        Informações, sobre produtos.
                    </p>
                    <hr />
                    <div className="row">
                        {props.produtos.map((produto) => {
                            return (
                                <div className="col">
                                    <div className="card cardEvento" >
                                        <img src={evento1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{produto.nomeProd}</h5>
                                            <p className="card-text">{produto.nomeProd}</p>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <Button onClick={() => {
                                                    setData({
                                                        nomeProd: produto.nomeProd,
                                                        precoCusto: produto.precoCusto,
                                                        precoVenda: produto.precoVenda,
                                                        qtdEstoque: produto.qtdEstoque,
                                                    })
                                                    setShow(true)
                                                }}><IconeExibir /></Button>
                                                <Button onClick={() => { props.atualizarProduto(produto) }}><IconeEdicao /></Button>{' '}
                                                <Button onClick={() => { props.deletarProduto(produto) }}><IconeExclusao /></Button>
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
                    <Modal.Title>Detalhes do Produto:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="col">Nome Produto</th>
                                <th scope="col">Preço de Custo Produto</th>
                            </tr>
                            <tr>
                                <td>{data.nomeProd}</td>
                                <td>{data.precoCusto}</td>
                            </tr>
                            <tr>
                                <th scope="col">Preço de Venda Produto</th>
                                <th scope="col">Quantidade em estoque Produto</th>
                            </tr>
                            <tr>
                                <td>{data.precoVenda}</td>
                                <td>{data.qtdEstoque}</td>
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