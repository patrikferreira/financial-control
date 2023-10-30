import React from 'react'
import Auth from '../components/Auth'


export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {

  return (
    <>
        <Auth>{children}</Auth>
    </>
  )
}
