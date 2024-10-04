import { useState, useEffect } from 'react';

interface Props {
    title: string;
    price: string;
    descripcion: string;
    carousel: boolean;
    imagenes: string[];
    picante: boolean;
    categoria: string[];
    URL: string;
}

export default function Modal({
    title,
    price,
    descripcion,
    carousel,
    imagenes,
    picante,
    categoria,
    URL
}: Props) {
    const [Picture, setPicture] = useState(imagenes);
    const [indiceActual, setIndiceActual] = useState(0);

    if(Picture.length > 2) {
        return null;
    }else {
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


        <article className="fixed top-0 left-0 w-screen h-screen bg-white z-40 animate-aparece">
                <img src={`/recetas/${foto}`} alt={`Una foto de ${title}`} className="w-full max-h-[14rem] aspect-16/9 object-cover " />
                <section>
                    <h1 className="text-2xl font-bold text-center">
                        {title}
                    </h1>
                    <p className="text-center text-xl font-bold">
                        {price}
                    </p>
                    <p className="text-center text-sm font-bold">
                        {descripcion}
                    </p>
                </section>
        </article>
    )

}