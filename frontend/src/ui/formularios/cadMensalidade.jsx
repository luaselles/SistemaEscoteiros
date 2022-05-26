import { useState,useEffect } from "react";
import { Button, Col, Container, form, Row } from "react-bootstrap";

import selectMensalidades from "./selectMensalidades";
import '../../estilos/tabelacadastrados.css'


const localRecursos = 'http://localhost:4000/mensalidade'
 
export default function CadMensalidade(props){
    const [mens, setMens] = useState('');
    const [lista, setlista] = useState([])

    useEffect(() => {
        fetchMensalidade()

    }, [])

    async function fetchMensalidade() {
        await fetch('localhost:4000/recebermensalidade/'+mens.id,{method:"PUT"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setlista(dados);
        }, 
        error =>{
            alert(error)
        });
        console.log(lista)
    }


    function Inscrever() {
        setMens({id: document.getElementById('mensalidade').value}); 
}

    async function InscreverSubmit(e) {
        e.preventDefault();
        if(mens.id != "Selecione"){
            await fetch(localRecursos,{method:"PUT",
                                headers:{'Content-Type':'application/json'},
                                body:JSON.stringify(mens)
            })
            .then(resposta=>resposta.json())
        
            .catch(e=>alert(e))    
            

        }
    else{
        //swal("Não é possivel prosseguir!", "Por favor, selecione uma campanha e um beneficiario", "alert")
    }
    setMens('');
}
    

    return(
        <Container>
        <div class="flex-container">
            <form onSubmit={InscreverSubmit}>
            <div>
                <form>
                <selectMensalidades mensalidades ={lista} />
                </form> 
            </div>

            <Button onClick={Inscrever}>Inscrever</Button>
            </form>
            </div>
            </Container>
        );
}