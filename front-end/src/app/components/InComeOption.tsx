import React from 'react'

type Props = {
    sendValue: (selectedValue: number) => void
}


export default function InComeOption({sendValue}: Props) {
    return (
        <select name="" id=""  onChange={(event) => sendValue(parseInt(event.target.value, 10))}>
            <option value={1}>Salário</option>
            <option value={2}>Outros</option>
        </select>
    )
}
