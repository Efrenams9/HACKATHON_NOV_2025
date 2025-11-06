import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Menu from './components/Menu/Menu'
import NavBar from './components/NavBar/NavBar'
import AcercaDe from './components/AcercaDe/AcercaDe'
import LogIn from './components/LogIn/logIn'
import Ofertas from './components/Ofertas/ofertas'
import Usuario from './components/Usuario/usuario'
import Stock from './components/Stock/stock'
import RegisterForm from './components/RegisterForm.jsx/RegisterForm'


//*importacion de imagenes:

import muchosZapatos from "./imagenes/muchosZapatos.webp"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>     
      <logIn></logIn>
      <Menu></Menu> 
      <img src= {muchosZapatos} alt='muchos zapatos'></img>
      <AcercaDe></AcercaDe>
      
      <Usuario></Usuario>
      <LogIn></LogIn>
      <Ofertas></Ofertas>
      <Stock></Stock>
      <RegisterForm></RegisterForm>
    </>
  )
}

export default App
