interface CartCardsProps {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

export default function CartCards({ id, title, price, image, quantity }: CartCardsProps) {
    return (
        <article className=" w-4/5 h-64 bg-black/20 flex flex-col gap-4 rounded-xl min-[800px]:flex-row min-[800px]:gap-6">
            <img src={`/recetas/${image}`} alt="imagen de comida" className="w-2/5 object-cover aspect-9/16 rounded-tl-xl rounded-bl-xl"/>
        </article>
    )
}