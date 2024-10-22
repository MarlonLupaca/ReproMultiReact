import React from 'react'

const C_Musica = ({ name }) => {
    const imageUrl = `assets/${name}.jpg`;

    return (
        <div className='px-4 flex items-center justify-between'>
            <div className='h-[75px] flex  items-center gap-3'> 
                <img src={imageUrl} alt="" className='h-[60px] rounded-full'/>
                <div className='grid grid-cols-2 grid-rows-2'>
                    <span className=' col-span-2 text-[16px]'>Nombre de la musica</span>
                    <span className='text-[13px] text-[#b8b8b8]'>Tamaño</span>
                    <span className='text-[13px] text-[#b8b8b8]'>Fecha</span>
                </div>
            </div>
            <i className="fa-solid fa-ellipsis-vertical text-[20px] text-[#ededed]"></i>
        </div>
    )
}

export default C_Musica
