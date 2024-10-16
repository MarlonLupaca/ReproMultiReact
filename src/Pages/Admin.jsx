import React from 'react'
import Cabecera from '../Components/Cabecera'
import ContenedorMusica from '../Components/ContenedorMusica'
import MusicPlayer from '../Components/MusicPlayer'
import Navegador from '../Components/Navegador'
import MusicCatalog from '../Components/MusicCatalog'

const Admin = () => {
    return (
        <>
            <Cabecera/>
            <main className='flex flex-col gap-5 md:h-[550px] md:overflow-y-auto md:bg-[#212121] md:ml-[210px] px-3'>
                <MusicCatalog/>
            </main>
            <ContenedorMusica/>
            <MusicPlayer/>
            <Navegador/>
        </>
    )
}

export default Admin
