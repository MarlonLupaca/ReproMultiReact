import React, { useState } from 'react';
import Cabecera from '../Components/Cabecera';
import ContenedorMusica from "../Components/ContenedorMusica";
import Navegador from "../Components/Navegador";
import Caja_Recientes from '../Components/Caja_Recientes';
import MusicPlayer from '../Components/MusicPlayer';

const Descarga = () => {
    // Estado para los inputs
    const [link, setLink] = useState('');
    const [nombre, setNombre] = useState('');
    const [playlist, setPlaylist] = useState('');
    const [loading, setLoading] = useState(false); // Para mostrar el estado de carga
    const [message, setMessage] = useState(''); // Para mostrar mensajes de éxito o error

    // Función para manejar la descarga
    const handleDescarga = async () => {
        setLoading(true); // Inicia la carga
        try {
            // Realiza la solicitud POST al endpoint del backend usando fetch
            const response = await fetch('http://localhost:8080/descargar-youtube?link=' + encodeURIComponent(link), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Verifica si la respuesta fue exitosa
            if (response.ok) {
                const data = await response.text();
                setMessage(data); // Mostrar el mensaje de éxito
            } else {
                setMessage('Error al descargar la canción'); // En caso de error
            }
        } catch (error) {
            setMessage('Error al conectarse con el servidor'); // Error de conexión
        }
        setLoading(false); // Finaliza el estado de carga
    };

    return (
        <>
            <Cabecera />
            <main className='flex flex-col gap-5 rounded-lg md:h-[580px] md:overflow-y-auto md:bg-[#212121] md:ml-[210px]'>
                <span className='px-4 font-[500] text-[18px] mt-2'>Descargar contenido</span>
                <div className='flex justify-center'>
                    <input
                        type="text"
                        placeholder='Ingresa link'
                        value={link}
                        onChange={(e) => setLink(e.target.value)} // Actualiza el link
                        className='p-4 px-4 border-4 border-[#ff4081] rounded-l-[8px] h-[25px] text-white w-[330px] text-[14px] bg-[#121212]'
                    />
                    <button
                        onClick={handleDescarga} // Llama a la función para manejar la descarga
                        className='bg-[#ff4081] px-3 font-[700] rounded-r-[8px]'
                    >
                        {loading ? 'Cargando...' : 'Buscar'}
                    </button>
                </div>
                {message && (
                    <div className="text-center text-white mt-3">
                        <p>{message}</p>
                    </div>
                )}
                <div className='p-4 flex flex-col gap-3 items-center'>
                    <div className='w-[400px] flex flex-col gap-2'>
                        <label htmlFor="">Nombre</label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)} // Actualiza el nombre
                            className='p-2 px-3 rounded-[4px] bg-[#121212] border-[2px] border-[#ff4081]'
                        />
                    </div>
                    <div className='w-[400px] flex flex-col gap-2'>
                        <label htmlFor="">Playlist</label>
                        <input
                            type="text"
                            value={playlist}
                            onChange={(e) => setPlaylist(e.target.value)} // Actualiza la playlist
                            className='p-2 px-3 rounded-[4px] bg-[#121212] border-[2px] border-[#ff4081]'
                        />
                    </div>
                </div>
                <Caja_Recientes cancion="cancion2"/>
            </main>
            <ContenedorMusica/>
            <MusicPlayer/>
            <Navegador/>
        </>
    );
};

export default Descarga;
