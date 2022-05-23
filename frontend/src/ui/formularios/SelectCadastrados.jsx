import {FormSelect} from 'react-bootstrap'
import React from 'react';

const SelectCadastrados = (props)=>{
    return(
    <FormSelect id='escoteiro'>
        <option>Selecione o Escoteiro</option>
        {
        props.escoteiros.map(escoteiro => (
            <option value={escoteiro.idescoteiro}>{escoteiro.nomeEscoteiro}</option>
        ))}

    </FormSelect>
)
}

export default SelectCadastrados