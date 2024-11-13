import React from 'react'
import Cabecera from '../Components/Cabecera'
import ContenedorMusica from '../Components/ContenedorMusica'
import MusicPlayer from '../Components/MusicPlayer'
import Navegador from '../Components/Navegador'
import MusicCatalog from '../Components/MusicCatalog'
import TablaUsuarios from '../Components/TablaUsuarios'

const Admin = () => {
    return (
        <>
            <Cabecera/>
            <main className='rounded-lg flex flex-col pt-4 md:h-[580px] md:overflow-y-auto md:bg-[#212121] md:ml-[210px] px-8'>
            <h3 className="text-white text-3xl font-bold mb-6">Catalogo de usuarios</h3>
                <TablaUsuarios/>
            </main>
            <ContenedorMusica/>
            <MusicPlayer/>
            <Navegador/>
        </>
    )
}

export default Admin
