import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import '../../estilos/tabelacadastrados.css'

const localRecursos = 'http://localhost:4000/inscreverescoteiro'
 
export default function InscreverEscoteiros(props){
    const [escoteiro,setEscoteiros] = useState(props.escoteiro);
    const [formValidado, setFormValidado] = useState(false);

    return(
        <Container>
        <div class="flex-container">
            <div><p>CONTEUDO AQUIII</p></div>
            </div>
            </Container>
        );
}