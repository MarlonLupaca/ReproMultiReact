import React from 'react'
import Filtros from '../Components/Filtros'
import C_Video from '../Components/C_Video'
import Cabecera from '../Components/Cabecera'
import ContenedorMusica from "../Components/ContenedorMusica"
import Navegador from "../Components/Navegador"
import MusicPlayer from '../Components/MusicPlayer'


const Video = () => {
    return (
        <>
            <Cabecera/>
            <main className='flex flex-col gap-2 md:h-[550px] md:overflow-y-auto md:bg-[#212121] md:ml-[210px]'>
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
            <MusicPlayer/>
            <Navegador/>
        </>
    )
}

export default Video
