import '../../App.css'

export default function Footer() {
    return (
        <footer className="flex justify-between w-screen h-auto p-2 bg-[#0c1f30] min-h-20 text-white gap-2">
            <section className="min-h-full flex justify-center items-center flex-nowrap">
                <div className="flex flex-col justify-center items-center">
                    <img src="/ladle.png" alt="ladle" className="size-14 object-cover aspect-square" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p id="Caveat" className="text-xl font-semibold">Comida a un click</p>
                    <p className="text-xs">©2024 Rocio Sánchez</p>
                </div>
            </section>

            <section className="flex flex-nowrap justify-around items-center gap-4 min-h-full">
                <a href="https://wa.me/573104745978?text=¡Hola!%20Quiero%20Ordenar%20algo🍴." target="_blank">
                    <img src="/whatsapp.svg" alt="whatsapp" className="size-12 p-1 object-cover aspect-square bg-white rounded-full transition-all duration-200 hover:transition-all hover:duration-300 hover:brightness-50" />
                </a>
                <img src="/gmail.svg" alt="gmail" className="size-12 p-1 object-cover aspect-square bg-white rounded-full transition-all duration-200 hover:transition-all hover:duration-300 hover:brightness-50" />
            </section>
        </footer>
    )
}