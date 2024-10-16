import React from 'react'
import "../Css/Customs.css"

const ContenedorMusica = () => {
    return (
        <div className='fixed w-full h-[60px] bottom-[60px] px-5 flex flex-col justify-center md:hidden'>
            <div className='w-full h-full rounded-[8px] bg-[rgb(247,9,243)] flex items-center p-2 justify-between filtro_gris'>
                <div className='flex gap-3 ml-1'>
                    <img src="assets/cancionRepro.jpg" alt="" className='h-[45px] rounded-[5px] filtro_sin_gris'/>
                    <div className='flex flex-col h-[45px] justify-center text-[12px]'>
                        <span className='font-bold'>Nombre de la cancion</span>
                        <span>Autor de la cancion</span>
                    </div>
                </div>
                <div className='h-full flex items-center gap-5 text-[22px] mr-[15px]'>
                    <i class="fa-solid fa-play"></i>
                    <i class="fa-solid fa-pause"></i>
                    <i class="fa-solid fa-heart"></i>
                </div>
            </div>

        </div>
    )
}

export default ContenedorMusica

