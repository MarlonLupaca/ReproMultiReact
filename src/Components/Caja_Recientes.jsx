import React, { useState } from 'react';
import Card from './Card';

const Caja_Recientes = ({cancion}) => {
    const [mostrarTodo, setMostrarTodo] = useState(false);

    // Muestra los primeros 6 componentes por defecto
    return (
        <div className='h-[250px] w-full px-5'>
        <span className='h-[10%] text-[18px] flex items-center mb-2 font-[700]'>
            Añadido recientemente
        </span>
        <div className='h-[90%] flex gap-10 overflow-x-auto justify-center'>
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
                {/* Agrega más tarjetas según sea necesario */}
            </>
            )}
        </div>

        {/* Botón para mostrar todas las canciones o colapsarlas */}
        <div className="flex justify-end mt-3">
            <button
            onClick={() => setMostrarTodo(!mostrarTodo)}
            className="text-blue-500 font-bold hover:underline"
            >
            {mostrarTodo ? 'Mostrar menos' : 'Mostrar todos'}
            </button>
        </div>
        </div>
    );
};

export default Caja_Recientes;
