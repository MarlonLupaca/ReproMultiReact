import React from 'react'
import C_input from '../Components/C_input'
import C_eleccion from '../Components/C_eleccion'
import Cabecera from '../Components/Cabecera'
import ContenedorMusica from "../Components/ContenedorMusica"
import Navegador from "../Components/Navegador"
import Caja_Recientes from '../Components/Caja_Recientes'
import MusicPlayer from '../Components/MusicPlayer'

const Descarga = () => {
    return (
        <>
            <Cabecera/>
            <main className='flex flex-col gap-5 md:h-[550px] md:overflow-y-auto md:bg-[#212121] md:ml-[210px]'>
                <span className='px-4 font-[500] text-[18px] mt-2'>Descargar contenido 4-0</span>
                <C_input/>
                <C_eleccion/>
                <Caja_Recientes cancion="cancion2"/>
            </main>
            <ContenedorMusica/>
            <MusicPlayer/>
            <Navegador/>
        </>
        
    )
}

export default Descarga
