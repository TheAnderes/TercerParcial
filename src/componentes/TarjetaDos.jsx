import React from 'react'
import './TarjetaDos.css'
import imagen2 from '../assets/imageImagen2.png'
import flecha from '../assets/IconsFlecha.png'

function TarjetaDos() {
    return (
        <div className='tarjeta2'>
            <div className='primer2'>
                <img className='img2' src={imagen2} alt="imagen" />
                <div className='letras'>
                    <p className='tit2'>Remada Curvada</p>
                    <p className='desc2'>3 series x 2 repeticiones</p>
                </div>
            </div>
            <img className='flecha' src={flecha} alt="flecha" />
        </div>
    )
}

export default TarjetaDos