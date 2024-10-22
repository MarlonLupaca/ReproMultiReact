import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <main className='h-[100vh] flex justify-center items-center'>
            <form className='h-[90%] w-[350px] flex flex-col  items-center justify-center gap-6 p-4'>
                <div className=' h-[100px] flex flex-col justify-center items-center mb-4' >
                    <img src="Logo_pri.svg" alt="" className='h-[50px] movimiento'/>
                    <span className='font-[800] text-[28px]'>Inicia sesión en Soundly</span>
                    
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="usuario">Correo electrónico o nombre de usuario</label>
                    <input id='usuario' type="text" placeholder='example@gmail.com' className='p-2 px-3 w-full rounded-[4px] bg-[#121212] border-[2px]' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="pass">Contraseña</label>
                    <input id='pass' type="password" placeholder='name1253' className='p-2 px-3 w-full rounded-[4px] bg-[#121212] border-[2px]' autoComplete="current-password" />
                </div>
                <div className='flex flex-col gap-5 mt-4'>
                    <Link to="/Home">
                        <button className='Box_personalizado bg-[#ff4081] px-4 py-2 w-[250px] rounded-[5px] text-[16px] font-[800]'>
                            Iniciar sesión
                        </button>
                    </Link>
                    <Link to="/Registrarse">
                        <button className='Box_personalizado bg-[#ff4081] px-4 py-2 w-[250px] rounded-[5px] text-[16px] font-[800]'>
                        Registrarse
                    </button>
                    </Link>
                    
                    
                </div>
            </form>
        </main>
    )
}

export default Login
