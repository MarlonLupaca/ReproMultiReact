import React from 'react'


const Cabecera = () => {
    return (
        <div className='z-50 h-[50px] flex items-center justify-between px-5 bg-[#121212] sticky top-0 border-black'>
            <span className='text-[25px] font-[700]'>Logo</span>
            <div className='flex items-center gap-2'>
                <img src='assets/login.jpg' alt="Logo"  className='rounded-full h-[30px]'/>
                <span>Usuario: Nombres</span>
            </div>
        </div>
    )
}

export default Cabecera
