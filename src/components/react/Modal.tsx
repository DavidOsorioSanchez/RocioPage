import { useState, useEffect } from 'react';

interface Props {
    title: string;
    price: string;
    descripcion: string;
    imagenes: string[];
    picante: boolean;
    categoria: string[];
    URL: string;
    onOpen: any;
}

export default function Modal({
    title,
    price,
    descripcion,
    imagenes,
    picante,
    categoria,
    URL,
    onOpen
}: Props) {
    const [Picture, setPicture] = useState(imagenes);
    const [indiceActual, setIndiceActual] = useState(0);

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
            <button onClick={onOpen} className="w-screen h-screen bg-black/50 fixed top-0 left-0 z-40 animate-aparece cursor-default max-[800px]:hidden"></button>
            <article className="fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen rounded-lg bg-white z-50 animate-aparece min-[800px]:flex-row min-[800px]:max-w-[80vw] min-[800px]:h-[95vh]">
                <button onClick={onOpen} className="size-12 p-1 fixed bg-white/75 top-4 left-4 border-2 border-black/50 rounded-full hover:blur-[1px] hover:brightness-125 transition-all duration-150">
                    <img src="/back.svg" alt="Back" className="size-full" />
                </button>
                <img src={`/recetas/${foto}`} alt={`Una foto de ${title}`} className="w-full h-[35vh] rounded-none aspect-16/9 object-cover border-b-2 border-dark-blue/70 min-[800px]:w-screen min-[800px]:min-h-[95vh] min-[800px]:rounded-l-lg  min-[800px]:max-h-screen min-[800px]:max-w-[40%] min-[800px]:aspect-9/16 min-[800px]:border-b-0 min-[800px]:border-r-2 overflow-y-auto" />
                <section className='flex flex-col justify-center items-center w-full h-full gap-y-6 gap-x-3 p-4'>
                    <div className='w-full p-4 bg-dark-blue/15 rounded-xl flex flex-col items-center max-w-screen-tablet'>                        
                        <header className="flex flex-wrap gap-4 items-center justify-center py-2 px-4">
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
                            <span className="flex justify-center flex-wrap gap-2">
                                {categoria.map((categoria: string) => (
                                    <span className="text font-semibold text-white bg-dark-blue/70  py-2 px-4 rounded-full">
                                        {categoria}
                                    </span>
                                ))}
                            </span>
                        </header>

                        <p className="text-center text-md font-medium">
                            {descripcion}
                        </p>
                    </div>
                    <div className='w-full px-1 py-4 bg-dark-blue/15 rounded-xl flex flex-nowrap flex-col text-nowrap items-center gap-x-1 gap-y-2 justify-center max-w-screen-tablet phone:px-8 phone:gap-x-8 phone:flex-row'>
                        <button disabled className='flex items-center justify-center gap-1 min-w-fit bg-[#257180] text-white rounded-2xl h-fit w-fit px-6 py-4 font-semibold brightness-50'>
                            <img src="/money.svg" alt="Comprar" className="size-6" />
                            <p>Comprar</p>
                        </button>
                        <a href={URL} target="_blank" rel="contactar">
                            <button className='flex items-center justify-center gap-1 min-w-fit bg-[#5BD066] text-white rounded-2xl h-fit w-fit px-6 py-4 font-semibold hover:-skew-x-12 hover:brightness-110 transition-all duration-150'>
                                <img src="whatsapp-outline.svg" alt="Contactar" className="size-6" />
                                <p>Contactar</p>
                            </button>
                        </a>
                    </div>
                </section>
            </article>
        </section>
    )

}