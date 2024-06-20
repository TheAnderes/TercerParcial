import { useState } from 'react'
import './App.css'
import TarjetaUno from './componentes/TarjetaUno'
import TarjetaDos from './componentes/TarjetaDos'

function App() {


  return (
    <div className='cuerpo'>
      <TarjetaUno />
      <TarjetaDos />
    </div>
  )
}

export default App
