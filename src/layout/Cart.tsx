import { useEffect, useState } from "react";
import useLocalStorageData from "../hook/useLocalStorageData";
import Navbar from "../components/logic/Navbar";
import CartCards from "../components/logic/CartCards";
import Separador from "../components/dump/Separador";

export default function Cart() {
    const dataLocalStorage: { [key: string]: any } = useLocalStorageData();
    const [precioTotal, setPrecioTotal] = useState(0);
    
    useEffect(() => {
        let sumaTotal = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            if (clave?.charAt(0) === '_') {
                continue;
            }
            if (!clave) {
                continue;
            }
            const valorString = localStorage.getItem(clave);

            if (!valorString) {
                continue;
            }
            const objeto = JSON.parse(valorString);

            if (objeto && objeto.cantidad && objeto.price) {
                sumaTotal += objeto.cantidad * objeto.price;
            }


        }
        setPrecioTotal(sumaTotal);

    }, [dataLocalStorage]);

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
                    <div className="w-full flex flex-col gap-6 flex-nowrap justify-center items-center">
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
                <article className="sticky flex flex-row bottom-0 w-screen bg-[#e3dfda]/90 overflow-y-hidden shadow-md min-[760px]:flex-col min-[760px]:w-[30vw] min-[760px]:top-20 min-[760px]:h-[87.4vh] min-[760px]:shadow-lg">
                    <header className="bg-black/10">precio total:{precioTotal}</header>
                </article>
            </main>
        </div>
    )
}