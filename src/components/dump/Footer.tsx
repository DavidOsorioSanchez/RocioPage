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
                    <p className="text-xs">Medellin - Colombia</p>
                </div>
            </section>

            <section className="flex flex-nowrap justify-around items-center gap-4 min-h-full">
                <a href="https://wa.me/573104745978?text=¡Hola!%20Quiero%20Ordenar%20algo🍴." target="_blank">
                    <img src="/whatsapp.svg" alt="whatsapp" className="size-12 p-1 object-cover aspect-square bg-white rounded-full transition-all duration-200 hover:transition-all hover:duration-300 hover:brightness-50" />
                </a>
                <div className="size-12 p-1 object-cover aspect-square bg-white rounded-full transition-all duration-200 hover:transition-all hover:duration-300 hover:brightness-50">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Gmail" role="img" className='rounded-full' viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#ffffff"></rect><path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4"></path><path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335"></path><path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853"></path><path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f"></path><path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04"></path></g></svg>
                </div>
            </section>
        </footer>
    )
}