import React from 'react'
import Caja_Archivos from "../Components/Caja_Archivos"
import Caja_Recientes from "../Components/Caja_Recientes"
import Cabecera from '../Components/Cabecera'
import ContenedorMusica from "../Components/ContenedorMusica"
import Navegador from "../Components/Navegador"


const Home = () => {
    return (
        <>
            <Cabecera/>
            <main className="flex flex-col gap-10 py-4 mb-[120px]">
                <Caja_Recientes cancion="cancion1"/> 
                <Caja_Archivos/>
            </main>
            <ContenedorMusica/>
            <Navegador/>
        </>
    )
}

export default Home
