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
                <section className="col-span-5 row-span-full overflow-scroll min-[800px]:row-span-full min-[800px]:col-span-5 ">
                    <h2 className="text-2xl font-bold">Carrito</h2>
                    <div>
                        {Object.keys(dataLocalStorage).map(clave => (
                            <li key={clave}>
                                <strong>{clave}:</strong> {JSON.stringify(dataLocalStorage[clave])}
                            </li>
                        ))}
                    </div>
                </section>
                <section className="!sticky left-0 top-0 w-full shadow min-[800px]:h-[90vh] min-[800px]:w-auto min-[800px]:shadow-lg min-[800px]:row-span-full min-[800px]:col-span-2 bg-[#e3dfda]/90">
                    hola
                </section>
            </main>
        </>
    )
}