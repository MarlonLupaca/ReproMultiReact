import React from 'react'
import C_input from '../Components/C_input'
import C_eleccion from '../Components/C_eleccion'
import Cabecera from '../Components/Cabecera'
import ContenedorMusica from "../Components/ContenedorMusica"
import Navegador from "../Components/Navegador"
import Caja_Recientes from '../Components/Caja_Recientes'

const Descarga = () => {
    return (
        <>
            <Cabecera/>
            <main className='flex flex-col gap-5 mb-[150px]'>
                <span className='px-4 font-[500] text-[18px] mt-2'>Descargar contenido</span>
                <C_input/>
                <C_eleccion/>
                <Caja_Recientes cancion="cancion2"/>
            </main>
            <ContenedorMusica/>
            <Navegador/>
        </>
        
    )
}

export default Descarga
