import { useState } from 'react';

interface Props {
    textToCopy: string;
}

function CopyButton({ textToCopy }: Props) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 500);
            })
            .catch(err => {
                console.error('Error al copiar', err);
            });
    };

    return (
        <button onClick={handleCopy}>
            {isCopied ? 'Copiado' : 'Copiar'}
        </button>
    );
}