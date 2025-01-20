/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { comidas } from '../../utils/Comidas.ts';
import Modal from './Modal.tsx'
import "../../App.css";

interface ParametroComidas {
    id: number;
    modalAbierto: any;
    bgImage: string;
    title: string;
    price: string;
    descripcion: string;
    imagenes: string[];
    picante: boolean;
    categoria: string[];
    URL: string;
}

export default function ProductsCards() {
    const [Comida, setComida] = useState<typeof comidas>(comidas);
    
    const toggleModal = (id: number) => {
        setComida(comidas.map(comidas => 
            comidas.id === id ? { ...comidas, modalAbierto: !comidas.modalAbierto } : comidas
        ));
    };
    

    return (
        <div className="grid grid-cols-1 gap-8 w-full tablet:grid-cols-2 laptop:grid-cols-3 overflow-y-hidden">
            {Comida.map((data: ParametroComidas) =>(
                <button
                    key={data.id}
                    onClick={() => toggleModal(data.id)}
                    id="AnimacionScroll"
                    className="relative rounded-lg w-full h-72 shadow-xl shadow-black/60 border-double border-2 border-black/30 transition-all duration-150  hover:scale-[1.02] active:brightness-75"
                >
                    <img src={`/recetas/${data.bgImage}`} alt={`Una foto de ${data.title}`} className="absolute top-0 left-0 w-full h-full aspect-4/3 object-cover rounded-lg" />
                    <footer className="absolute bottom-0 w-full h-fit flex items-center justify-center gap-2 bg-black/80 p-2 text-white rounded-b-lg z-20">
                        <p className="text-xl font-semibold capitalize">
                            {data.title}
                        </p>
                        <p className="text-sm">
                            {data.price}
                        </p>
                    </footer>
                    
                </button>
            ))}

            {Comida.map((data: ParametroComidas) => (
                <>
                        {data.modalAbierto && (
                            <Modal 
                                id={data.id}
                                onOpen={toggleModal}
                                title={data.title}
                                price={data.price}
                                descripcion={data.descripcion}
                                imagenes={data.imagenes}
                                picante={data.picante}
                                categoria={data.categoria}
                                URL={data.URL}
                            />
                            )}
                    </>
            ))}
        </div>
    )
}