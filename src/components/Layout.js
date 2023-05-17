import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => { //permette di riconoscere come figli tutti i componenti che passiamo al layout
  return (                      //tutto ciò che andremo a passare all'interno dei tag layout farà parte delle navbar e del footer
    <>
    <NavBar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout