import React from 'react'
import NavBarComponent from './NavBarComponent'
import Footer from './FooterComponent'
import FooterComponent from './FooterComponent'

export default function Layout({children}) {
  return (
    <>
      <NavBarComponent/>
      <main>
        {children}
      </main>
    <FooterComponent/>
    </>
  )
}
