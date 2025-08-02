import React from 'react'

// Componente Checkbox
// Recebe:
// - options: array com as opções para exibir
// - value: array com as opções marcadas
// - setValue: função para atualizar as opções marcadas
const Checkbox = ({ options, value, setValue }) => {
    function handleChange({ target }) {
        if (target.checked) {
            // Se o checkbox foi marcado (true):
            // Adiciona o valor do checkbox ao array atual
            setValue([...value, target.value]);
        } else {
            // Se o checkbox foi desmarcado (false):
            // Remove o valor do checkbox do array atual
            setValue(value.filter((itemValue) => itemValue !== target.value));
        } // Verifica se o valor já está no array
        // Se estiver, remove; se não estiver, adiciona
    }

    return (
        <>
            {options.map((option) => (
                <label key={option}>
                    <input type="checkbox" value={option} checked={value.includes(option)} onChange={handleChange} />
                    {option}
                </label>
            ))}
        </>
    )
}

export default Checkbox
