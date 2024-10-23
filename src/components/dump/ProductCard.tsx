interface Props {
    bgImage: string;
    title: string;
    price: string;
}

export default function ProductCard({ bgImage, title, price }: Props) {
    return (
        <article className={`${bgImage} relative bg-cover aspect-4/3 bg-center bg-no-repeat rounded-lg w-full h-72 shadow-xl shadow-black/50 border-double border-2 border-black/30 transition-all duration-150 animate-expandir hover:scale-[1.02] active:brightness-75`}>
            <footer className="absolute bottom-0 w-full h-fit flex items-center justify-center gap-2 bg-black/80 p-2 text-white rounded-b-lg">
                <p className="text-xl font-semibold">
                    {title}
                </p>
                <p className="text-sm">
                    {price}
                </p>
            </footer>
        </article>
    )
}