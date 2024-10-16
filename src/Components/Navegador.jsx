import React from 'react'
import "../Css/Customs.css"
import { Link } from 'react-router-dom'

const Navegador = () => {
    return (
        <div class="fixed items-center bottom-0 w-full h-[60px] fondo_gradiente md:bg-[#212121] md:w-[200px] md:top-[60px] md:h-[550px] md:rounded-tr-lg md:rounded-br-lg md:pl-6 md:py-6">
            <nav class="h-full pt-1">
                <ul class="flex justify-evenly h-full items-center md:flex-col md:items-start md:justify-normal md:gap-6">
                    <Link to="/Home" class="w-20">
                        <li class="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
                            <i class="fa-solid fa-house text-[22px] md:text-[25px]"></i>
                            <span class="text-[11px] md:text-[16px]">Inicio</span>
                        </li>
                    </Link>
                    <Link to="/Video" class="w-20">
                        <li class="flex flex-col  gap-1 items-center md:flex-row md:items-center md:gap-3">
                            <i class="fa-solid fa-video text-[22px] md:text-[25px]"></i>
                            <span class="text-[11px] md:text-[16px]">Video</span>
                        </li>
                    </Link>
                    <Link to="/Musica" class="w-20">
                        <li class="flex flex-col  gap-1 md:gap-3 items-center md:flex-row md:items-center">
                            <i class="fa-solid fa-music text-[22px] md:text-[25px]"></i>
                            <span class="text-[11px] md:text-[16px]">Musica</span>
                        </li>
                    </Link>
                    <Link to="/Descarga" class="w-20">
                        <li class="flex flex-col  gap-1 md:gap-3 items-center md:flex-row md:items-center">
                            <i class="fa-solid fa-download text-[22px] md:text-[25px]"></i>
                            <span class="text-[11px] md:text-[16px]">Descargar</span>
                        </li>
                    </Link>
                    <Link to="/Admin" class="w-20">
                        <li class="flex flex-col  gap-1 md:gap-3 items-center md:flex-row md:items-center">
                            <i class="fa-solid fa-user-tie text-[22px] md:text-[25px]"></i>
                            <span class="text-[11px] md:text-[16px]">Admin</span>
                        </li>
                    </Link>
                </ul>
            </nav>
            </div>
    )
}

export default Navegador
