import React from 'react'

const Buscador = () => {
    return (
        <div className='relative my-4'>
            <div className='absolute flex h-full justify-center items-center left-[14px]'>
                <i className="fa-solid fa-magnifying-glass text-[15px] opacity-70 mb-[1px]"></i>
            </div>
            
            <input type="text" placeholder='Ingresa alguna dato...' className='quitar_outline rounded-[8px] h-[35px] px-3 pl-10 w-[400px] bg-[#212121]'/>
        </div>
    )
}

export default Buscador
