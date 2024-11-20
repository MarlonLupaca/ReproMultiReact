import React, { useState } from 'react';
import "../Css/Customs.css";

const Playlist = ({ bg_color, playlistName, songCount, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [songs, setSongs] = useState([
        { id: "1", title: 'Song 1', artist: 'Artist 1', duration: '3:15' },
        { id: "2", title: 'Song 2', artist: 'Artist 2', duration: '4:05' },
        { id: "3", title: 'Song 3', artist: 'Artist 3', duration: '2:45' },
    ]);
    const [isEditing, setIsEditing] = useState(false);
    const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
    const [newPlaylistName, setNewPlaylistName] = useState(playlistName);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSaveEdit = () => {
        setIsEditing(false);
    };

    const handleConfirmDelete = () => {
        if (onDelete) onDelete(); // Llama la función proporcionada por el padre
        setIsConfirmingDelete(false);
    };

    return (
        <>
            {/* Playlist */}
            <div
                className='flex items-center justify-between cursor-pointer p-4 rounded-lg bg-[#333] hover:bg-[#444] transition'
                onClick={openModal}
            >
                <div className='flex items-center gap-3'>
                    <div className='h-9 w-9 flex rounded-full justify-center items-center filtro_gris_2' style={{ background: bg_color }}>
                        <i className="fa-solid fa-music"></i>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='text-[16px] font-[400] text-white'>{newPlaylistName}</span>
                        {songCount && <span className='text-[14px] text-gray-400'>{songCount} canciones</span>}
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsEditing(true);
                        }}
                    >
                        Editar
                    </button>
                    <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsConfirmingDelete(true);
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            </div>

            {/* Modal para editar nombre */}
            {isEditing && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-[#222] p-6 rounded-lg w-full md:w-1/2 lg:w-1/3'>
                        <h2 className='text-white text-xl font-semibold mb-4'>Editar Nombre de la Playlist</h2>
                        <input
                            type="text"
                            value={newPlaylistName}
                            onChange={(e) => setNewPlaylistName(e.target.value)}
                            className="w-full bg-[#333] text-white px-4 py-2 rounded mb-4"
                        />
                        <div className='flex justify-end gap-2'>
                            <button
                                onClick={() => setIsEditing(false)}
                                className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSaveEdit}
                                className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de confirmación de eliminación */}
            {isConfirmingDelete && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-[#222] p-6 rounded-lg w-full md:w-1/2 lg:w-1/3'>
                        <h2 className='text-white text-xl font-semibold mb-4'>Eliminar Playlist</h2>
                        <p className='text-white mb-6'>¿Estás seguro de que deseas eliminar la playlist "{newPlaylistName}"?</p>
                        <div className='flex justify-end gap-2'>
                            <button
                                onClick={() => setIsConfirmingDelete(false)}
                                className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleConfirmDelete}
                                className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal para mostrar las canciones */}
            {isModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-[#222] p-6 rounded-lg w-full md:w-3/4 lg:w-2/3'>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className='text-white text-2xl font-semibold'>{newPlaylistName}</h2>
                            <i className="fa-solid fa-xmark text-white cursor-pointer" onClick={closeModal}></i>
                        </div>
                        <div className="flex justify-between text-white mb-4">
                            <span className="text-[16px]">{songs.length} canciones</span>
                            <span className="text-[16px]">Duración total: 15:05</span>
                        </div>
                        <div className='overflow-x-auto'>
                            <table className='w-full min-h-[250px] text-[rgba(255,255,255,0.88)]'>
                                <thead className='border-b-2 border-[rgba(255,255,255,0.52)]'>
                                    <tr className='grid_table mb-2'>
                                        <th className='text-center'>#</th>
                                        <th className='text-start'>Título</th>
                                        <th className='text-start'>Artista</th>
                                        <th className='text-center'>Duración</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {songs.map((song, index) => (
                                        <tr key={song.id} className='grid_table py-3 hover:bg-[#444]'>
                                            <td className='text-center'>{index + 1}</td>
                                            <td className='text-start'>{song.title}</td>
                                            <td className='text-start'>{song.artist}</td>
                                            <td className='text-center'>{song.duration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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
};

export default Playlist;
