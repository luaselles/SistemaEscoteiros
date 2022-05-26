import {FormSelect} from 'react-bootstrap'
import React from 'react';

const SelectMensalidades = (props)=>{
    return(
    <FormSelect id='mensalidade'>
        <option>Selecione</option>
        {
        props.mensalidades.map(mensalidade => (
            <option value={mensalidade.id}>{mensalidade.valor}{mensalidade.dataPag}{mensalidade.dataVen}{mensalidade.escoteiro.idescoteiro}</option>
        ))}

    </FormSelect>
)
}

export default SelectMensalidades