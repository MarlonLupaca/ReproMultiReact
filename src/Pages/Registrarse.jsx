import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { notify, notifyWarn } from '../Func/Funciones.js';
import 'react-toastify/dist/ReactToastify.css';

const Registrarse = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');


    const agregar = async (e) => {
        e.preventDefault();     
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
    
            console.log(data);
    
            if (data === true) {
                notify();
            } else {
                notifyWarn();
            }
    
        } catch (error) {
            console.error("Error fetching users:", error);
            notifyWarn();
        }
    };

    return (
        <main className='h-[100vh] flex justify-center items-center'>
            <ToastContainer/>

            <form 
                className='relative h-fit w-[350px] flex flex-col items-center justify-center gap-6 p-4'
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
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="Nombre">Nombre</label>
                    <input 
                        id='Nombre' 
                        type="text" 
                        placeholder='Eduardo' 
                        className='p-2 px-3 w-full rounded-[4px] bg-[#121212] border-[2px]' 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                    />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="usuario">Correo electrónico o nombre de usuario</label>
                    <input 
                        id='usuario' 
                        type="text" 
                        placeholder='example@gmail.com' 
                        className='p-2 px-3 w-full rounded-[4px] bg-[#121212] border-[2px]' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="pass">Contraseña</label>
                    <input 
                        id='pass' 
                        type="password" 
                        placeholder='name203' 
                        className='p-2 px-3 w-full rounded-[4px] bg-[#121212] border-[2px]' 
                        autoComplete="current-password" 
                        value={contraseña} 
                        onChange={(e) => setContraseña(e.target.value)}
                    />
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
