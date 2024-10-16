import React from 'react';

const MusicCatalog = () => {
    const musicData = [
        { id: 1, name: 'Nombre Música', author: 'Autor', playlist: 'PlayList', date: 'Añadido hace 1 semana' },
        { id: 2, name: 'Nombre Música', author: 'Autor', playlist: 'Nombre álbum', date: 'Añadido hace 1 semana' },
        { id: 3, name: 'Nombre Música', author: 'Autor', playlist: 'Nombre álbum', date: 'Añadido hace 1 semana' },
        { id: 4, name: 'Nombre Música', author: 'Autor', playlist: 'Nombre álbum', date: 'Añadido hace 1 semana' },
        { id: 5, name: 'Nombre Música', author: 'Autor', playlist: 'Nombre álbum', date: 'Añadido hace 1 semana' },
    ];

    return (
        <div className="p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">Catálogo de música</h2>
        <table className="w-full table-auto text-left">
            <thead>
            <tr className="bg-gray-700">
                <th className="p-2">ID</th>
                <th className="p-2">Nombre</th>
                <th className="p-2">PlayList</th>
                <th className="p-2">Fecha en que se añadió</th>
                <th className="p-2">Acciones</th>
            </tr>
            </thead>
            <tbody>
            {musicData.map((track) => (
                <tr key={track.id} className="border-b border-gray-600">
                <td className="p-2">{track.id}</td>
                <td className="p-2">
                    <div className="flex flex-col">
                    <span className="font-semibold">{track.name}</span>
                    <span className="text-sm text-gray-400">{track.author}</span>
                    </div>
                </td>
                <td className="p-2">{track.playlist}</td>
                <td className="p-2">{track.date}</td>
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
