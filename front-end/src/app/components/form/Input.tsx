import React from 'react'

type Props = {
    type: string,
    getValue: (value: string) => void,
}

export default function Input({type, getValue}: Props) {
    return (
        <input type={type} onChange={({target}) => {
            getValue(target.value)
        }}/>
    )
}
