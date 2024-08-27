import React from 'react'
import "../Css/Customs.css"


const Card = ( {tamaño_texto}) => {
    
    return (
        <div className='aspecto  h-full flex flex-col gap-[6px]'>
            <img src="assets/cancion1.jpg" alt="" className='w-full'/>
            <span className='text-balance font-[400]' style={{ fontSize: tamaño_texto }}>Nombre de la cancion en este caso sera largo</span>
        </div>
    )
}

export default Card
