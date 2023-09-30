import React from 'react'

type Props = {
    type: string,
    placeholder: string,
}

export default function Input({type, placeholder}: Props) {
    const inputStyle = {
        height: '40px',
        border: '1px solid #d0d7de',
        padding: '5px 10px',
        outline: 'none',
    }
    return (
        <input type={type} placeholder={placeholder} style={inputStyle}/>
    )
}
