import React from 'react'

const C_Video = () => {
    return (
        <div className='h-[100px] px-4 flex items-center justify-between'>
            <div className='h-[90px] flex  items-center gap-3'>
                <img src="assets/Video.jpg" alt="Video" className='aspecto_video 
                h-full rounded-[5px]' />
                <div className='grid grid-cols-2 grid-rows-2'>
                    <span className=' col-span-2 text-[16px]'>Nombre del video</span>
                    <span className='text-[13px] text-[#b8b8b8]'>Tamaño</span>
                    <span className='text-[13px] text-[#b8b8b8]'>Fecha</span>
                </div>
                
            </div>
            <i class="fa-solid fa-ellipsis-vertical text-[25px] text-[#ededed]"></i>
        </div>
    )
}

export default C_Video
