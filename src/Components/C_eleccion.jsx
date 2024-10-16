import React from 'react'

const C_eleccion = () => {
    return (
        <div className=' p-4 flex flex-col gap-3 items-center'>
            <div className='w-[400px] flex flex-col gap-2'>
                <label htmlFor="">Nombre</label>
                <input type="text" className='p-2 px-3 rounded-[4px] bg-[#121212] border-[2px] border-[#ff4081]'/>
            </div>
            <div className='w-[400px] flex flex-col gap-2'>
                <label htmlFor="">Playlist</label>
                <input type="text" className='p-2 px-3 rounded-[4px] bg-[#121212] border-[2px] border-[#ff4081]'/>
            </div>
            
            
            
        </div>
    )
}

export default C_eleccion
