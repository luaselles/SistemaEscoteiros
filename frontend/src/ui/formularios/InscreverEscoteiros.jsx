import { useState,useEffect } from "react";
import { Button, Col, Container, form, Row } from "react-bootstrap";

import SelectCadastrados from "../formularios/SelectCadastrados";
import TabelaInscritos from "../formularios/TabelaInscritos";
import '../../estilos/tabelacadastrados.css'


const localRecursos = 'http://localhost:4000/inscrever'
 
export default function InscreverEscoteiros(props){
    const [inscricao, setInscricao] = useState('');
    const [lista, setlista] = useState([])
    const [listasec, setlistasec] = useState([])

    useEffect(() => {
        fetchInscreverescoteiros()
        fetchlistaInscricao()
    }, [])

    async function fetchInscreverescoteiros() {
        
        await fetch('http://localhost:4000/inscrever/status/0',{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setlista(dados);
        }, 
        error =>{
            
        });
        console.log(lista)
    }

    async function fetchlistaInscricao() {
        
        await fetch('http://localhost:4000/inscrever/status/1',{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setlistasec(dados);
        }, 
        error =>{
            
        });
        console.log(listasec)
    }

    function Inscrever() {
        setInscricao({idescoteiro: document.getElementById('escoteiro').value}); 
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
    }
    setInscricao('');
}
    

    return(
        <Container>
        <div class="flex-container">
            <form onSubmit={InscreverSubmit}>
            <div>
                <form>
                <SelectCadastrados inscricoes ={lista} />
                
                </form> 
               
            </div>

            <Button onClick={Inscrever}>Inscrever</Button>
            </form>
            </div>

            <div><TabelaInscritos inscricoes = {listasec}/></div>
            </Container>
        );
}