import useLocalStorageData from "../hook/useLocalStorageData";
import Navbar from "../components/logic/Navbar";
// import "../App.css";
import CartCards from "../components/logic/CartCards";
import Separador from "../components/dump/Separador";
// import { comidas } from "../utils/Comidas";

export default function Cart() {
    const dataLocalStorage: { [key: string]: any } = useLocalStorageData();

    return (
        <div id="Cart" className="h-screen w-screen">
            <Navbar
                homeSelected={false}
                AboutSelected={false}
                cartSelected={true}
            />

            <main className="h-auto w-screen flex flex-col min-[760px]:flex-row">
                <section className="h-screen w-screen overflow-y-scroll min-[760px]:h-auto min-[760px]:w-[70vw]">
                    <div className="w-full flex justify-center">
                        <Separador
                            width="w-4/5"
                            text="Carrito."
                            size="text-2xl"
                            bold="font-bold"
                            italic="italic"
                            position="items-center"
                        />
                    </div>
                    <div className="w-full flex flex-wrap justify-around">
                        {Object.keys(dataLocalStorage).map(clave => (
                            <CartCards
                                key={dataLocalStorage[clave].id}
                                title={dataLocalStorage[clave].title}
                                price={dataLocalStorage[clave].price}
                                image={dataLocalStorage[clave].image}
                                quantity={dataLocalStorage[clave].cantidad}
                            />
                        ))}
                    </div>

                </section>
                <article className="sticky bottom-0 w-screen bg-[#e3dfda]/90 overflow-y-hidden shadow-md min-[760px]:w-[30vw] min-[760px]:top-20 min-[760px]:h-[87.4vh] min-[760px]:shadow-lg">
                    hola
                </article>
            </main>
        </div>
    )
}