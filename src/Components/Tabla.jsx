import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tabla = ({ repro }) => {
    const [dataMulti, setDataMulti] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
    const [itemSeleccionado, setItemSeleccionado] = useState(null);
    const [datosEditados, setDatosEditados] = useState({});
    const [itemAEliminar, setItemAEliminar] = useState(null);

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

    const abrirModalEditar = (item) => {
        setItemSeleccionado(item);
        setDatosEditados({ ...item });
        setModalVisible(true);
    };

    const cerrarModalEditar = () => {
        setModalVisible(false);
        setItemSeleccionado(null);
        setDatosEditados({});
    };

    const abrirModalEliminar = (item) => {
        setItemAEliminar(item);
        setModalEliminarVisible(true);
    };

    const cerrarModalEliminar = () => {
        setModalEliminarVisible(false);
        setItemAEliminar(null);
    };

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setDatosEditados((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const guardarCambios = () => {
        setDataMulti((prevData) =>
            prevData.map((item) =>
                item.id_multimedia === datosEditados.id_multimedia ? datosEditados : item
            )
        );

        toast.success("Cambios guardados correctamente", {
            theme: "dark",
        });

        cerrarModalEditar();
    };

    const eliminarItem = () => {
        setDataMulti((prevData) =>
            prevData.filter((item) => item.id_multimedia !== itemAEliminar.id_multimedia)
        );

        toast.success("Item eliminado correctamente", {
            theme: "dark",
        });

        cerrarModalEliminar();
    };

    const filteredData = dataMulti.filter((item) =>
        item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="p-3 px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Ingresa título"
                        className="p-1 px-3 border-transparent rounded-l-[3px] h-[35px] text-white w-[500px] text-[14px] box_sha bg-[#121212]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <i className="fa-solid fa-magnifying-glass bg-[#F83673] h-[37px] w-[45px] flex items-center rounded-r-[20px] pl-[12px] text-[15px]"></i>
                </div>
                <div>
                    <i className="fa-solid fa-arrow-right-arrow-left text-[20px] rotate-90 p-1"></i>
                </div>
            </div>
            <div className="pt-[30px] pb-[15px] bg-[rgba(255,255,255,0.02)] h-auto flex justify-center">
                <table className="w-[80%] min-h-[250px] text-[rgba(255,255,255,0.88)]">
                    <thead className="border-b-2 border-[rgba(255,255,255,0.52)]">
                        <tr className="grid_table mb-2">
                            <th className="text-center"><i className="fa-solid fa-fire"></i></th>
                            <th className="text-start">Titulo</th>
                            <th className="text-start">Categoria</th>
                            <th className="text-center"><i className="fa-regular fa-clock"></i></th>
                            <th className="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr className="grid_table py-3" key={item.id_multimedia}>
                                <td className="text-center">{item.id_multimedia}</td>
                                <td className="text-start texto_puntos pr-5">{item.titulo}</td>
                                <td className="text-start">{item.id_genero}</td>
                                <td className="text-center">{item.duracion}</td>
                                <td className="text-center">
                                    <div className="flex justify-center gap-3">
                                        <button
                                            className="text-white hover:text-green-500"
                                            onClick={() => abrirModalEditar(item)}
                                        >
                                            <i className="fa-solid fa-pen"></i>
                                        </button>
                                        <button
                                            className="text-white hover:text-red-500"
                                            onClick={() => abrirModalEliminar(item)}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal de edición */}
            {modalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-[#212121] p-6 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-xl font-bold mb-4">Editar Item</h2>
                        <div>
                            <div className="mb-4">
                                <label className="block font-bold">Título</label>
                                <input
                                    type="text"
                                    name="titulo"
                                    value={datosEditados.titulo}
                                    onChange={manejarCambio}
                                    className="w-full p-2 bg-[#212121] border rounded"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={cerrarModalEditar}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={guardarCambios}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de eliminación */}
            {modalEliminarVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-[#212121] p-6 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-xl font-bold mb-4">Eliminar Item</h2>
                        <p>¿Estás seguro de que deseas eliminar <strong>{itemAEliminar?.titulo}</strong>?</p>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={cerrarModalEliminar}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={eliminarItem}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Tabla;
