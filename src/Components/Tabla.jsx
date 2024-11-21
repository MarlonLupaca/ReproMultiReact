import React, { useEffect, useState } from 'react' 
import Filtros from './Filtros';

const Tabla = ({ repro }) => {
    const [dataMulti, setDataMulti] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Estado para la búsqueda

    useEffect(() => {
        jalar();
    }, []);

    const jalar = async () => {
        const response = await fetch("http://localhost:8080/multimedias/allMultimedias");
        const data = await response.json();
        setDataMulti(data);
    };

    const reproducir = (nombre, url) => {
        repro(nombre, url);
    };

    // Filtrar los datos según el término de búsqueda
    const filteredData = dataMulti.filter(item => 
        item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className='p-3 px-4 flex justify-between items-center'>
                <div className='flex items-center'>
                    <input 
                        type="text" 
                        placeholder='Ingresa título' 
                        className='p-1 px-3 border-transparent rounded-l-[3px] h-[35px] text-white w-[500px] text-[14px] box_sha bg-[#121212]' 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <i className="fa-solid fa-magnifying-glass bg-[#F83673] h-[37px] w-[45px] flex items-center rounded-r-[20px] pl-[12px] text-[15px]"></i>
                </div>
                <div>
                    <i className="fa-solid fa-arrow-right-arrow-left text-[20px] rotate-90 p-1"></i>
                </div>
            </div>
            <div className='pt-[30px] pb-[15px] bg-[rgba(255,255,255,0.02)] h-auto flex justify-center'>
                <table className='w-[80%] min-h-[250px] text-[rgba(255,255,255,0.88)]'>
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
                            filteredData.map((item) => (
                                <tr 
                                    className='grid_table py-3 cursor-pointer' 
                                    key={item.id_multimedia} 
                                    onClick={() => reproducir(item.titulo, "ContenidoMultimedia/" + item.url)}
                                >
                                    <td className='text-center'>{item.id_multimedia}</td>
                                    <td className='text-start texto_puntos pr-5'>{item.titulo}</td>
                                    <td className='text-start'>{item.id_genero}</td>
                                    <td className='text-center'>{item.duracion}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Tabla;
