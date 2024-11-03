import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { notify, notifyWarn } from '../Func/Funciones.js';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError(true);
        } else {
            try {
                const response = await fetch(`http://localhost:8080/api/usuarios/login/${email}/${password}`)
                const data = await response.json();
                console.log(data)
                if (data === true) {
                    navigate('/Home');     
                } else {
                    notifyWarn("Usuario o contraseña incorrecta!");
                }
            } catch (error) {
                notifyWarn("Error con el servidor!");
            }
            
            {/* */}
        }
    };

    return (
        <main className='h-[100vh] flex justify-center items-center'>
            <ToastContainer />
            <form className='h-[90%] w-[350px] flex flex-col  items-center justify-center p-4' onSubmit={handleSubmit}>
                <div className='h-[100px] flex flex-col justify-center items-center mb-4'>
                    <img src="Logo_pri.svg" alt="" className='h-[50px] movimiento'/>
                    <span className='font-[800] text-[28px]'>Inicia sesión en Soundly</span>
                </div>

                {/* Campo de Correo/Usuario */}
                <div className='flex flex-col w-full'>
                    <label htmlFor="usuario" className='mb-1'>Correo electrónico o nombre de usuario</label>
                    <input
                        id='usuario'
                        required
                        type="email"
                        placeholder='example@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`${error && !email ? 'error_caja' : ''} p-2 px-3 w-full rounded-[4px] bg-[#121212] border-[2px]`}
                    />
                    {error && !email && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
                </div>

                {/* Campo de Contraseña */}
                <div className='flex flex-col w-full mt-4'>
                    <label htmlFor="pass" className='mb-1'>Contraseña</label>
                    <input
                        id='pass'
                        type="password"
                        placeholder='name1253'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`${error && !password ? 'error_caja' : ''} p-2 px-3 w-full rounded-[4px] bg-[#121212] border-[2px]`}
                        autoComplete="current-password"
                    />
                    {error && !password && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
                </div>

                {/* Botones */}
                <div className='flex flex-col gap-3 mt-8'>
                    <button type='submit' className='Box_personalizado bg-[#ff4081] px-4 py-2 w-[250px] rounded-[5px] text-[16px] font-[800]'>
                        Iniciar sesión
                    </button>
                    <Link to="/Registrarse">
                        <button className='Box_personalizado bg-[#ff4081] px-4 py-2 w-[250px] rounded-[5px] text-[16px] font-[800]'>
                            Registrarse
                        </button>
                    </Link>
                    
                </div>
            </form>
        </main>
    );
}

export default Login;
