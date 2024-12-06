import React, { useEffect, useState } from 'react';
import Card from './Card';

const Caja_Recientes = () => {
    const [canciones, setCanciones] = useState([]);
    const [mostrarTodo, setMostrarTodo] = useState(false);
    const [error, setError] = useState(null);

    // Llamar a la API para obtener las canciones
    useEffect(() => {
        const fetchCanciones = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/ultimas-canciones');
                if (!response.ok) {
                    throw new Error('Error al obtener las canciones');
                }
                const data = await response.json();
                setCanciones(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchCanciones();
    }, []);

    // Mostrar las primeras 6 canciones o todas si mostrarTodo es true
    const cancionesMostradas = mostrarTodo ? canciones : canciones.slice(0, 6);

    return (
        <div className='w-full px-5 my-2 mb-5'>
            <div className='flex justify-between py-3'>
                <span className='text-[18px] font-[700]'>
                    Añadido recientemente
                </span>
                <div>
                    <button
                        onClick={() => setMostrarTodo(!mostrarTodo)}
                        className="text-blue-500 font-bold hover:underline"
                    >
                        {mostrarTodo ? 'Mostrar menos' : 'Mostrar todos'}
                    </button>
                </div>
            </div>

            <div className='gap-4 flex flex-wrap justify-center'>
                {error && (
                    <div className="text-red-500">
                        Error al cargar canciones: {error}
                    </div>
                )}
                {!error && cancionesMostradas.map((cancion, index) => (
                    <Card 
                        key={index} 
                        tamaño_texto="13px" 
                        name={cancion.nombre} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Caja_Recientes;
