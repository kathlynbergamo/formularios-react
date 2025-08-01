import React from 'react'

const input = ({ id, label, setValue, ...props }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type='text'
                id={id}
                name={id}
                onChange={({ target }) => setValue(target.value)}
                {...props}// required
            />
        </>
    )
}

export default input
