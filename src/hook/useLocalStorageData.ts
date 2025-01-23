import { useState, useEffect } from 'react';

export default function useLocalStorageData() {
    const [data, setData] = useState({});

    useEffect(() => {
        const obtenerDatos = () => {
            const todosLosDatos: { [key: string]: any } = {};
            for (let i = 0; i < localStorage.length; i++) {
                const clave = localStorage.key(i);
                if (clave?.charAt(0) === '_') {
                    continue;
                }
                if (!clave) {
                    continue;
                }
                const valor = localStorage.getItem(clave);
                if (!valor) {
                    continue;
                }
                try {
                    todosLosDatos[clave] = JSON.parse(valor);
                } catch (error) {
                    console.error('Error al parsear:', error);
                    todosLosDatos[clave] = valor;
                }
            }
            setData(todosLosDatos);
        };
        obtenerDatos();
    }, []);

    return data;
}