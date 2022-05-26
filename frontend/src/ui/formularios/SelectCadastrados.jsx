import {FormSelect} from 'react-bootstrap'
import React from 'react';

const SelectCadastrados = (props)=>{
    return(
    <FormSelect id='escoteiro'>
        <option>Selecione o Escoteiro</option>
        {
        props.inscricoes.map(inscricao => (
            <option value={inscricao.Escoteiro.data[0].idescoteiro}>{inscricao.Escoteiro.data[0].nome }</option>
            
        ))}

    </FormSelect>
)
}

export default SelectCadastrados