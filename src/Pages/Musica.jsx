import React from 'react'
import Filtros from '../Components/Filtros'
import C_Musica from '../Components/C_Musica'
import Cabecera from '../Components/Cabecera'
import ContenedorMusica from "../Components/ContenedorMusica"
import Navegador from "../Components/Navegador"
import MusicPlayer from '../Components/MusicPlayer'
import Tabla from '../Components/Tabla'
import Caja_Recientes from '../Components/Caja_Recientes'



const Musica = () => {
    return (
        <>  
            <Cabecera/>
            <main className='flex flex-col gap-2 md:h-[550px] md:overflow-y-auto md:bg-[#212121] md:ml-[210px] py-3'>
                <Caja_Recientes cancion="cancion2"/> 
                <span className='px-4 font-[500] text-[18px]'>Todos las musicas</span>
                <Filtros/> 
                <Tabla/>
            </main>
            <ContenedorMusica/>
            <MusicPlayer/>
            <Navegador/>
        </>
        
    )
}

export default Musica
