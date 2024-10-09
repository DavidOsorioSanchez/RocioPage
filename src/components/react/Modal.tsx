import { useState, useEffect } from 'react';
import { comidas } from '../../../comidas.ts';

interface Props {
    key: number;
    title: string;
    price: string;
    modalAbierto: any;
    descripcion: string;
    imagenes: string[];
    picante: boolean;
    categoria: string[];
    URL: string;
    onOpen: any;
}

export default function Modal({
    key,
    title,
    price,
    modalAbierto,
    descripcion,
    imagenes,
    picante,
    categoria,
    URL,
    onOpen
}: Props) {
    const [Picture, setPicture] = useState(imagenes);
    const [indiceActual, setIndiceActual] = useState(0);
    const [elModalAbierto, setElModalAbierto] = useState(modalAbierto);
    
    const toggleModal = () => {
        setElModalAbierto(!elModalAbierto);
    };

    if (Picture.length > 2) {
        return null;
    } else {
        useEffect(() => {
            const intervalo = setInterval(() => {
                setIndiceActual((prevIndice) => {
                    const nuevoIndice = (prevIndice + 1) % Picture.length;
                    return nuevoIndice;
                });
            }, 8000);

            return () => clearInterval(intervalo);
        }, [Picture]);
    }

    const foto = Picture[indiceActual];
    return (
        <section className='w-screen h-screen fixed z-40'>
            <button onClick={onOpen} className="w-screen h-screen bg-black/50 fixed top-0 left-0 z-40 animate-aparece cursor-default min-[800px]:flex-row"></button>
            <article className="fixed flex flex-col justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[80vw] w-screen h-[95vh] rounded-lg bg-white z-50 animate-aparece min-[800px]:flex-row">
                <button onClick={onOpen} className="size-12 p-1 absolute bg-white/75 top-2 left-2 border-2 border-black/50 rounded-full hover:blur-[1px] hover:brightness-125 transition-all duration-150">
                    <img src="/back.svg" alt="Back" className="size-full" />
                </button>
                <img src={`/recetas/${foto}`} alt={`Una foto de ${title}`} className="w-full max-h-[14rem] rounded-t-lg aspect-16/9 object-cover border-b-2 border-dark-blue/70 min-[800px]:w-screen min-[800px]:min-h-[95vh] min-[800px]:rounded-l-lg  min-[800px]:max-h-screen min-[800px]:max-w-[35%] min-[800px]:aspect-9/16 min-[800px]:border-b-0 min-[800px]:border-r-2" />
                <section className='flex flex-col items-center w-full'>
                    <header className="flex flex-col items-center py-2 px-4">
                        <div className="flex gap-2 text-center">
                            <span className="flex gap-2">
                                <h1 className="text-2xl font-bold text-center">
                                    {title}
                                </h1>
                                <p className="text-center text-xl font-bold">
                                    {price}
                                </p>
                            </span>
                            {
                                picante && (
                                    <img src="/spicy.svg" alt="Picante" className="w-8 h-8" />
                                )
                            }
                        </div>
                        <span>

                        </span>
                    </header>

                    <p className="text-center text-sm font-bold">
                        {descripcion}
                    </p>
                </section>
            </article>
        </section>
    )

}