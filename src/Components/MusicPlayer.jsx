import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";

const MusicPlayer = forwardRef((props, ref) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");
    const [durationTime, setDurationTime] = useState("0:00");
    const [volume, setVolume] = useState(1); 
    const audioRef = useRef(null);
    const [nombre, setnombre] = useState("Sin Cancion")
    const [url, seturl] = useState("Sin Cancion")

    const reproducir = async (nombre, url) => {
        await setnombre(nombre);
        await seturl(url)
        await togglePlayPause();
    };

    useImperativeHandle(ref, () => ({
        reproducir,
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
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;

        const formatTime = (time) => {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60).toString().padStart(2, "0");
            return `${minutes}:${seconds}`;
        };

        setCurrentTime(formatTime(currentTime));
        setDurationTime(formatTime(duration));
        setProgress((currentTime / duration) * 100);
    };

    const handleSeek = (e) => {
        const newTime = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
        setProgress(e.target.value);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value / 100;
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    return (
        <div className=" grid_cancion fixed bottom-0 bg-black p-4 rounded-lg shadow-lg w-full">
            <div className="flex items-center">
                <div className="w-[50px] h-[50px] rounded-full mr-4 flex justify-center items-center"> 
                    <img src="Logo_pri.svg" alt="logo_default" />
                </div>
                <div>
                    <p className="text-white font-semibold">{nombre}</p>
                </div>
            </div>
            <div className="w-[600px] flex flex-col justify-center items-center ">
                <div className="flex-1 flex justify-center items-center gap-4 mx-6 w-full mb-1 ">
                    <button className="text-gray-400 hover:text-white">
                        <i className="fas fa-step-backward"></i> 
                    </button>
                    <button
                        onClick={togglePlayPause}
                        className="flex justify-center items-center bg-white text-black rounded-full h-[30px] w-[30px] hover:bg-gray-300"
                    >
                        <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
                    </button>
                    <button className="text-gray-400 hover:text-white">
                        <i className="fas fa-step-forward"></i>
                    </button>
                </div>

                <div className="flex items-center gap-2 w-full">
                    <span className="text-white text-xs">{currentTime}</span>
                    <input
                        type="range"
                        value={progress}
                        onChange={handleSeek}
                        className="w-full h-1 bg-gray-500 rounded"
                    />
                    <span className="text-white text-xs">{durationTime}</span>
                </div>
            </div>

            <div className="flex items-center gap-4 justify-self-end">
                <i className="fa-solid fa-volume-high text-white"></i>
                <input
                    type="range"
                    value={volume * 100}
                    onChange={handleVolumeChange}
                    className="w-[80px] h-1 bg-gray-500 rounded"
                />
                <button className="text-gray-400 hover:text-white">
                    <i className="fas fa-expand"></i>
                </button>
            </div>

            <audio
                ref={audioRef}
                src={url}
                onTimeUpdate={handleProgress}
                onLoadedMetadata={handleProgress}
            ></audio>
        </div>
    );
});

export default MusicPlayer;
