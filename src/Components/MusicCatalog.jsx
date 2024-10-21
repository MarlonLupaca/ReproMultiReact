import React, { useEffect, useState } from 'react';

const MusicCatalog = () => {
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
        <div className="p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">Usuarios</h2>
        <table className="w-[1100px] table-auto text-left m-auto">
            <thead>
            <tr className="bg-gray-700">
                <th className="p-2">ID</th>
                <th className="p-2">Nombre</th>
                <th className="p-2">Email</th>
                <th className="p-2">Contraseña</th>
                <th className="p-2">Acciones</th>
            </tr>
            </thead>
            <tbody>
            {usuarios.map((track) => (
                <tr key={track.idUsuario} className="border-b border-gray-600">
                    <td className="p-2">{track.idUsuario}</td>
                    <td className="p-2">{track.nombre}</td>
                    <td className="p-2">{track.email}</td>
                    <td className="p-2">{track.contraseña}</td>
                    <td className="p-2">
                        <div className="flex space-x-2">
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
    );
};

export default MusicCatalog;
