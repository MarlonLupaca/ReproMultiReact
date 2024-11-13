import React, { useState } from 'react';
import "../Css/Customs.css";

const Playlist = ({ bg_color, playlistName, songCount }) => {
    // Estado para controlar la visibilidad del modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Función para abrir el modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Ejemplo de canciones para la tabla (estos datos pueden ser dinámicos)
    const songs = [
        { id: "1", title: 'Song 1', artist: 'Artist 1', duration: '3:15' },
        { id: "2", title: 'Song 2', artist: 'Artist 2', duration: '4:05' },
        { id: "3", title: 'Song 3', artist: 'Artist 3', duration: '2:45' },
    ];

    return (
        <>
            {/* Playlist */}
            <div
                className='flex items-center justify-between cursor-pointer p-4 rounded-lg bg-[#333] hover:bg-[#444] transition'
                onClick={openModal} // Abre el modal al hacer clic
            >
                <div className='flex items-center gap-3'>
                    {/* Ícono de Playlist */}
                    <div className='h-9 w-9 flex rounded-full justify-center items-center filtro_gris_2' style={{ background: bg_color }}>
                        <i className="fa-solid fa-music"></i>
                    </div>

                    {/* Nombre de la playlist y el conteo de canciones */}
                    <div className='flex flex-col items-start'>
                        <span className='text-[16px] font-[400] text-white'>{playlistName}</span>
                        {songCount && <span className='text-[14px] text-gray-400'>{songCount} canciones</span>}
                    </div>
                </div>

                {/* Ícono de opciones */}
                <i className="fa-solid fa-ellipsis-vertical text-white cursor-pointer hover:text-gray-400"></i>
            </div>

            {/* Modal con la tabla de canciones */}
            {isModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-[#222] p-6 rounded-lg w-full md:w-3/4 lg:w-2/3'>
                        {/* Título del modal con más espacio */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className='text-white text-2xl font-semibold'>{playlistName}</h2>
                            <i 
                                className="fa-solid fa-xmark text-white cursor-pointer"
                                onClick={closeModal}
                            ></i>
                        </div>

                        {/* Información de la playlist */}
                        <div className="flex justify-between text-white mb-4">
                            <span className="text-[16px]">{songCount} canciones</span>
                            <span className="text-[16px]">Duración total: 15:05</span>
                        </div>

                        {/* Tabla de canciones */}
                        <div className='overflow-x-auto'>
                            <table className='w-full min-h-[250px] text-[rgba(255,255,255,0.88)]'>
                                <thead className='border-b-2 border-[rgba(255,255,255,0.52)]'>
                                    <tr className='grid_table mb-2'>
                                        <th className='text-center'><i className="fa-solid fa-fire"></i></th>
                                        <th className='text-start'>Título</th>
                                        <th className='text-start'>Artista</th>
                                        <th className='text-center'><i className="fa-regular fa-clock"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {songs.map((song, index) => (
                                        <tr 
                                            key={index} 
                                            className='grid_table py-3 cursor-pointer hover:bg-[#444]'
                                        >
                                            <td className='text-center'>{song.id}</td>
                                            <td className='text-start'>{song.title}</td>
                                            <td className='text-start'>{song.artist}</td>
                                            <td className='text-center'>{song.duration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Botón para cerrar el modal */}
                        <div className="flex justify-end">

                            <button
                                onClick={closeModal}
                                className='w-fit px-4 py-2 bg-[#ff4081] text-white font-bold rounded-lg hover:bg-[#ff5a92] transition'
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Playlist;
