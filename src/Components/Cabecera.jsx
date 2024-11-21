import React from 'react'
import { Link } from 'react-router-dom'
import Buscador from './Buscador'
import { useUser } from '../context/ContextoGlobal.jsx';


const Cabecera = () => {
    const { usuario } = useUser();

    return (
        <div className='z-50 h-[50px] flex items-center justify-between pr-5 pl-4 bg-[#121212] sticky top-0 border-black md:bg-[#000000] md:h-[60px]'>
            <div className='flex items-center gap-1'>
                <img src="Logo_pri.svg" alt="logo" className='h-[45px]'/>
                <span className='text-[20px] font-[700]'>SOUNDLY</span>
            </div>
            <Buscador/>
            <div className='flex items-center gap-4 '>
                <img src='assets/login.jpg' alt="Logo" className='rounded-full h-[30px]'/>
                <div className='flex flex-col text-[12px] font-[600]'>
                    <span>{usuario.nombre}</span>
                    <span>{usuario.email}</span>
                </div>
                <Link to="/Gestion">
                    <i className="fa-solid fa-gears text-[20px]"></i>
                </Link>
                
                <Link to="/">
                    <i className="fa-solid fa-right-from-bracket  text-[20px]"></i>
                </Link>
                
            </div>
        </div>
    )
}

export default Cabecera
