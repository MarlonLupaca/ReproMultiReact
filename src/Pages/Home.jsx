import React from 'react'
import Caja_Archivos from "../Components/Caja_Archivos"
import Caja_Recientes from "../Components/Caja_Recientes"
import Cabecera from '../Components/Cabecera'
import ContenedorMusica from "../Components/ContenedorMusica"
import Navegador from "../Components/Navegador"
import MusicPlayer from '../Components/MusicPlayer'


const Home = () => {
    return (
        <>
            <Cabecera/>
            <main className="flex flex-col gap-10 py-4 md:ml-[210px] md:h-[550px] md:overflow-y-auto md:bg-[#212121]">
                <Caja_Recientes cancion="cancion1"/> 
                <Caja_Archivos/>
            </main>
            <ContenedorMusica/>
            <MusicPlayer/>
            <Navegador/>
        </>
    )
}

export default Home
