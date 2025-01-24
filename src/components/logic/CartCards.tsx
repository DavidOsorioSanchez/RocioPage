import { useState } from "react";

interface CartCardsProps {
    title: string;
    price: number;
    image: string;
    quantity: number;
    metodoActualizar: any;
}

export default function CartCards({title, price, image, quantity, metodoActualizar }: CartCardsProps) {
    const [eliminado, setEliminado] = useState(false);
    const [cantidad, setCantidad] = useState(quantity);
    const [precioAcumulativo, setPrecioAcumulativo] = useState(price * quantity);
    const dataLocalStorage = JSON.parse(localStorage.getItem(title) as string);

    

    const eliminarItem = () => {
        localStorage.removeItem(title);
        setEliminado(true);
        metodoActualizar();
    }

    const mas = () => {
        if (dataLocalStorage.cantidad < 10) {
            dataLocalStorage.cantidad += 1;
            setCantidad(dataLocalStorage.cantidad);
            setPrecioAcumulativo(dataLocalStorage.cantidad * price);
            localStorage.setItem(title, JSON.stringify(dataLocalStorage));
            metodoActualizar();
        }
    }

    const menos = () => {
        if (dataLocalStorage.cantidad > 1) {
            dataLocalStorage.cantidad -= 1;
            setCantidad(dataLocalStorage.cantidad);
            setPrecioAcumulativo(dataLocalStorage.cantidad * price);
            localStorage.setItem(title, JSON.stringify(dataLocalStorage));
            metodoActualizar();
        }
    }

    return (
        <article className={`${eliminado ? "hidden":"flex"} w-4/5 flex-col h-auto  border-[1px] border-solid border-black/10 bg-black/5  justify-between gap-1  rounded-sm m-4 min-[800px]:h-52 min-[800px]:min-w-64 min-[800px]:flex-row`}>
            <img src={`/recetas/${image}`} alt="imagen de comida" className="w-full h-40 rounded-l-sm object-cover aspect-9/16 min-[800px]:w-2/5 min-[800px]:h-auto "/>
            <div className="w-full flex flex-col justify-between gap-4 p-4">
                <header className="w-full flex justify-between gap-8 flex-nowrap items-center ">
                    <div className="flex flex-nowrap gap-2"><h3 className="text-3xl font-semibold">{title}</h3><h4>${price}</h4></div>
                    <button onClick={eliminarItem} className="bg-black/10 size-auto rounded-md transition-all transition-300s  hover:bg-[#BE3144]"><img src="/bagOff.svg" alt="bagoff" className="size-8 my-1 mx-2" /></button>
                </header>
                <footer className="w-full flex justify-between flex-nowrap items-center">
                    <p className="font-medium text-lg">Total: $<span className="italic text-2xl underline">{precioAcumulativo}</span></p>
                    <div className="w-fit flex flex-col items-start gap-2">
                        <p className="text-lg">Cantidad</p>
                        <div className="flex flex-nowrap gap-0 items-center">
                            <button onClick={menos} className="text-xl size-9 font-semibold bg-black/80 text-white rounded-l-xl justify-center items-center transition-200 transition-all hover:bg-[#BE3144]/90 active:brightness-75"> - </button>
                            <p className="flex text-xl h-9 w-9 px-4 bg-white/75 justify-center items-center"> {cantidad}</p>
                            <button onClick={mas} className="text-xl size-9 font-semibold bg-black/80 text-white rounded-r-xl justify-center items-center transition-200 transition-all hover:bg-dark-blue/90 active:brightness-75">+</button>
                        </div>
                    </div>
                    
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