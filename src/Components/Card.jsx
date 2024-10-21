import React from 'react'
import "../Css/Customs.css"


const Card = ( {tamaño_texto, name}) => {
    
    const imageURL = `assets/${name}.jpg`;

    return (
        <div className='aspecto  w-[200px] h-fit flex flex-col gap-[6px]'>
            <img src={imageURL} alt="" className='w-full'/>
            <span className='text-balance font-[400]' style={{ fontSize: tamaño_texto }}>Nombre de la cancion en este caso sera largo</span>
        </div>
    )
}

export default Card
