import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TablaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [visibilidadContraseñas, setVisibilidadContraseñas] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [datosEditados, setDatosEditados] = useState({});
    const [usuarioAEliminar, setUsuarioAEliminar] = useState(null);

    const fetchUsuarios = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/allUsers");
            const data = await response.json();
            setUsuarios(data);

            const inicialVisibilidad = data.reduce((acc, usuario) => {
                acc[usuario.idUsuario] = false;
                return acc;
            }, {});
            setVisibilidadContraseñas(inicialVisibilidad);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const toggleContraseña = (id) => {
        setVisibilidadContraseñas((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const abrirModal = (usuario) => {
        setUsuarioSeleccionado(usuario);
        setDatosEditados({ ...usuario });
        setModalVisible(true);
    };

    const cerrarModal = () => {
        setModalVisible(false);
        setUsuarioSeleccionado(null);
        setDatosEditados({});
    };

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setDatosEditados((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const guardarCambios = () => {
        setUsuarios((prevUsuarios) =>
            prevUsuarios.map((usuario) =>
                usuario.idUsuario === datosEditados.idUsuario ? datosEditados : usuario
            )
        );

        toast.success("Cambios guardados correctamente", {
            theme: "dark",
        });

        cerrarModal();
    };

    const abrirModalEliminar = (usuario) => {
        setUsuarioAEliminar(usuario);
        setModalEliminarVisible(true);
    };

    const cerrarModalEliminar = () => {
        setModalEliminarVisible(false);
        setUsuarioAEliminar(null);
    };

    const eliminarUsuario = () => {
        setUsuarios((prevUsuarios) =>
            prevUsuarios.filter((usuario) => usuario.idUsuario !== usuarioAEliminar.idUsuario)
        );

        toast.success("Usuario eliminado correctamente", {
            theme: "dark",
        });

        cerrarModalEliminar();
    };

    return (
        <div className="pt-[30px] pb-[15px] bg-[rgba(255,255,255,0.02)] flex justify-center">
            <table className="w-[80%] text-[rgba(255,255,255,0.88)]">
                <thead className="border-b-2 border-[rgba(255,255,255,0.52)]">
                    <tr className="mb-2 grid_table_usuario">
                        <th className="text-center"><i className="fa-solid fa-fire"></i></th>
                        <th className="text-start">Nombre</th>
                        <th className="text-start">Email</th>
                        <th className="text-start">Contraseña</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.idUsuario} className="h-fit my-3 grid_table_usuario">
                            <td className="text-center">{usuario.idUsuario}</td>
                            <td className="text-start">{usuario.nombre}</td>
                            <td className="text-start">{usuario.email}</td>
                            <td className="text-start">
                                <div className="flex items-center gap-2">
                                    <input
                                        type={visibilidadContraseñas[usuario.idUsuario] ? 'text' : 'password'}
                                        value={usuario.contraseña}
                                        readOnly
                                        className="bg-transparent border-none text-white"
                                    />
                                    <button
                                        onClick={() => toggleContraseña(usuario.idUsuario)}
                                        className="text-lg text-white hover:text-blue-500"
                                    >
                                        <i className={`fa-solid ${visibilidadContraseñas[usuario.idUsuario] ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                    </button>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="flex justify-center gap-3 items-center">
                                    <button
                                        className="text-lg text-white hover:text-red-500"
                                        onClick={() => abrirModalEliminar(usuario)}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                    <button
                                        className="text-lg text-white hover:text-green-500"
                                        onClick={() => abrirModal(usuario)}
                                    >
                                        <i className="fa-solid fa-pen"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal de edición */}
            {modalVisible && (
                <div className="fixed inset-0 bg-black text-white bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-[#212121] p-6 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-xl font-bold mb-4">Editar Usuario</h2>
                        <div>
                            <div className="mb-4">
                                <label className="block font-bold">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={datosEditados.nombre}
                                    onChange={manejarCambio}
                                    className="w-full border bg-[#212121] border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={datosEditados.email}
                                    onChange={manejarCambio}
                                    className="w-full border bg-[#212121] border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">Contraseña</label>
                                <input
                                    type="password"
                                    name="contraseña"
                                    value={datosEditados.contraseña}
                                    onChange={manejarCambio}
                                    className="w-full border bg-[#212121] border-gray-300 p-2 rounded"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={cerrarModal}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Cerrar
                            </button>
                            <button
                                onClick={guardarCambios}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de eliminación */}
            {modalEliminarVisible && (
                <div className="fixed inset-0 bg-black text-white bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-[#212121] p-6 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-xl font-bold mb-4">Eliminar Usuario</h2>
                        <p className="mb-4">¿Estás seguro de que deseas eliminar a <strong>{usuarioAEliminar.nombre}</strong>?</p>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={cerrarModalEliminar}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={eliminarUsuario}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TablaUsuarios;
