import React from 'react'

export function Calculo(dato, resultado1) {
    
    const {result, rest} = dato.dato; //IMPORTANTE, LOS DATOS SE TIENEN QUE LLAMAR IGUAL QUE LOS DECLARADOS PREVIAMENTE 
    // const {resultado} = resultado1;
    // debugger
    return (
        <div>
            <div>La suma de todo es {result}</div>
            <div>La resta de todo es {rest}</div>
        </div>

    )
}
