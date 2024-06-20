import React from 'react'
import './TarjetaTres.css'
import imagen3 from '../assets/imageImagen3.png'
import flecha from '../assets/IconsFlecha.png'

function TarjetaTres() {
    return (
        <div className='tarjeta3'>
            <div className='primer3'>
                <img className='img3' src={imagen3} alt="imagen" />
                <div className='letras'>
                    <p className='tit3'>Remada Unilateral</p>
                    <p className='desc3'>3 series x 2 repeticiones</p>
                </div>
            </div>
            <img className='flecha' src={flecha} alt="flecha" />
        </div>
    )
}

export default TarjetaTres