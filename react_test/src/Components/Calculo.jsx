import React from 'react'

export function Calculo(valor) {

    const {result, rest} = valor.valor; //IMPORTANTE, LOS DATOS SE TIENEN QUE LLAMAR IGUAL QUE LOS DECLARADOS PREVIAMENTE 

    return (
        <div>
            <div>La suma de todo es {result}</div>
            <div>La resta de todo es {rest}</div>
        </div>

    )
}
