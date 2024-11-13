import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import '../Css/MusicPlayer.css'; // Importamos el archivo css de rotacion del logo

const MusicPlayerVideo = ({ currentTrack, setCurrentTrack, playlist }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5); // Es el Volumen por defecto a 0.5
    const [currentTime, setCurrentTime] = useState('0:00');
    const [durationTime, setDurationTime] = useState('0:00');
    const playerRef = useRef(null);

    useEffect(() => {
        if (currentTrack) {
            setIsPlaying(true); // Empieza a reproducir cuando la canción cambia
        } else {
            setIsPlaying(false); // Pausa si no hay canción
        }
    }, [currentTrack]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const playNext = () => {
        const currentIndex = playlist.findIndex(track => track.url === currentTrack.url);
        const nextTrack = playlist[(currentIndex + 1) % playlist.length];
        setCurrentTrack(nextTrack);
        setIsPlaying(true);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value / 100;
        setVolume(newVolume);
    };

    const handleProgress = () => {
        const current = playerRef.current.getCurrentTime();
        const duration = playerRef.current.getDuration();

        const formatTime = (time) => {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60).toString().padStart(2, '0');
            return `${minutes}:${seconds}`;
        };

        setCurrentTime(formatTime(current));
        setDurationTime(formatTime(duration));
    };

    const handleSeek = (e) => {
        const newTime = (e.target.value / 100) * playerRef.current.getDuration();
        playerRef.current.seekTo(newTime);
    };

    const handleSeekMouseDown = () => {
        setIsPlaying(false);  // Pausar mientras se mueve el control
    };

    const handleSeekMouseUp = () => {
        setIsPlaying(true);  // Reanudar después de mover el control
    };

    return (
        <div className="grid_cancion bg-black p-4 rounded-lg shadow-lg w-full">
            <div className="flex items-center">
                {/* Aplicar clase 'logo' cuando la canción esté en reproducción */}
                <div className={`w-[50px] h-[50px] rounded-full mr-4 flex justify-center items-center ${isPlaying ? 'logo' : ''}`}>
                    <img src="Logo_pri.svg" alt="logo_default" />
                </div>
                <div>
                    <p className="text-white font-semibold">{currentTrack ? currentTrack.titulo : 'Sin Canción'}</p>
                </div>
            </div>

            <div className="w-[600px] flex flex-col justify-center items-center">
                <div className="flex-1 flex justify-center items-center gap-4 mx-6 w-full mb-1">
                    <button className="text-gray-400 hover:text-white">
                        <i className="fas fa-step-backward"></i>
                    </button>
                    <button
                        onClick={togglePlayPause}
                        className="flex justify-center items-center bg-white text-black rounded-full h-[30px] w-[30px] hover:bg-gray-300"
                    >
                        <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                    </button>
                    <button onClick={playNext} className="text-gray-400 hover:text-white">
                        <i className="fas fa-step-forward"></i>
                    </button>
                </div>

                <div className="flex items-center gap-2 w-full">
                    <span className="text-white text-xs">{currentTime}</span>
                    <input
                        type="range"
                        value={(playerRef.current ? (playerRef.current.getCurrentTime() / playerRef.current.getDuration()) * 100 : 0)}
                        onChange={handleSeek}
                        onMouseDown={handleSeekMouseDown}  // Pausar al hacer click
                        onMouseUp={handleSeekMouseUp}      // Reanudar después de soltar
                        className="w-full h-1 bg-gray-500 rounded"
                    />
                    <span className="text-white text-xs">{durationTime}</span>
                </div>
            </div>

            <div className="flex items-center gap-4 justify-self-end">
                <i className="fa-solid fa-volume-high text-white"></i>
                <input
                    type="range"
                    value={volume * 100}  // Convertimos de 0-1 a 0-100
                    onChange={handleVolumeChange}
                    className="w-[80px] h-1 bg-gray-500 rounded"
                />
                <button className="text-gray-400 hover:text-white">
                    <i className="fas fa-expand"></i>
                </button>
            </div>

            <ReactPlayer
                ref={playerRef}
                url={currentTrack ? currentTrack.url : ''}
                playing={isPlaying}
                volume={volume}
                controls={false}
                width="0"
                height="0"
                onProgress={handleProgress}
                onDuration={handleProgress}
            />
        </div>
    );
};

export default MusicPlayerVideo;