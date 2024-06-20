import { useState } from 'react'
import './App.css'
import TarjetaUno from './componentes/TarjetaUno'
import TarjetaDos from './componentes/TarjetaDos'
import TarjetaTres from './componentes/TarjetaTres'
import TarjetaCuatro from './componentes/TarjetaCuatro'

function App() {
  return (
    <div className='cuerpo'>
      <div className='letrita'>
        <p className='nombre'>Exercicios</p>
      </div>
      <TarjetaUno />
      <TarjetaDos />
      <TarjetaTres />
      <TarjetaCuatro />
    </div>
  )
}

export default App
