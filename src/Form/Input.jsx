import React from 'react'

// Componente funcional "Input"
// Recebe: id (para associar label e input), label (texto que aparece no rótulo), setValue (função para atualizar o valor)
// ...props permite passar outras props extras como placeholder, required, etc.
const input = ({ id, label, onChange, ...props }) => {
    return (
        <>
            {/* Label associada ao input por meio do htmlFor e id */}
            <label htmlFor={id}>{label}</label>

            {/* Campo de input controlado */}
            <input
                type='text' // Tipo do input (pode ser alterado via props se quiser)
                id={id}     // ID usado para associar o input ao label
                name={id}   // Nome do campo, útil em formulários
                onChange={onChange} // Atualiza o valor ao digitar
                {...props} // Espalha outras props, como required, placeholder, etc.
            />
        </>
    )
}

export default input
