import React, { useEffect, useState } from 'react'

const Tabla = ({repro}) => {
    const [dataMulti, setdataMulti] = useState([])

    useEffect(() => {
        jalar();
    }, [])
    

    const jalar = async () =>{
        const response = await fetch("http://localhost:8080/multimedias/allMultimedias")
        const data = await response.json();

        setdataMulti(data)
    }
    const reproducir = (nombre,url)=>{
        repro(nombre,url);
    }

    return (
        <div className=' pt-[30px] pb-[15px] bg-[rgba(255,255,255,0.02)] flex justify-center'>
            <table className='w-[80%] text-[rgba(255,255,255,0.88)]'>
                <thead className='border-b-2 border-[rgba(255,255,255,0.52)]'>
                    <tr className='grid_table mb-2'>
                        <th className='text-center'><i className="fa-solid fa-fire"></i></th>
                        <th className='text-start'>Titulo</th>
                        <th className='text-start'>Categoria</th>
                        <th className='text-center'><i className="fa-regular fa-clock"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        dataMulti.map((item) => {
                            console.log(item)
                            return(
                                <tr className='grid_table py-3 cursor-pointer' key={item.id_multimedia} onClick={()=>{
                                    reproducir(item.titulo , "ContenidoMultimedia/" + item.url )
                                }} >
                                    <td className='text-center'>{item.id_multimedia}</td>
                                    <td className='text-start texto_puntos pr-5'>{item.titulo}</td>
                                    <td className='text-start'>{item.id_genero}</td>
                                    <td className='text-center'>{item.duracion}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tabla
