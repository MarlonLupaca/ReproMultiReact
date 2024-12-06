import React, { useRef } from "react";
import Cabecera from "../Components/Cabecera";
import Caja_Recientes from "../Components/Caja_Recientes";
import Tabla from "../Components/Tabla";
import ContenedorMusica from "../Components/ContenedorMusica";
import MusicPlayer from "../Components/MusicPlayer";
import Navegador from "../Components/Navegador";
import AgregarCancion from "../Components/AgregarCancion";

const Musica = () => {
    const playerRef = useRef();

    const handlePlay = (name, url) => {
        playerRef.current.playSong(name, url);
    };

    return (
        <>
            <Cabecera />
            <main className="rounded-lg flex flex-col gap-2 md:h-[580px] md:overflow-y-auto md:bg-[#212121] md:ml-[210px] py-3">
                <Caja_Recientes cancion="cancion2" />
                <AgregarCancion/>
                <span className="px-10 font-[500] text-[18px]">Todas las canciones</span>
                <Tabla onPlay={handlePlay} />
            </main>
            <ContenedorMusica />
            <MusicPlayer ref={playerRef} />
            <Navegador />
        </>
    );
};

export default Musica;
