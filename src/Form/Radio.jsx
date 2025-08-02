import React from 'react'

// Componente funcional chamado "Radio"
// Recebe as props: options (array de opções), value (valor selecionado) e setValue (função para atualizar o valor)
const Radio = ({ options, value, setValue, ...props }) => {
    return (
        <>
            {/* Faz um loop em cada item do array 'options' */}
            {options.map((option) => (
                // Cada input deve estar dentro de um label e ter uma 'key' única
                <label key={option}>
                    <input
                        type="radio"           // Define o tipo do input como botão de rádio
                        value={option}         // Valor do input atual
                        checked={value === option} // Define se este input está selecionado comparando com o valor atual
                        onChange={({ target }) => setValue(target.value)} // Atualiza o valor ao selecionar uma opção
                        {...props}
                   />
                    {option} {/* Texto que aparece ao lado do botão */}
                </label>
            ))}
        </>
    )
}

export default Radio
