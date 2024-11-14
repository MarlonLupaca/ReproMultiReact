import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import '../Css/MusicPlayer.css';

const MusicPlayerVideo = ({ currentTrack, setCurrentTrack, playlist }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [currentTime, setCurrentTime] = useState(0);
    const [durationTime, setDurationTime] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const playerRef = useRef(null);

    useEffect(() => {
        if (currentTrack) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    }, [currentTrack]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const playPrevious = () => {
        const currentIndex = playlist.findIndex(track => track.url === currentTrack.url);
        const previousTrack = playlist[(currentIndex - 1 + playlist.length) % playlist.length];
        setCurrentTrack(previousTrack);
        setIsPlaying(true);
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

    const handleProgress = (state) => {
        setCurrentTime(state.playedSeconds);
    };

    const handleDuration = (duration) => {
        setDurationTime(duration);
    };

    const handleSeek = (e) => {
        const newTime = (e.target.value / 100) * durationTime;
        playerRef.current.seekTo(newTime);
    };

    const handleSeekClick = (e) => {
        const clickPosition = e.nativeEvent.offsetX;
        const totalWidth = e.currentTarget.offsetWidth;
        const clickRatio = clickPosition / totalWidth;
        const newTime = clickRatio * durationTime;
        playerRef.current.seekTo(newTime);
        setCurrentTime(newTime);
    };

    const handleSeekMouseDown = () => {
        setIsPlaying(false);
    };

    const handleSeekMouseUp = () => {
        setIsPlaying(true);
    };

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    const handleVideoClick = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={`grid_cancion bg-black p-4 rounded-lg shadow-lg w-full ${isFullScreen ? 'fixed inset-0 z-50' : ''}`}>
            {!isFullScreen && (
                <div className="flex items-center">
                    <div className={`w-[60px] h-[60px] rounded-full mr-4 flex justify-center items-center ${isPlaying ? 'logo' : ''}`}>
                        <img src="Logo_pri.svg" alt="logo_default" />
                    </div>
                    <div>
                        <p className="text-white font-semibold">{currentTrack ? currentTrack.titulo : 'Sin Canción'}</p>
                    </div>
                </div>
            )}

            {!isFullScreen && (
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex-1 flex justify-center items-center gap-6 mx-6 w-full mb-1">
                        <button onClick={playPrevious} className="text-gray-400 hover:text-white text-xl">
                            <i className="fas fa-step-backward"></i>
                        </button>
                        <button
                            onClick={togglePlayPause}
                            className="flex justify-center items-center bg-white text-black rounded-full h-[35px] w-[35px] hover:bg-gray-300"
                        >
                            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                        </button>
                        <button onClick={playNext} className="text-gray-400 hover:text-white text-xl">
                            <i className="fas fa-step-forward"></i>
                        </button>
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <span className="text-white text-sm">{`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60).toString().padStart(2, '0')}`}</span>
                        <input
                            type="range"
                            value={(currentTime / durationTime) * 100 || 0}
                            onChange={handleSeek}
                            onMouseDown={handleSeekMouseDown}
                            onMouseUp={handleSeekMouseUp}
                            className="w-full h-1 bg-gray-500 rounded-lg"
                        />
                        <span className="text-white text-sm">{`${Math.floor(durationTime / 60)}:${Math.floor(durationTime % 60).toString().padStart(2, '0')}`}</span>
                    </div>
                </div>
            )}

            {!isFullScreen && (
                <div className="flex items-center gap-6 justify-self-end mt-2">
                    <i className="fa-solid fa-volume-high text-white text-lg"></i>
                    <input
                        type="range"
                        value={volume * 100}
                        onChange={handleVolumeChange}
                        className="w-[100px] h-1.5 bg-gray-500 rounded-lg"
                    />
                    <button onClick={toggleFullScreen} className="text-gray-400 hover:text-white text-lg">
                        <i className={`fas ${isFullScreen ? 'fa-compress' : 'fa-expand'}`}></i>
                    </button>
                </div>
            )}

            {!isFullScreen && (
                <ReactPlayer
                    ref={playerRef}
                    url={currentTrack ? currentTrack.url : ''}
                    playing={isPlaying}
                    volume={volume}
                    controls={false}
                    width="0"
                    height="0"
                    onProgress={handleProgress}
                    onDuration={handleDuration}
                    onClick={handleVideoClick}
                />
            )}

            {isFullScreen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
                    <div className="relative w-full h-full bg-black p-4">
                        <button onClick={toggleFullScreen} className="absolute top-2 right-2 text-white text-3xl">
                            <i className="fas fa-times"></i>
                        </button>

                        <ReactPlayer
                            url={currentTrack ? currentTrack.url : ''}
                            playing={isPlaying}
                            volume={volume}
                            controls={false}
                            width="100%"
                            height="100%"
                            onProgress={handleProgress}
                            onDuration={handleDuration}
                            onClick={handleVideoClick}
                        />

                        <div className="absolute bottom-0 w-full p-6 bg-black bg-opacity-75">
                            <div className="flex items-center justify-center gap-10">
                                <button onClick={playPrevious} className="text-gray-400 hover:text-white text-2xl">
                                    <i className="fas fa-step-backward"></i>
                                </button>
                                <button
                                    onClick={togglePlayPause}
                                    className="flex justify-center items-center bg-white text-black rounded-full h-[40px] w-[40px] hover:bg-gray-300"
                                >
                                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                                </button>
                                <button onClick={playNext} className="text-gray-400 hover:text-white text-2xl">
                                    <i className="fas fa-step-forward"></i>
                                </button>
                            </div>

                            <div className="flex items-center gap-4 justify-center w-full mt-4" onClick={handleSeekClick}>
                                <span className="text-white text-sm">{`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60).toString().padStart(2, '0')}`}</span>
                                <input
                                    type="range"
                                    value={(currentTime / durationTime) * 100 || 0}
                                    onChange={handleSeek}
                                    onMouseDown={handleSeekMouseDown}
                                    onMouseUp={handleSeekMouseUp}
                                    className="w-full h-1 bg-gray-500 rounded-lg"
                                />
                                <span className="text-white text-sm">{`${Math.floor(durationTime / 60)}:${Math.floor(durationTime % 60).toString().padStart(2, '0')}`}</span>
                            </div>

                            <div className="flex items-center gap-6 justify-center mt-4">
                                <i className="fa-solid fa-volume-high text-white text-lg"></i>
                                <input
                                    type="range"
                                    value={volume * 100}
                                    onChange={handleVolumeChange}
                                    className="w-[150px] h-1.5 bg-gray-500 rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MusicPlayerVideo;