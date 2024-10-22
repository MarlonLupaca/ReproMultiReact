import React from 'react'
import "../Css/Customs.css"

const Carpeta = ({bg_color}) => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <div className='h-9 w-9 flex rounded-full justify-center items-center filtro_gris_2' style={{background: bg_color}}>
                    <i className="fa-regular fa-folder"></i>
                </div>
                <span className='text-[16px] font-[400]'>Nombre de la Carpeta</span>
            
            </div>
            <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
    )
}

export default Carpeta
