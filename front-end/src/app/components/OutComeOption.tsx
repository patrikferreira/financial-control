import React from 'react'

type Props = {
    sendValue: (selectedValue: number) => void
}

export default function OutComeOption({sendValue}: Props) {

    return (
        <select name="" id="" onChange={(event) => sendValue(parseInt(event.target.value, 10))}>
            <option value={1}>Contas Fixas</option>
            <option value={2}>Cartão de Crédito</option>
            <option value={3}>Estudos</option>
            <option value={4}>Alimentação</option>
            <option value={5}>Lazer</option>
            <option value={6}>Investimentos</option>
            <option value={7}>Outros</option>
        </select>
    )
}
