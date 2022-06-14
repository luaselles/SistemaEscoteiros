import { useState, useEffect } from "react";

import TabelaInscritos from "./TabelaInscritos";
import { Button, Spinner, Modal, Form } from "react-bootstrap";

export default function ControladoraInscritos(props) {

    const [mostrarTabela, setMostrarTabela] = useState(true);

    return (
        <div>
            <TabelaInscritos/> 
        </div>

    );
}
