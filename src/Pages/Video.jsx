import React, { useState } from 'react';
import Filtros from '../Components/Filtros';
import C_Video from '../Components/C_Video';
import Cabecera from '../Components/Cabecera';
import ContenedorMusica from "../Components/ContenedorMusica";
import Navegador from "../Components/Navegador";
import MusicPlayer from '../Components/MusicPlayer';

const Video = () => {
    const [showAllCategories, setShowAllCategories] = useState(false);

    const handleShowAllCategories = () => {
        setShowAllCategories(!showAllCategories);
    };

    return (
        <>
            <Cabecera />
            <main className='flex flex-col md:flex-row h-screen bg-black text-gray-200 md:h-[550px] md:overflow-y-auto md:bg-[#212121] md:ml-[210px] pb-[100px] rounded-lg'>
                {/* Main Content */}
                <div className='flex-1 p-6'>
                    <div className='flex justify-between items-center'>
                        <input
                            type="text"
                            placeholder="Busca algún título"
                            className='bg-[#454444] text-gray-300 w-1/2 p-2 rounded-md placeholder-[#b6b6b6] border-none outline-none'
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
                            <button onClick={handleShowAllCategories} className='bg-[#454444] px-4 py-2 rounded-md text-[#b6b6b6] hover:bg-gray-700'>
                                Mostrar todos
                            </button>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <h2 className='text-xl font-bold text-gray-300'>Escuchados recientemente</h2>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
                            <div className='p-4'>
                                <img src='https://i.ytimg.com/vi/hTWKbfoikeg/maxresdefault.jpg' alt='Video Thumbnail' className='w-full h-32 object-cover rounded-lg border-none' />
                                <p className='mt-2 text-gray-200 font-semibold'>Nombre música</p>
                                <span className='text-gray-500 text-sm'>Autor</span>
                            </div>
                            <div className='p-4'>
                                <img src='https://n9.cl/ef04t' alt='Video Thumbnail' className='w-full h-32 object-cover rounded-lg border-none' />
                                <p className='mt-2 text-gray-200 font-semibold'>Nombre música</p>
                                <span className='text-gray-500 text-sm'>Autor</span>
                            </div>
                            <div className='p-4'>
                                <img src='https://i.ytimg.com/vi/QFs3PIZb3js/maxresdefault.jpg' alt='Video Thumbnail' className='w-full h-32 object-cover rounded-lg border-none' />
                                <p className='mt-2 text-gray-200 font-semibold'>Nombre música</p>
                                <span className='text-gray-500 text-sm'>Autor</span>
                            </div>
                            <div className='p-4'>
                                <img src='https://i.ytimg.com/vi/60ItHLz5WEA/maxresdefault.jpg' alt='Video Thumbnail' className='w-full h-32 object-cover rounded-lg border-none' />
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
                                    <th className='p-4 w-1/12'>#</th>
                                    <th className='p-4 w-1/3'>Título</th>
                                    <th className='p-4 w-1/4'>Playlist</th>
                                    <th className='p-4 w-1/4'>Fecha en que se añadió</th>
                                    <th className='p-4 w-1/6'>Duración</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-gray-900 hover:bg-gray-800'>
                                    <td className='p-4'>1</td>
                                    <td className='p-4 flex items-center'>
                                        <img
                                            src='https://i.ytimg.com/vi/hTWKbfoikeg/maxresdefault.jpg'
                                            alt='Video Thumbnail'
                                            className='w-32 h-20 object-cover mr-4 rounded-md'
                                        />
                                        <div>
                                            <p className='text-gray-200 font-semibold'>Nombre Música</p>
                                            <span className='text-gray-500 text-sm'>Autor</span>
                                        </div>
                                    </td>
                                    <td className='p-4'>Playlist</td>
                                    <td className='p-4'>Añadido hace 1 semana</td>
                                    <td className='p-4'>3:15</td>
                                </tr>
                                <tr className='bg-gray-900 hover:bg-gray-800'>
                                    <td className='p-4'>2</td>
                                    <td className='p-4 flex items-center'>
                                        <img
                                            src='https://n9.cl/ef04t'
                                            alt='Video Thumbnail'
                                            className='w-32 h-20 object-cover mr-4 rounded-md'
                                        />
                                        <div>
                                            <p className='text-gray-200 font-semibold'>Nombre Música</p>
                                            <span className='text-gray-500 text-sm'>Autor</span>
                                        </div>
                                    </td>
                                    <td className='p-4'>Playlist</td>
                                    <td className='p-4'>Añadido hace 1 semana</td>
                                    <td className='p-4'>3:15</td>
                                </tr>
                                <tr className='bg-gray-900 hover:bg-gray-800'>
                                    <td className='p-4'>3</td>
                                    <td className='p-4 flex items-center'>
                                        <img
                                            src='https://i.ytimg.com/vi/QFs3PIZb3js/maxresdefault.jpg'
                                            alt='Video Thumbnail'
                                            className='w-32 h-20 object-cover mr-4 rounded-md'
                                        />
                                        <div>
                                            <p className='text-gray-200 font-semibold'>Nombre Música</p>
                                            <span className='text-gray-500 text-sm'>Autor</span>
                                        </div>
                                    </td>
                                    <td className='p-4'>Playlist</td>
                                    <td className='p-4'>Añadido hace 1 semana</td>
                                    <td className='p-4'>3:15</td>
                                </tr>
                                <tr className='bg-gray-900 hover:bg-gray-800'>
                                    <td className='p-4'>4</td>
                                    <td className='p-4 flex items-center'>
                                        <img
                                            src='https://i.ytimg.com/vi/60ItHLz5WEA/maxresdefault.jpg'
                                            alt='Video Thumbnail'
                                            className='w-32 h-20 object-cover mr-4 rounded-md'
                                        />
                                        <div>
                                            <p className='text-gray-200 font-semibold'>Nombre Música</p>
                                            <span className='text-gray-500 text-sm'>Autor</span>
                                        </div>
                                    </td>
                                    <td className='p-4'>Playlist</td>
                                    <td className='p-4'>Añadido hace 1 semana</td>
                                    <td className='p-4'>3:15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <ContenedorMusica />
            <MusicPlayer />
            <Navegador />
            {/* Ventana emergente de categorías */}
            {showAllCategories && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                    <div className='bg-[#212121] p-6 rounded-lg w-1/3'>
                        <h3 className='text-xl text-gray-300 font-bold mb-4'>Más Categorías</h3>
                        <div className='flex flex-wrap gap-2'>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Jazz</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Blues</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Hip-Hop</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Clásica</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Indie</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Latina</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>Country</button>
                            <button className='bg-[#454444] px-4 py-2 rounded-md hover:bg-gray-700'>R&B</button>
                        </div>
                        <button onClick={handleShowAllCategories} className='mt-4 bg-red-600 text-gray-200 px-4 py-2 rounded-md hover:bg-red-700'>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Video;