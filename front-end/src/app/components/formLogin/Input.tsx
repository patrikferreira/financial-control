import React from 'react'

type Props = {
    type: string,
    placeholder?: string,
    getValue: (value: string) => void,
}

export default function Input({type, placeholder, getValue}: Props) {
    return (
        <input type={type} onChange={({target}) => {
            getValue(target.value)
        }} placeholder={placeholder}/>
    )
}
