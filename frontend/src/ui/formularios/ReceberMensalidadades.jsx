import { useState,useEffect } from "react";
import { Button, Col, Container, form, Row } from "react-bootstrap";

import SelectMensalidades from "./SelectMensalidades";
import '../../estilos/tabelacadastrados.css'

const localRecursos = 'http://localhost:4000/mensarecebermensalidadelidade'
 
export default function ReceberMensalidades(props){
    const [mensalidade, setMensalidade] = useState('');
    const [lista, setlista] = useState([])

    useEffect(() => {
        fetchReceberMensalidades()

    }, [])

    async function fetchReceberMensalidades() {
        
        await fetch('http://localhost:4000/recebermensalidade/'+mensalidade.id,{method:"PUT"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setlista(dados);
        }, 
        error =>{
            alert(error)
        });
    }


    function ReceberMensalidades() {
        setMensalidade({id: document.getElementById('mensalidade').value}); 
}

    async function InscreverSubmit(e) {
        e.preventDefault();
        if(mensalidade.id != "Selecione"){
            await fetch(localRecursos,{method:"PUT",
                                headers:{'Content-Type':'application/json'},
                                body:JSON.stringify(mensalidade)
            })
            .then(resposta=>resposta.json())
        
            .catch(e=>alert(e))    
            

        }
    else{
        //swal("Não é possivel prosseguir!", "Por favor, selecione uma campanha e um beneficiario", "alert")
    }
    setMensalidade('');
}
    

    return(
        <Container>
        <div class="flex-container">
            <form onSubmit={InscreverSubmit}>
            <div>
                <form>
                <SelectMensalidades mensalidades ={lista} />
                </form> 
            </div>

            <Button onClick={ReceberMensalidades}>Inscrever</Button>
            </form>
            </div>
            </Container>
        );
}