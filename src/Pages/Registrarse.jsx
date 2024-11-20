import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { notify, notifyWarn } from '../Func/Funciones.js';
import 'react-toastify/dist/ReactToastify.css';

const Registrarse = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState(false);

    const agregar = async (e) => {
        e.preventDefault();     
        if (!nombre || !email || !contraseña) {
            setError(true); 
            return;
        }
        
        setError(false);

        try {
            const response = await fetch('http://localhost:8080/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre,
                    email,
                    contraseña,
                }),
            });
    
            const data = await response.json();
    
            if (data === true) {
                notify();
                setNombre('');
                setEmail('');
                setContraseña('');
            } else {
                notifyWarn("Registro fallido"); 
            }
    
        } catch (error) {
            console.error("Error fetching users:", error);
            notifyWarn("Registro fallido");
        }
    };

    return (
        <main className='h-[100vh] flex justify-center items-center'>
            <ToastContainer />
            <form 
                className='relative h-fit w-[350px] flex flex-col items-center justify-center gap-3 p-4'
                onSubmit={agregar} 
            >
                <Link to="/">
                    <button type="button" className='h-[40px] w-[40px] flex justify-center items-center absolute top-0 rotate-180 text-[20px] left-1 font-[800]'>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </Link>
                <div className='h-[100px] flex flex-col justify-center items-center mb-4'>
                    <img src="Logo_pri.svg" alt="" className='h-[50px] movimiento' />
                    <span className='font-[800] text-[28px]'>Regístrate en Soundly</span>
                </div>
                {/* Campo de Nombre */}
                <div className='flex flex-col w-full'>
                    <label htmlFor="Nombre" className='mb-1'>Nombre</label>
                    <input 
                        id='Nombre' 
                        type="text" 
                        placeholder='Eduardo' 
                        className={`${error && !nombre ? 'error_caja' : ''} p-2 px-3 w-full rounded-[4px] bg-[#121212] border-[2px]`} 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                    />
                    {error && !nombre && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
                </div>

                {/* Campo de Correo */}
                <div className='flex flex-col w-full'>
                    <label htmlFor="usuario" className='mb-1'>Correo electrónico o nombre de usuario</label>
                    <input 
                        id='usuario' 
                        type="email" 
                        placeholder='example@gmail.com' 
                        className={`${error && !email ? 'error_caja' : ''} p-2 px-3 w-full rounded-[4px] bg-[#121212] border-[2px]`} 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && !email && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
                </div>

                {/* Campo de Contraseña */}
                <div className='flex flex-col w-full'>
                    <label htmlFor="pass" className='mb-1'>Contraseña</label>
                    <input 
                        id='pass' 
                        type="password" 
                        placeholder='name203' 
                        className={`${error && !contraseña ? 'error_caja' : ''} p-2 px-3 w-full rounded-[4px] bg-[#121212] border-[2px]`} 
                        autoComplete="current-password" 
                        value={contraseña} 
                        onChange={(e) => setContraseña(e.target.value)}
                    />
                    {error && !contraseña && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
                </div>
                
                <div className='flex flex-col gap-5 mt-4'>
                    <button type="submit" className='Box_personalizado bg-[#ff4081] px-4 py-2 w-[250px] rounded-[5px] text-[16px] font-[800]'>
                        Registrarse
                    </button>
                </div>
            </form>
        </main>
    );
}

export default Registrarse;
