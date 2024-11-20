import React, { useState } from 'react';
import Cabecera from '../Components/Cabecera';
import MusicPlayer from '../Components/MusicPlayer';
import Navegador from '../Components/Navegador';
import { useUser } from '../context/ContextoGlobal.jsx';
import { toast } from 'react-toastify'; 

const Gestion = () => {
    const { usuario, setUsuario } = useUser();
    const [nombre, setNombre] = useState(usuario.nombre);
    const [email, setEmail] = useState(usuario.email);
    const [contraseña, setContraseña] = useState(usuario.contraseña);
    const [mostrarContraseña, setMostrarContraseña] = useState(false);

    const handleSave = async () => {
        const updatedUser = { nombre, email, contraseña };

        try {
            const response = await fetch(`http://localhost:8080/api/usuarios/${usuario.idUsuario}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedUser),
            });

            if (response.ok) {
                const message = await response.text();

                if (message === "Usuario actualizado con éxito.") {
                    toast.success("Perfil actualizado con éxito.");
                    setUsuario({
                        ...usuario,
                        nombre,
                        email,
                        contraseña,
                    });
                } else {
                    toast.error("Error al actualizar el perfil."); 
                }
            } else {
                toast.error("Error al actualizar el perfil."); 
            }
        } catch (error) {
            toast.error("Error con el servidor.");
        }
    };

    return (
        <>
            <Cabecera />
            <main className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#212121] md:h-[580px] md:overflow-y-auto md:ml-[210px]">
                <h3 className="text-white text-3xl font-bold mb-6">Gestionar Perfil</h3>
                <div className="bg-[#333] p-6 rounded-lg shadow-lg w-full max-w-md">
                    <div className="flex flex-col gap-5">
                        <div>
                            <label className="text-white block mb-1" htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="w-full p-3 rounded bg-[#444] text-white outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-white block mb-1" htmlFor="email">Correo Electrónico:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 rounded bg-[#444] text-white outline-none"
                            />
                        </div>
                        
                        <div className="relative">
                            <label className="text-white block mb-1" htmlFor="contraseña">Contraseña:</label>
                            <input
                                type={mostrarContraseña ? "text" : "password"}
                                id="contraseña"
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)}
                                className="w-full p-3 rounded bg-[#444] text-white outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => setMostrarContraseña(!mostrarContraseña)}
                                className="h-[50px] bottom-0 absolute right-3 flex items-center text-gray-400 hover:text-white"
                                aria-label="Toggle password visibility"
                            >
                                {mostrarContraseña ? "🙈" : "👁️"} {/* Ícono de ojo o cruzado */}
                            </button>
                        </div>
                        <button
                            onClick={handleSave}
                            className="w-full py-3 mt-4 bg-[#ff4081] text-white font-bold rounded-lg hover:bg-[#ff5a92] transition"
                        >
                            Guardar Cambios
                        </button>
                    </div>
                </div>
            </main>
            <MusicPlayer />
            <Navegador />
        </>
    );
};

export default Gestion;
