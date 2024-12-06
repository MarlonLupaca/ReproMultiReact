import React from 'react';
import "../Css/Customs.css";

const Card = ({ tamaño_texto, name }) => {
    // Obtener la primera letra del nombre de la canción
    const inicial = name.charAt(0).toUpperCase();

    // Generar un color aleatorio para el texto
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // Generar un color aleatorio con opacidad para el fondo
    const randomBackgroundColor = `${randomColor}11`; // Usar opacidad 20% (33 en hex)

    return (
        <div 
            className='h-[250px] w-[200px] flex flex-col gap-[10px]  items-center'
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)', // Fondo blanco con opacidad
                padding: '10px', // Espaciado interno para mejor diseño
                borderRadius: '10px', // Bordes redondeados para estética
            }}
        >
            {/* Círculo con texto */}
            <div 
                className='w-[150px] h-[150px] text-[100px] font-mono flex items-center justify-center rounded-full text-center'
                style={{
                    color: randomColor, // Color del texto
                    border: `2px solid ${randomColor}`, // Borde del mismo color
                    backgroundColor: randomBackgroundColor, // Fondo con opacidad
                }}
            >
                {inicial}
            </div>
            {/* Nombre de la canción */}
            <span className='text-balance font-[400]' style={{ fontSize: tamaño_texto }}>
                {name}
            </span>
        </div>
    );
};

export default Card;
