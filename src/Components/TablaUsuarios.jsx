import React, { useEffect, useState } from 'react'; 

const TablaUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    const fetchUsuarios = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/allUsers");
            const data = await response.json();
            setUsuarios(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsuarios();
    }, []);

    useEffect(() => {
        if (usuarios.length > 0) {
            console.log('Usuarios actualizados:', usuarios);
        }
    }, [usuarios]);
    
    return (
        <div className=' pt-[30px] pb-[15px] bg-[rgba(255,255,255,0.02)] flex justify-center'>
            <table className='w-[80%] text-[rgba(255,255,255,0.88)]'>
                <thead className='border-b-2 border-[rgba(255,255,255,0.52)]'>
                    <tr className='mb-2 grid_table_usuario'>
                        <th className='text-center'><i className="fa-solid fa-fire"></i></th>
                        <th className='text-start'>Nombre</th>
                        <th className='text-start'>Email</th>
                        <th className='text-start'>Contraseña</th>
                        <th className='text-center'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((track) => (
                        <tr key={track.idUsuario} className="h-fit my-3 grid_table_usuario">
                            <td className="text-center">{track.idUsuario}</td>
                            <td className="text-start">{track.nombre}</td>
                            <td className="text-start">{track.email}</td>
                            <td className="text-start">{track.contraseña}</td>
                            <td className="text-center">
                                <div className="flex justify-center gap-3 items-center">
                                <button className="text-lg text-white hover:text-red-500">
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                                <button className="text-lg text-white hover:text-green-500">
                                    <i className="fa-solid fa-pen"></i>
                                </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TablaUsuarios
