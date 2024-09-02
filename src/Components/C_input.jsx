import React from 'react'

const C_input = () => {
    return (
        <div className=' flex justify-center'>
            <input type="text" placeholder='Ingresa link' className='p-4 px-4 border-4 border-[#ff4081] rounded-l-[8px] h-[25px] text-white w-[230px] text-[14px] bg-[#121212]'/>  
            <button className='bg-[#ff4081] px-3 font-[700] rounded-r-[8px]'>
                Buscar
            </button>
        </div>
    )
}

export default C_input
