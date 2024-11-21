import React from 'react';
import Playlist from './Playlist';

const Caja_Archivos = () => {
    // Lista de playlists con nombre y número de canciones
    const playlists = [
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
        { name: "Mi Playlist 11", songCount: 22, bg_color: "#556B2F" },
        { name: "Mi Playlist 12", songCount: 13, bg_color: "#483D8B" },
        { name: "Mi Playlist 13", songCount: 10, bg_color: "#C71585" },
        { name: "Mi Playlist 14", songCount: 17, bg_color: "#8B008B" },
        { name: "Mi Playlist 15", songCount: 19, bg_color: "#FF4500" },
        { name: "Mi Playlist 16", songCount: 11, bg_color: "#2F4F4F" },
        { name: "Mi Playlist 17", songCount: 14, bg_color: "#FF1493" },
        { name: "Mi Playlist 18", songCount: 16, bg_color: "#00CED1" },
        { name: "Mi Playlist 19", songCount: 9, bg_color: "#DAA520" },
        { name: "Mi Playlist 20", songCount: 3, bg_color: "#D2691E" }
    ];

    return (
        <div className='px-4 flex flex-col gap-2'>
            <span className='font-[700] text-[18px] text-white'>Tus playlists</span>
            {playlists.map((playlist, index) => (
                <Playlist 
                    key={index}
                    bg_color={playlist.bg_color}
                    playlistName={playlist.name}
                    songCount={playlist.songCount}
                />
            ))}
        </div>
    );
}

export default Caja_Archivos;
