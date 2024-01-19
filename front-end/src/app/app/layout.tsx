import React from 'react'
import Auth from '../components/Auth'
import Header from '../components/Header'

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <Auth>
        <Header />
        {children}
      </Auth>
    </>
  )
}
