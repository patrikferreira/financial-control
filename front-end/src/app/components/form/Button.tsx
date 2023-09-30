import React from 'react'

type Props = {
    description: string,
}

export default function Button({description}: Props) {
  const buttonStyle = {
    height: '40px',
    border: 'none',
    cursor: 'pointer',
    padding: '5px 10px',
  }
  return (
    <button style={buttonStyle}>{description}</button>
  )
}
