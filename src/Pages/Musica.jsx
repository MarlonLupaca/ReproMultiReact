import React from 'react'
import Filtros from '../Components/Filtros'
import C_Musica from '../Components/C_Musica'
import Cabecera from '../Components/Cabecera'
import ContenedorMusica from "../Components/ContenedorMusica"
import Navegador from "../Components/Navegador"
import MusicPlayer from '../Components/MusicPlayer'



const Musica = () => {
    return (
        <>  
            <Cabecera/>
            <main className='flex flex-col gap-2 md:h-[550px] md:overflow-y-auto md:bg-[#212121] md:ml-[210px]'>
                <Filtros/>
                <span className='px-4 font-[500] text-[18px]'>Todos las musicas de Alex</span>
                <div>
                    <C_Musica name = "Musica_general"/>
                    <C_Musica name = "Musica_general_2"/>
                    <C_Musica name = "Musica_general_3"/>
                    <C_Musica name = "Musica_general"/>
                    <C_Musica name = "Musica_general_2"/>
                    <C_Musica name = "Musica_general_3"/>
                    <C_Musica name = "Musica_general"/>
                    <C_Musica name = "Musica_general_2"/>
                    <C_Musica name = "Musica_general_3"/>
                    <C_Musica name = "Musica_general"/>
                    <C_Musica name = "Musica_general_2"/>
                    <C_Musica name = "Musica_general_3"/>
                </div>
                
            </main>
            <ContenedorMusica/>
            <MusicPlayer/>
            <Navegador/>
        </>
        
    )
}

export default Musica
