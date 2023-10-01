import { Table, Button } from "react-bootstrap";
import { IconeEdicao, IconeExclusao, IconeDinheiro, IconeLista } from "../icones/icones";
import evento1 from '../../imagens/evento1.png';

export default function TabelaCadastroEventos(props) {
    return (
        <div class="container">
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
            <h1 class="display-6">Informações sobre Eventos</h1>
            <p class="lead">
                Informações, sobre eventos, data endereço entre outros.
            </p>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Evento</th>
                        <th scope="col">Responsável</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Rua</th>
                        <th scope="col">Bairro</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">n°</th>
                        <th scope="col">Data</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.eventos.map((evento) => {
                        return (
                            <tr key={evento.id}>
                                <td>{evento.id}</td>
                                <td>{evento.nomeEvent}</td>
                                <td>{evento.respevento}</td>
                                <td>{evento.descricao}</td>
                                <td>{evento.rua}</td>
                                <td>{evento.bairro}</td>
                                <td>{evento.cidade}</td>
                                <td>{evento.num}</td>
                                <td>{evento.data}</td>
                                <td>
                                    <Button variant="outline-success" onClick={() => { props.atualizarValor(evento) }}><IconeDinheiro /></Button>{' '}
                                    <Button variant="outline-info" onClick={() => { props.mostrarExtrato(evento) }}><IconeLista /></Button>{' '}
                                    <Button variant="outline-primary" onClick={() => { props.atualizarEvento(evento) }}><IconeEdicao /></Button>{' '}
                                    <Button variant="outline-danger" onClick={() => { props.deletarEvento(evento) }}><IconeExclusao /></Button>
                                </td>
                            </tr>)
                    })}

                </tbody>
            </table>

        </div>
    );
}