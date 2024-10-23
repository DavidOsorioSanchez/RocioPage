import React, { useState } from 'react';

interface Props {
    children: React.ReactNode;
    textoCopiar : string;
    width?: string;
    animation?: string;
}

export default function CopyButton({ children, textoCopiar, width, animation }: Props) {
    const [textToCopy] = useState(textoCopiar);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);

            });
    };

    return (
        <div className={`relative min-w-52 w-max max-w-96 flex items-center justify-center ${animation}`}>
            <button onClick={handleCopy} className="absolute top-0 min-w-52 w-max  h-16 bg-[#e3dfda] text-black/80 font-bold py-2 px-4 rounded-md transition-all duration-300 hover:scale-105  active:opacity-0 active:active:duration-100">
                {children}
            </button>
            <span className={`${width} h-16 text-xl font-bold flex items-center justify-center gap-2 rounded-md bg-dark-blue text-white`}>copiado</span>
        </div>
    );
}
