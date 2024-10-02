import {comidas} from '../../../comidas.ts';


export default function ProductsCards() {
    return (
        <div className="grid grid-cols-1 gap-8 w-full tablet:grid-cols-2 laptop:grid-cols-3 ">
            {comidas.map((data: any) =>(
                <article className="relative rounded-lg w-full h-72 shadow-xl shadow-black/60 border-double border-2 border-black/30 transition-all duration-150 animate-expandir hover:scale-[1.02] active:brightness-75">
                    <img src={`/recetas/${data.bgImage}`} alt={`Una foto de${data.title}`} className="absolute top-0 left-0 w-full h-full aspect-4/3 object-cover rounded-lg" />
                    <footer className="absolute bottom-0 w-full h-fit flex items-center justify-center gap-2 bg-black/80 p-2 text-white rounded-b-lg z-20">
                        <p className="text-xl font-semibold">
                            {data.title}
                        </p>
                        <p className="text-sm">
                            {data.price}
                        </p>
                    </footer>
                </article>
            ))}
        </div>
    )
}