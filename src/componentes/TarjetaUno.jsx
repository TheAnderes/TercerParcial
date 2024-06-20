import React from 'react'
import './TarjetaUno.css'
import imagen1 from '../assets/imageImagen1.png'
import flecha from '../assets/IconsFlecha.png'

function TarjetaUno() {
    return (
        <div className='tarjeta1'>
            <div className='primer1'>
                <img className='img1' src={imagen1} alt="imagen" />
                <div className='letras'>
                    <p className='tit1'>Puxada Frontal</p>
                    <p className='desc1'>3 series x 2 repeticiones</p>
                </div>
            </div>
            <img className='flecha' src={flecha} alt="flecha" />
        </div>
    )
}

export default TarjetaUno