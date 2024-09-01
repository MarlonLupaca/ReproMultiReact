import React from 'react'
import Card from './Card'

const Caja_Recientes = ({cancion}) => {
    return (
        <div className='h-[250px] w-full pX-4 px-5'>
            <span className='h-[10%] text-[18px] flex items-center mb-2 font-[700]'>Añadido recientemente</span>
            <div className='h-[90%] flex gap-10 overflow-x-auto espacio_scroll'>
                <Card tamaño_texto="13px" name={cancion}/>
                <Card tamaño_texto="13px" name={cancion}/>
                <Card tamaño_texto="13px" name={cancion}/>
                <Card tamaño_texto="13px" name={cancion}/>
                <Card tamaño_texto="13px" name={cancion}/>
                <Card tamaño_texto="13px" name={cancion}/>
                <Card tamaño_texto="13px" name={cancion}/>
                <Card tamaño_texto="13px" name={cancion}/>
                <Card tamaño_texto="13px" name={cancion}/>
                <Card tamaño_texto="13px" name={cancion}/>
                <Card tamaño_texto="13px" name={cancion}/>
                <Card tamaño_texto="13px" name={cancion}/>
                <Card tamaño_texto="13px" name={cancion}/>
            </div>
        </div>
    )
}

export default Caja_Recientes
