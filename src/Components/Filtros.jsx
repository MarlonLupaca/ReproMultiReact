import React from 'react'

const Filtros = () => {
    return (
        <div className='p-3 px-4 flex justify-between items-center'>
            <div className='flex items-center '>
                <input type="text" placeholder='Ingresa nombre' className='p-1 px-3 border-transparent rounded-l-[3px] h-[35px] text-white w-[500px] text-[14px] box_sha bg-[#121212]'/>
                <i className="fa-solid fa-magnifying-glass bg-[#F83673] h-[37px] w-[45px] flex items-center rounded-r-[20px] pl-[12px] text-[15px]"></i>
            </div>
            <div>
                <i className="fa-solid fa-arrow-right-arrow-left text-[20px] rotate-90 p-1"></i>
            </div>

        </div>
    )
}

export default Filtros
