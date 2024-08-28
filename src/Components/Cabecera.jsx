import React from 'react'


const Cabecera = () => {
    return (
        <div className='z-50 h-[50px] flex items-center justify-between pr-5 pl-4 bg-[#121212] sticky top-0 border-black'>
            <img src="assets/logo_2.png" alt="logo" className='h-[23px]'/>
            <div className='flex items-center gap-2'>
                <img src='assets/login.jpg' alt="Logo" className='rounded-full h-[30px]'/>
                <span>Usuario: Nombres</span>
            </div>
        </div>
    )
}

export default Cabecera
