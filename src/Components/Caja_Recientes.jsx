import React, { useState } from 'react';
import Card from './Card';

const Caja_Recientes = ({cancion}) => {
    const [mostrarTodo, setMostrarTodo] = useState(false);

    // Muestra los primeros 6 componentes por defecto
    return (
        <div className='h-[5000px] w-full px-5'>
            <div className=''>
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
                <Card tamaño_texto="13px" name={cancion} />
                <Card tamaño_texto="13px" name={cancion} />
                <Card tamaño_texto="13px" name={cancion} />
                <Card tamaño_texto="13px" name={cancion} />
                <Card tamaño_texto="13px" name={cancion} />
                <Card tamaño_texto="13px" name={cancion} />

                {/* Mostrar más tarjetas si mostrarTodo es true */}
                {mostrarTodo && (
                <>
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    <Card tamaño_texto="13px" name={cancion} />
                    {/* Agrega más tarjetas según sea necesario */}
                </>
                )}
            </div>

            {/* Botón para mostrar todas las canciones o colapsarlas */}
            
        </div>
    );
};

export default Caja_Recientes;
