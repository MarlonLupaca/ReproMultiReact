import React from 'react'
import "../Css/Customs.css"
import { Link } from 'react-router-dom'

const Navegador = () => {
    return (
        <div className="border-green-700 fixed items-center bottom-0 w-full h-[60px] fondo_gradiente md:bg-[#212121] md:w-[200px] md:top-[60px] md:h-[580px] md:rounded-tr-lg md:rounded-br-lg md:pl-6 md:py-6">
            <nav className="h-full pt-1">
                <ul className="flex justify-evenly h-full items-center md:flex-col md:items-start md:justify-normal md:gap-6">
                    <Link to="/Home" className="w-20">
                        <li className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
                            <i className="fa-solid fa-house text-[22px] md:text-[25px]"></i>
                            <span className="text-[11px] md:text-[16px]">Inicio</span>
                        </li>
                    </Link>
                    <Link to="/Video" className="w-20">
                        <li className="flex flex-col  gap-1 items-center md:flex-row md:items-center md:gap-3">
                            <i className="fa-solid fa-video text-[22px] md:text-[25px]"></i>
                            <span className="text-[11px] md:text-[16px]">Video</span>
                        </li>
                    </Link>
                    <Link to="/Musica" className="w-20">
                        <li className="flex flex-col  gap-1 md:gap-3 items-center md:flex-row md:items-center">
                            <i className="fa-solid fa-music text-[22px] md:text-[25px]"></i>
                            <span className="text-[11px] md:text-[16px]">Musica</span>
                        </li>
                    </Link>
                    <Link to="/Descarga" className="w-20">
                        <li className="flex flex-col  gap-1 md:gap-3 items-center md:flex-row md:items-center">
                            <i className="fa-solid fa-download text-[22px] md:text-[25px]"></i>
                            <span className="text-[11px] md:text-[16px]">Descargar</span>
                        </li>
                    </Link>
                    <Link to="/Admin" className="w-20">
                        <li className="flex flex-col  gap-1 md:gap-3 items-center md:flex-row md:items-center">
                            <i className="fa-solid fa-user-tie text-[22px] md:text-[25px]"></i>
                            <span className="text-[11px] md:text-[16px]">Admin</span>
                        </li>
                    </Link>
                </ul>
            </nav>
            </div>
    )
}

export default Navegador
