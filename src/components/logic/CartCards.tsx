import { useState } from "react";

interface CartCardsProps {
    title: string;
    price: number;
    image: string;
    quantity: number;
}

export default function CartCards({ title, price, image, quantity }: CartCardsProps) {
    const [eliminado, setEliminado] = useState(false);
    const [cantidad, setCantidad] = useState(quantity);
    const dataLocalStorage = JSON.parse(localStorage.getItem(title) as string);

    const eliminarItem = () => {
        localStorage.removeItem(title);
        setEliminado(true);
    }

    const mas = () => {
        if (dataLocalStorage.cantidad < 10) {
            dataLocalStorage.cantidad += 1;
            setCantidad(dataLocalStorage.cantidad);
            localStorage.setItem(title, JSON.stringify(dataLocalStorage));
        }
    }

    const menos = () => {
        if (dataLocalStorage.cantidad > 1) {
            dataLocalStorage.cantidad -= 1;
            setCantidad(dataLocalStorage.cantidad);
            localStorage.setItem(title, JSON.stringify(dataLocalStorage));
        }
    }

    return (
        <article className={`${eliminado ? "hidden":"flex"} w-4/5 max-w-sm min-w-64 h-auto min-h-56 bg-black/10  flex-col justify-between gap-2 rounded-xl m-4`}>
            <img src={`/recetas/${image}`} alt="imagen de comida" className="w-full h-auto max-h-36 object-cover aspect-16/9 rounded-t-xl "/>
            <div className="w-full flex flex-col justify-between gap-4 p-4">
                <header className="w-full flex justify-center gap-8 flex-nowrap items-center ">
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <p className="text-2xl font-semibold">{price}</p>
                </header>
                <footer className="w-full flex justify-between flex-nowrap items-center">
                    <div className="flex flex-nowrap gap-0 items-center">
                        <button onClick={menos} className="text-xl size-9 font-semibold bg-dark-blue/80 text-white rounded-l-xl justify-center items-center active:brightness-75"> - </button>
                        <p className="flex text-xl h-9 w-9 px-4 bg-white/75 justify-center items-center"> {cantidad}</p>
                        <button onClick={mas} className="text-xl size-9 font-semibold bg-dark-blue/80 text-white rounded-r-xl justify-center items-center active:brightness-75">+</button>
                    </div>
                    <button onClick={eliminarItem} className="text-lg font-semibold bg-[#BE3144] text-white rounded-md px-2 py-1">Eliminar</button>
                </footer>
            </div>
            {/* <p>id: {id}</p>
            <p>title: {title}</p>
            <p>precio: {price}</p>
            <p>imagen: {image}</p>
            <p>cantidad: {quantity}</p> */}
            
        </article>
    )
}