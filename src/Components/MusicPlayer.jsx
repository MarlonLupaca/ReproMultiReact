import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaStepForward, FaStepBackward } from "react-icons/fa";

const MusicPlayer = forwardRef((props, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");
    const [durationTime, setDurationTime] = useState("0:00");
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);
    const [songDetails, setSongDetails] = useState({ name: "Sin Canción", url: "" });

    useImperativeHandle(ref, () => ({
        playSong: (name, url) => {
            if (!name || !url) {
                // Si no se pasa una canción, pausa la reproducción
                audioRef.current.pause();
                setIsPlaying(false);
                return;
            }
            setSongDetails({ name, url });
            setIsPlaying(true);
        },
    }));
    

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgress = () => {
        const { currentTime, duration } = audioRef.current;
        setProgress((currentTime / duration) * 100);

        const formatTime = (time) => {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60).toString().padStart(2, "0");
            return `${minutes}:${seconds}`;
        };

        setCurrentTime(formatTime(currentTime));
        setDurationTime(formatTime(duration || 0));
    };

    const handleSeek = (e) => {
        const newTime = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value / 100;
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    return (
        <div className="fixed bottom-0 bg-black p-4 w-full grid grid-cols-3 items-center gap-4">
            {/* Sección de información de la canción */}
            <div className="flex items-center">
                <img src="Logo_pri.svg" alt="Album Cover" className="h-12 w-12 mr-4" />
                <div className="overflow-hidden">
                    <p className="text-white font-semibold truncate w-40 sm:w-64">{songDetails.name}</p>
                    <p className="text-sm text-gray-400">Artista Desconocido</p>
                </div>
            </div>

            {/* Sección de controles de reproducción */}
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-4">
                    <FaStepBackward className="text-white cursor-pointer" />
                    <button onClick={togglePlayPause}>
                        {isPlaying ? <FaPause className="text-white text-2xl" /> : <FaPlay className="text-white text-2xl" />}
                    </button>
                    <FaStepForward className="text-white cursor-pointer" />
                </div>
                <div className="flex items-center w-full gap-2 mt-2">
                    <span className="text-white text-xs">{currentTime}</span>
                    <input
                        type="range"
                        value={progress}
                        onChange={handleSeek}
                        className="w-full h-1 bg-gray-700 rounded-lg"
                    />
                    <span className="text-white text-xs">{durationTime}</span>
                </div>
            </div>

            {/* Sección de controles de volumen */}
            <div className="flex items-center justify-end gap-4">
                {volume > 0 ? (
                    <FaVolumeUp className="text-white cursor-pointer" />
                ) : (
                    <FaVolumeMute className="text-white cursor-pointer" />
                )}
                <input
                    type="range"
                    value={volume * 100}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-gray-700 rounded-lg"
                />
            </div>

            <audio
                ref={audioRef}
                src={songDetails.url}
                onTimeUpdate={handleProgress}
                onLoadedMetadata={handleProgress}
                autoPlay
            />
        </div>
    );
});

export default MusicPlayer;
