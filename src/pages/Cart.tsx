import { useEffect, useState } from "react";
import useLocalStorageData from "../hook/useLocalStorageData";
import Navbar from "../components/logic/Navbar";
import CartCards from "../components/logic/CartCards";
import Separador from "../components/dump/Separador";
import PayGateway from "../components/logic/PayGateway";

export default function Cart() {
    const dataLocalStorage: { [key: string]: any } = useLocalStorageData();
    const [precioTotal, setPrecioTotal] = useState(0);
    const [precioString, setPrecioString] = useState("");

    useEffect(() => {
        let sumaTotal = 0;
        let numeroTotal: string = "";
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            if (clave?.charAt(0) === '_' || clave?.charAt(0) === "+") {
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
        if(sumaTotal > 999){
            numeroTotal = String(sumaTotal).slice(0, 1) + "." + String(sumaTotal).slice(1);
        }else{
            numeroTotal = String(sumaTotal);
        }

        setPrecioString(numeroTotal);
        setPrecioTotal(sumaTotal);

        localStorage.setItem("+TotalCarrito", JSON.stringify({precioTotalPagar: precioTotal, precioTotalString: precioString}) )
    }, [dataLocalStorage]);

    function consultaTotal() {
        let sumaTotal = 0;
        let numeroTotal: string = "";
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            if (clave?.charAt(0) === '_' || clave?.charAt(0) === "+") {
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
        if(sumaTotal > 999){
            numeroTotal = String(sumaTotal).slice(0, 1) + "," + String(sumaTotal).slice(1);
        }else{
            numeroTotal = String(sumaTotal);
        }

        setPrecioString(numeroTotal);
        setPrecioTotal(sumaTotal);

        localStorage.setItem("+TotalCarrito", JSON.stringify({precioTotalPagar: precioTotal, precioTotalString: precioString}) )
    }

    return (
        <div id="Cart" className="h-screen w-screen">
            
            <nav className="sticky w-full top-0 z-50 min-[760px]:relative">
                <Navbar
                    homeSelected={false}
                    AboutSelected={false}
                    cartSelected={true}
                />
            </nav>
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
                                metodoActualizar={consultaTotal}
                            />
                        ))}
                    </div>

                </section>
                <article className="relative flex flex-col botton-0 w-screen bg-[#e3dfda]/90 overflow-y-hidden shadow-md min-[760px]:sticky min-[760px]:w-[30vw] min-[760px]:top-0 min-[760px]:h-screen min-[760px]:shadow-lg">
                    <header className="bg-black/10 text-3xl py-8 text-center"><span className="text-dark-blue/90">${precioString},000</span> | Precio Total</header>
                    <PayGateway
                        title=""
                        esCarrito={true}
                    />
                </article>
            </main>
        </div>
    )
}