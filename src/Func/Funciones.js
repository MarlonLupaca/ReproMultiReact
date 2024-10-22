import { toast } from 'react-toastify';

// Función para notificación de éxito
export const notify = () => toast.success('Registrador!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    theme: "dark"
});

// Función para notificación de advertencia/error
export const notifyWarn = () => toast.error('Fallido!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    theme: "dark"
});
