import React, { useState } from 'react';
import Playlist from './Playlist';

const Caja_Archivos = () => {
    // Estado para manejar las playlists
    const [playlists, setPlaylists] = useState([
        { name: "Mi Playlist 1", songCount: 10, bg_color: "#FF6347" },
        { name: "Mi Playlist 2", songCount: 15, bg_color: "#4682B4" },
        { name: "Mi Playlist 3", songCount: 20, bg_color: "#8B0000" },
        { name: "Mi Playlist 4", songCount: 8, bg_color: "#2E8B57" },
        { name: "Mi Playlist 5", songCount: 25, bg_color: "#8B4513" },
        { name: "Mi Playlist 6", songCount: 12, bg_color: "#6A5ACD" },
        { name: "Mi Playlist 7", songCount: 18, bg_color: "#708090" },
        { name: "Mi Playlist 8", songCount: 30, bg_color: "#B22222" },
        { name: "Mi Playlist 9", songCount: 5, bg_color: "#FF8C00" },
        { name: "Mi Playlist 10", songCount: 7, bg_color: "#9932CC" },
    ]);

    // Función para eliminar una playlist
    const handleDelete = (playlistName) => {
        const updatedPlaylists = playlists.filter(playlist => playlist.name !== playlistName);
        setPlaylists(updatedPlaylists);
    };

    // Función para editar el nombre de una playlist
    const handleEdit = (oldName, newName) => {
        const updatedPlaylists = playlists.map(playlist =>
            playlist.name === oldName ? { ...playlist, name: newName } : playlist
        );
        setPlaylists(updatedPlaylists);
    };

    return (
        <div className='px-4 flex flex-col gap-2'>
            <span className='font-[700] text-[18px] text-white'>Tus playlists</span>
            {playlists.map((playlist, index) => (
                <Playlist
                    key={index}
                    bg_color={playlist.bg_color}
                    playlistName={playlist.name}
                    songCount={playlist.songCount}
                    onDelete={handleDelete} // Pasar la función onDelete
                    onEdit={handleEdit}    // Pasar la función onEdit
                />
            ))}
        </div>
    );
};

export default Caja_Archivos;
