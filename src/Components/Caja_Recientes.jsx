import React, { useEffect, useState } from 'react';
import Card from './Card';

const Caja_Recientes = () => {
    const [canciones, setCanciones] = useState([]);
    const [mostrarTodo, setMostrarTodo] = useState(false);
    const [error, setError] = useState(null);

    const cancionesSinConexion = [
        { nombre: "Bohemian Rhapsody" },
        { nombre: "Hotel California" },
        { nombre: "Stairway to Heaven" },
        { nombre: "Imagine" },
        { nombre: "Sweet Child O' Mine" },
        { nombre: "Smells Like Teen Spirit" },
        { nombre: "Billie Jean" },
        { nombre: "Hey Jude" },
        { nombre: "Like a Rolling Stone" },
        { nombre: "Wonderwall" },
        { nombre: "Livin' on a Prayer" },
        { nombre: "November Rain" },
        { nombre: "Wish You Were Here" },
        { nombre: "Back in Black" },
        { nombre: "Thunderstruck" }
    ];

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
                setCanciones(cancionesSinConexion)

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
                {error && cancionesMostradas.map((cancion, index) => (
                        <Card 
                            key={index} 
                            tamaño_texto="13px" 
                            name={cancion.nombre} 
                        />))
                }
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
