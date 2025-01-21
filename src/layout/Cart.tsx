import useLocalStorageData from "../hook/useLocalStorageData";
import Navbar from "../components/logic/Navbar";
// import { comidas } from "../utils/Comidas";

export default function Cart() {
    const dataLocalStorage: { [key: string]: any } = useLocalStorageData();

    return (
        <>
            <Navbar
                homeSelected={false}
                AboutSelected={false}
                cartSelected={true}
            />
            <main className="min-h-screen w-screen grid grid-rows-7 grid-cols-1 min-[800px]:grid-rows-1 min-[800px]:grid-cols-7">
                <section className="col-span-5 row-span-full min-[800px]:row-span-full min-[800px]:col-span-5 bg-black/30">
                    <h2 className="text-2xl font-bold">Carrito</h2>
                    <div>
                        {Object.keys(dataLocalStorage).map(clave => (
                            <li key={clave}>
                                <strong>{clave}:</strong> {JSON.stringify(dataLocalStorage[clave])}
                            </li>
                        ))}
                    </div>
                </section>
                <section className="sticky w-full min-[800px]:w-auto min-[800px]:relative min-[800px]:row-span-full min-[800px]:col-span-2 bg-dark-blue/30">
                    hola
                </section>
            </main>
        </>
    )
}