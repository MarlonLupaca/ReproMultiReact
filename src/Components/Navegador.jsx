import React from 'react'
import "../Css/Customs.css"
import { Link } from 'react-router-dom'

const Navegador = () => {
    return (
        <div class="fixed items-center bottom-0 w-full h-[60px] fondo_gradiente">
            <nav class="h-full pt-1">
                <ul class="flex justify-evenly h-full items-center">
                <Link to="/Home" class="w-20">
                    <li class="flex flex-col gap-1 items-center">
                    <i class="fa-solid fa-house text-[22px]"></i>
                    <span class="text-[11px]">Inicio</span>
                    </li>
                </Link>
                <Link to="/Video" class="w-20">
                    <li class="flex flex-col  gap-1 items-center">
                    <i class="fa-solid fa-video text-[22px]"></i>
                    <span class="text-[11px]">Video</span>
                    </li>
                </Link>
                <Link to="/Musica" class="w-20">
                    <li class="flex flex-col  gap-1 items-center">
                    <i class="fa-solid fa-music text-[22px]"></i>
                    <span class="text-[11px]">Musica</span>
                    </li>
                </Link>
                <Link to="/Descarga" class="w-20">
                    <li class="flex flex-col  gap-1 items-center">
                    <i class="fa-solid fa-download text-[22px]"></i>
                    <span class="text-[11px]">Descargar</span>
                    </li>
                </Link>
                </ul>
            </nav>
            </div>
    )
}

export default Navegador
