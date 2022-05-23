import { useState,useEffect } from "react";
import { Button, Col, Container, form, Row } from "react-bootstrap";

import SelectCadastrados from "../formularios/SelectCadastrados";
import '../../estilos/tabelacadastrados.css'


const localRecursos = 'http://localhost:4000/inscreverescoteiro'
 
export default function InscreverEscoteiros(props){
    const [inscricao, setInscricao] = useState('');
    const [lista, setlista] = useState([])

    useEffect(() => {
        fetchInscreverescoteiros()

    }, [])

    async function fetchInscreverescoteiros() {
        await fetch('http://localhost:4000/inscreverescoteiro'+localStorage.getItem("idescoteiro"),{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setlista(dados);
        }, 
        error =>{
            alert(error)
        });
    }


    function Inscrever() {
        setInscricao({idescoteiro: document.getElementById('idescoteiro').value}); 
}

    async function InscreverSubmit(e) {
        e.preventDefault();
        if(inscricao.idescoteiro != "Selecione o Inscrever"){
            await fetch(localRecursos,{method:"PUT",
                                headers:{'Content-Type':'application/json'},
                                body:JSON.stringify(inscricao)
            })
            .then(resposta=>resposta.json())
        
            .catch(e=>alert(e))    
            

        }
    else{
        //swal("Não é possivel prosseguir!", "Por favor, selecione uma campanha e um beneficiario", "alert")
    }
    setInscricao('');
}
    

    return(
        <Container>
        <div class="flex-container">
            <form onSubmit={InscreverSubmit}>
            <div>
                <form>
                <SelectCadastrados escoteiros ={lista} />
                </form> 
            </div>

            <Button onClick={Inscrever}>Inscrever</Button>
            </form>
            </div>
            </Container>
        );
}