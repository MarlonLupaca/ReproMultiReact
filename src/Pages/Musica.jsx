import React from 'react'
import Filtros from '../Components/Filtros'
import C_Musica from '../Components/C_Musica'
import Cabecera from '../Components/Cabecera'
import ContenedorMusica from "../Components/ContenedorMusica"
import Navegador from "../Components/Navegador"



const Musica = () => {
    return (
        <>  
            <Cabecera/>
            <main className='flex flex-col gap-2 mb-[130px]'>
                <Filtros/>
                <span className='px-4 font-[500] text-[18px]'>Todos las musicas</span>
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
            <Navegador/>
        </>
        
    )
}

export default Musica
