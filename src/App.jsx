import { useState } from 'react'
import './App.css'
import TarjetaUno from './componentes/TarjetaUno'
import TarjetaDos from './componentes/TarjetaDos'
import TarjetaTres from './componentes/TarjetaTres'

function App() {
  return (
    <div className='cuerpo'>
      <TarjetaUno />
      <TarjetaDos />
      <TarjetaTres />
    </div>
  )
}

export default App
