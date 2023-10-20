import React from 'react'

type Props = {
    type: string,
}

export default function Input({type}: Props) {
    return (
        <input type={type} />
    )
}
