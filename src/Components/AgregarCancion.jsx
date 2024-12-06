import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AgregarCancion = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            toast.error("Por favor, selecciona un archivo.");
            return;
        }

        const formData = new FormData();
        formData.append("archivo", selectedFile);

        try {
            const response = await fetch("http://localhost:8080/api/subir", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                toast.success("Canción subida exitosamente.");
                setSelectedFile(null); // Resetear el archivo seleccionado
                setIsModalOpen(false); // Cerrar el modal
            } else {
                const message = await response.text();
                toast.error(`Error: ${message}`);
            }
        } catch (error) {
            toast.error("Error al subir la canción.");
            console.error(error);
        }
    };

    return (
        <div className="px-10 mb-2">
            {/* Botón para abrir el modal */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
                Agregar Canción
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-bold text-white mb-4">Subir Canción</h2>
                        
                        {/* Input para subir el archivo */}
                        <input
                            type="file"
                            accept=".mp3"
                            onChange={handleFileChange}
                            className="block w-full text-gray-200 bg-gray-700 border border-gray-600 rounded mb-4 cursor-pointer"
                        />

                        {/* Botones de acción */}
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleUpload}
                                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                            >
                                Subir
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AgregarCancion;
