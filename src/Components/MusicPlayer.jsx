import React, { useState } from 'react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(60); 

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex items-center bg-black p-4 rounded-lg justify-between fixed z-50 bottom-0 w-full text-white">
            {/* Información de la pista */}
            <div className="flex items-center space-x-4">
                <img 
                src="https://via.placeholder.com/50" 
                alt="Track Cover" 
                className="w-12 h-12 rounded-full object-cover" 
                />
                <div>
                <div className="font-semibold">New Woman (feat. ROSALÍA)</div>
                <div className="text-sm text-gray-400">LISA, ROSALÍA</div>
                </div>
            </div>
            <div className="flex flex-col items-center bg-black text-[12px] text-white rounded-lg w-full max-w-xl mx-auto">
                {/* Controles */}
                <div className="flex items-center space-x-6 mb-1">
                    <i className="fa-solid fa-random text-lg cursor-pointer"></i>
                    <i className="fa-solid fa-backward text-lg cursor-pointer"></i>
                    <i 
                    className={`fa-lg cursor-pointer p-4 bg-white text-black rounded-full ${isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play'}`}
                    onClick={togglePlayPause}
                    ></i>
                    <i className="fa-solid fa-forward text-lg cursor-pointer"></i>
                    <i className="fa-regular fa-message text-lg cursor-pointer"></i>
                </div>

                {/* Barra de progreso */}
                <div className="flex items-center w-full space-x-2">
                    <span className="text-sm">1:49</span>
                    <div className="relative w-full h-1 bg-gray-700 rounded">
                    <div className="absolute top-0 h-full bg-white rounded" style={{ width: `${progress}%` }}></div>
                    </div>
                    <span className="text-sm">2:59</span>
                </div>
            </div>
            

            {/* Iconos adicionales */}
            <div className="flex items-center space-x-4">
                <i className="fa-solid fa-volume-up fa-lg cursor-pointer"></i>
                <i className="fa-solid fa-expand fa-lg cursor-pointer"></i>
            </div>
        </div>
    );
};

export default MusicPlayer;
