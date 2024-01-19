import React from 'react'

type Props = {
    type: string,
    placeholder?: string,
    getValue: (value: string) => void,
    id?: string,
    onKeyDown?: (event: any) => void,
}

export default function Input({type, placeholder, getValue, id, onKeyDown}: Props) {
    return (
        <input type={type} onChange={({target}) => {
            getValue(target.value)
        }} placeholder={placeholder} id={id} onKeyDown={onKeyDown}/>
    )
}
