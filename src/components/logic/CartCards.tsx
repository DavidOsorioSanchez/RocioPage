interface CartCardsProps {
    title: string;
    price: number;
    image: string;
    quantity: number;
}

export default function CartCards({ title, price, image, quantity }: CartCardsProps) {
    
    const eliminarItem = () => {
        localStorage.removeItem(title);
        window.location.reload();
    }

    return (
        <article className="w-4/5 max-w-sm min-w-64 h-auto min-h-56 bg-black/20 flex flex-col gap-2 rounded-xl m-4">
            <img src={`/recetas/${image}`} alt="imagen de comida" className="w-full h-auto max-h-36 object-cover aspect-16/9 rounded-t-xl "/>
            <div className="w-full flex flex-col justify-between gap-4 p-4">
                <header className="w-full flex justify-between flex-nowrap items-center ">
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <p className="text-2xl font-semibold">{price}</p>
                </header>
                <footer className="w-full flex justify-between flex-nowrap items-center">
                    <p className="text-lg">Cantidad: {quantity}</p>
                    <button  onClick={eliminarItem} className="text-lg font-semibold bg-[#BE3144] text-white rounded-md px-2 py-1">Eliminar</button>
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