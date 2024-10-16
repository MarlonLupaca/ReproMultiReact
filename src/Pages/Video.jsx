import React from 'react'
import Filtros from '../Components/Filtros'
import C_Video from '../Components/C_Video'
import Cabecera from '../Components/Cabecera'
import ContenedorMusica from "../Components/ContenedorMusica"
import Navegador from "../Components/Navegador"


const Video = () => {
    return (
        <>
            <Cabecera/>
            <main className='flex flex-col gap-2 mb-[130px]'>
                <Filtros/>
                <span className='px-4 font-[500] text-[18px]'>Todos los videos</span>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
            </main>
            <ContenedorMusica/>
            <Navegador/>
        </>
    )
}

export default Video
