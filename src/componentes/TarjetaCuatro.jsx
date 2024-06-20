import React from 'react'
import './TarjetaCuatro.css'
import imagen4 from '../assets/imageImagen4.png'
import flecha from '../assets/IconsFlecha.png'

function TarjetaCuatro() {
    return (
        <div className='tarjeta4'>
            <div className='primer4'>
                <img className='img4' src={imagen4} alt="imagen" />
                <div className='letras'>
                    <p className='tit4'>Levantamento Terra</p>
                    <p className='desc4'>3 series x 2 repeticiones</p>
                </div>
            </div>
            <img className='flecha' src={flecha} alt="flecha" />
        </div>
    )
}

export default TarjetaCuatro