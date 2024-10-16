
import React from 'react';
import Filtros from '../Components/Filtros';
import C_Video from '../Components/C_Video';
import Cabecera from '../Components/Cabecera';
import ContenedorMusica from "../Components/ContenedorMusica";
import Navegador from "../Components/Navegador";
import MusicPlayer from '../Components/MusicPlayer'

const Video = () => {
    return (
        <>
            <Cabecera />
            <main className='flex flex-col md:flex-row h-screen bg-black text-gray-200'>
                {/* Main Content */}
                <div className='flex-1 p-6'>
                    <div className='flex justify-between items-center'>
                        <input
                            type="text"
                            placeholder="Busca algún título"
                            className='bg-[#454444] text-gray-300 w-1/2 p-2 rounded-md placeholder-[#b6b6b6]'
                        />
                    </div>


                    <div className='mt-6'>
                        <h2 className='text-xl font-bold text-gray-300'>Categorías más escuchadas</h2>
                        <div className='flex space-x-2 mt-4'>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Pop</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Rock</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Electrónica</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Reggaetón</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Salsa</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Bachata</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Metal</button>
                            {/* Botón Mostrar Todos */}
                            <button className='bg-[#454444] px-4 py-2 rounded-md text-[#b6b6b6] hover:bg-gray-700'>
                                Mostrar todos
                            </button>

                        </div>
                    </div>

                    <div className='mt-6'>
                        <h2 className='text-xl font-bold text-gray-300'>Escuchados recientemente</h2>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
                            <div className='p-4'>
                                <img src='https://i.ytimg.com/vi/hTWKbfoikeg/maxresdefault.jpg' alt='Video Thumbnail' className='w-full h-32 object-cover rounded-lg' />
                                <p className='mt-2 text-gray-200 font-semibold'>Nombre música</p>
                                <span className='text-gray-500 text-sm'>Autor</span>
                            </div>
                            <div className='p-4'>
                                <img src='https://n9.cl/ef04t' alt='Video Thumbnail' className='w-full h-32 object-cover rounded-lg' />
                                <p className='mt-2 text-gray-200 font-semibold'>Nombre música</p>
                                <span className='text-gray-500 text-sm'>Autor</span>
                            </div>
                            <div className='p-4'>
                                <img src='https://i.ytimg.com/vi/QFs3PIZb3js/maxresdefault.jpg' alt='Video Thumbnail' className='w-full h-32 object-cover rounded-lg' />
                                <p className='mt-2 text-gray-200 font-semibold'>Nombre música</p>
                                <span className='text-gray-500 text-sm'>Autor</span>
                            </div>
                            <div className='p-4'>
                                <img src='https://i.ytimg.com/vi/60ItHLz5WEA/maxresdefault.jpg' alt='Video Thumbnail' className='w-full h-32 object-cover rounded-lg' />
                                <p className='mt-2 text-gray-200 font-semibold'>Nombre música</p>
                                <span className='text-gray-500 text-sm'>Autor</span>
                            </div>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <h2 className='text-xl font-bold text-gray-300'>Todos los videos</h2>
                        <table className='w-full mt-4 table-auto bg-[#686868]'>
                            <thead>
                                <tr className='text-left bg-[#454444]'>
                                    <th className='p-2'>#</th>
                                    <th className='p-2'>Título</th>
                                    <th className='p-2'>Playlist</th>
                                    <th className='p-2'>Fecha en que se añadió</th>
                                    <th className='p-2'>Duración</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-gray-900 hover:bg-gray-800'>
                                    <td className='p-2'>1</td>
                                    <td className='p-2'>Nombre Música</td>
                                    <td className='p-2'>Playlist</td>
                                    <td className='p-2'>Añadido hace 1 semana</td>
                                    <td className='p-2'>3:15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            <ContenedorMusica/>
            <MusicPlayer/>
            <Navegador/>
        </>
    );
}

export default Video;