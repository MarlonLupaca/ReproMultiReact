import React, { useState, useEffect } from "react";
import { FaBars, FaEllipsisH } from "react-icons/fa";

const Tabla = ({ onPlay }) => {
    const [songs, setSongs] = useState([]);
    const [activeSongId, setActiveSongId] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/canciones")
            .then((response) => response.json())
            .then((data) => setSongs(data))
            .catch((error) => console.error("Error fetching songs:", error));
    }, []);

    const handleSongClick = (songId, title, nombre) => {
        if (activeSongId === songId) {
            return;
        }

        setActiveSongId(songId);
        
        // Crear la URL del streaming basada en el nombre de la canción
        const streamUrl = `http://localhost:8080/api/stream/${nombre}`;
        onPlay(title, streamUrl);  // Llamar a la función onPlay con la URL del stream
    };

    return (
        <div className="py-5 px-10">
            <table className="w-full text-white border-collapse">
                <thead className="bg-gradient-to-r from-purple-600 to-indigo-800 text-left">
                    <tr>
                        <th className="p-4">#</th>
                        <th className="p-4">Title</th>
                        <th className="p-4">Duration</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => (
                        <tr
                            key={index} // Use index as key, since there's no song.id_multimedia
                            className="cursor-pointer hover:bg-gray-800"
                        >
                            <td className="p-4 text-gray-400">{index + 1}</td>
                            <td
                                className="p-4 flex items-center"
                                onClick={() => handleSongClick(index, song.nombre, song.nombre)}
                            >
                                {/* Cambiar el icono de las barras y aplicar animación */}
                                <FaBars
                                    className={`mr-4 ${activeSongId === index ? 'text-white animate-bounce' : 'text-gray-500 hover:text-white'}`}
                                    style={{
                                        animationDuration: "1s",
                                    }}
                                />
                                {song.nombre}
                            </td>
                            <td className="p-4">{song.duracion}</td>
                            <td className="p-4 text-right">
                                <FaEllipsisH className="text-gray-500 hover:text-white" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tabla;
