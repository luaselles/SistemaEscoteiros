import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import '../../estilos/tabelacadastrados.css'

const localRecursos = 'http://localhost:4000/inscreverescoteiro'
 
export default function InscreverEscoteiros(props){

    idescoteiro: document.getElementById('escoteiro').value


    return(
        <Container>
        <div class="flex-container">
            <form>
            <div>
                <form>
                <SelectCadastrados escoteiros ={lista} />
                </form> 
            </div>

            <button>Inscrever</button>
            </form>
            </div>
            </Container>
        );
}