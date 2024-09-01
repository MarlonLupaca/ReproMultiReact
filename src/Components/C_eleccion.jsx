import React from 'react'

const C_eleccion = () => {
    return (
        <div className=' p-4 px-[60px] flex flex-col gap-3'>
            <label htmlFor="">Nombre</label>
            <input type="text" className='p-2 px-3 w-full rounded-[4px] bg-[#121212] border-[2px] border-[#ff4081]'/>
            <label htmlFor="">Playlist</label>
            <input type="text" className='p-2 px-3 w-full rounded-[4px] bg-[#121212] border-[2px] border-[#ff4081]'/>
            
            
        </div>
    )
}

export default C_eleccion
