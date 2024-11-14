import React, { useState, useEffect } from 'react';
import Cabecera from '../Components/Cabecera';
import ContenedorMusica from "../Components/ContenedorMusica";
import Navegador from "../Components/Navegador";
import MusicPlayerVideo from '../Components/MusicPlayerVideo';

const Video = () => {
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [playlist, setPlaylist] = useState([
        {
            url: 'http://localhost:8080/01_smells_like_teen_spirit.mp4',
            titulo: 'Smells Like Teen Spirit',
            autor: 'Nirvana',
            duracion: '4:38'
        },
        {
            url: 'http://localhost:8080/02_propuesta_indecente.mp4',
            titulo: 'Propuesta indecente',
            autor: 'Romeo Santos',
            duracion: '4:28'
        },
        {
            url: 'http://localhost:8080/03_bring_me_to_life.mp4',
            titulo: 'Bring Me To Life',
            autor: 'Evanescence',
            duracion: '4:13'
        },
        {
            url: 'http://localhost:8080/04_faded.mp4',
            titulo: 'Faded',
            autor: 'Alan Walker',
            duracion: '3:32'
        }
    ]);
    const [currentTrack, setCurrentTrack] = useState(null);

    useEffect(() => {
        // Fetch para capturar los archivos multimedias de la API
        fetch('http://localhost:8080/multimedias/allMultimedias')
            .then(response => response.json())
            .then(data => setPlaylist(data))
            .catch(error => console.error('Error fetching multimedia:', error));
    }, []);

    const handleShowAllCategories = () => {
        if (!showAllCategories) {
            setShowAllCategories(true);
            setTimeout(() => setIsOpen(true), 50); 
        } else {
            setIsOpen(false);
            setTimeout(() => setShowAllCategories(false), 300); 
        }
    };

    const handleBackgroundClick = (e) => {
        if (e.target.id === 'background') {
            handleShowAllCategories();
        }
    };

    const handleTrackClick = (track) => {
        setCurrentTrack(track);
    };

    const getVideoThumbnail = (url) => {
        // Asumimos que tienes una carpeta con miniaturas locales
        const videoId = url.split('/').pop().split('.')[0];  // Extrae el nombre del video sin la extensión
        return `http://localhost:8080/thumbnails/${videoId}.jpg`; // Cambia la extensión a la imagen de miniatura
    };    

    return (
        <>
            <Cabecera />
            <main className='flex flex-col md:flex-row h-screen bg-black text-gray-200 md:h-[550px] md:overflow-y-auto md:bg-[#212121] md:ml-[210px] pb-[100px] rounded-lg'>
                <div className='flex-1 p-6'>
                    <div className='flex justify-between items-center'>
                        <input
                            type="text"
                            placeholder="Busca algún título"
                            className='bg-[#454444] text-gray-300 w-1/2 p-2 rounded-md placeholder-[#b6b6b6] border-none outline-none transition duration-200 focus:ring focus:ring-[rgb(248,73,108)]'
                        />
                    </div>

                    <div className='mt-6'>
                        <h2 className='text-xl font-bold text-[#e2e2e2]'>Categorías más escuchadas</h2>
                        <div className='flex space-x-2 mt-4'>
                            {["Pop", "Rock", "Electrónica", "Reggaetón", "Salsa", "Bachata", "Metal"].map((category) => (
                                <button key={category} className='bg-[#454444] px-4 py-2 rounded-md hover:bg-[#f8496c] text-white transition duration-150 ease-in-out'>
                                    {category}
                                </button>
                            ))}
                            <button onClick={handleShowAllCategories} className='bg-[#454444] px-4 py-2 rounded-md text-[#e2e2e2] hover:bg-[#f8496c] transition duration-150 ease-in-out'>
                                Mostrar todos
                            </button>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <h2 className='text-xl font-bold text-[#e2e2e2]'>Escuchados recientemente</h2>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
                            {playlist.map((video, index) => (
                                <div key={index} className='p-4 transition-transform transform hover:scale-105 cursor-pointer' onClick={() => handleTrackClick(video)}>
                                    <img src={getVideoThumbnail(video.url)} alt='Video Thumbnail' className='w-full h-36 object-cover rounded-lg border-none transition-opacity duration-300 hover:opacity-70' />
                                    <p className='mt-2 text-gray-200 font-semibold'>{video.titulo}</p>
                                    <span className='text-gray-500 text-sm'>{video.duracion}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='mt-6'>
                        <h2 className='text-xl font-bold text-[#e2e2e2]'>Todos los videos</h2>
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
                                {playlist.map((video, index) => (
                                    <tr key={index} className='bg-gray-900 hover:bg-gray-800 transition-colors duration-150 cursor-pointer' onClick={() => handleTrackClick(video)}>
                                        <td className='p-4'>{index + 1}</td>
                                        <td className='p-4 flex items-center'>
                                            <img src={getVideoThumbnail(video.url)} alt='Video Thumbnail' className='w-32 h-20 object-cover mr-4 rounded-md' />
                                            <div>
                                                <p className='text-gray-200 font-semibold'>{video.titulo}</p>
                                            </div>
                                        </td>
                                        <td className='p-4'>Playlist</td>
                                        <td className='p-4'>Añadido recientemente</td>
                                        <td className='p-4'>{video.duracion}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <ContenedorMusica />
            <Navegador />
            <MusicPlayerVideo currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} playlist={playlist} />

            {showAllCategories && (
                <div id="background" onClick={handleBackgroundClick} className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out'>
                    <div className={`bg-[#212121] p-6 rounded-lg w-1/3 transform transition-transform duration-300 ease-in-out ${isOpen ? 'scale-100' : 'scale-0'}`}>
                        <h3 className='text-xl text-[#e2e2e2] font-bold mb-4'>Más Categorías</h3>
                        <div className='flex flex-wrap gap-2'>
                            {["Jazz", "Blues", "Hip-Hop", "Clásica", "Indie", "Latina", "Country", "R&B"].map((category) => (
                                <button key={category} className='bg-[#454444] px-4 py-2 rounded-md hover:bg-[#f8496c] text-white transition duration-150 ease-in-out'>
                                    {category}
                                </button>
                            ))}
                        </div>
                        <button onClick={handleShowAllCategories} className='mt-4 bg-red-600 text-gray-200 px-4 py-2 rounded-md hover:bg-red-700 transition duration-150 ease-in-out'>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Video;