import React from 'react'

// Componente funcional "Select"
// Recebe: options (array de opções), value (valor selecionado), setValue (função para atualizar o valor)
// ...props permite passar outras props extras, como className, id, etc.
const Select = ({ options, value, setValue, ...props }) => {
    return (
        // <select> controlado: seu valor é definido pela prop 'value'
        // Quando o valor mudar, chamamos setValue com o novo valor selecionado
        <select value={value} onChange={({ target }) => setValue(target.value)} {...props}>
            
            {/* Opção padrão desabilitada, que serve como placeholder */}
            <option value="" disabled>
                Selecione
            </option>

            {/* Para cada item do array 'options', renderizamos uma <option> */}
            {options.map((option) => (
                <option key={option} value={option}>
                    {option} {/* Texto visível no menu suspenso */}
                </option>
            ))}
        </select>
    );
};

export default Select
